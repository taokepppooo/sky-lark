<!--
 * @Author: taoke
 * @Date: 2022-02-23 21:40:05
 * @LastEditors: taoke
 * @LastEditTime: 2022-02-23 23:29:56
 * @Description:
 * @FilePath: \sky-lark\src\views\parseUrl\parseUrl.vue
-->
<template>
  <div>
    <el-input
      v-model="state.sourceConvertUrl"
      :autosize="{ minRows: 10 }"
      maxlength="5000"
      placeholder="请填写需要解析的地址"
      show-word-limit
      type="textarea"
    />
    <el-row class="button-row" justify="center">
      <el-button type="primary" @click="parseSource">解析</el-button>
      <el-button type="primary" class="link-copy" @click="copyResult"
        >复制结果</el-button
      >
      <el-button @click="clear">清空</el-button>
    </el-row>
    <el-input
      v-model="state.parseConvertUrl"
      :autosize="{ minRows: 10 }"
      maxlength="5000"
      placeholder="请填写需要解析的地址"
      show-word-limit
      type="textarea"
    />
  </div>
</template>

<script setup lang="ts">
import Clipboard from 'clipboard'

const state = reactive({
  sourceConvertUrl: '',
  parseConvertUrl: '',
})
const clear = () => {
  state.sourceConvertUrl = ''
  state.parseConvertUrl = ''
}
const parseSource = () => {
  state.parseConvertUrl = decodeURIComponent(state.sourceConvertUrl)
}
const copyResult = () => {
  if (state.sourceConvertUrl === '') {
    ElMessage({
      showClose: true,
      message: `请填写解析内容!`,
      type: 'error',
    })
    return
  }
  if (state.parseConvertUrl === '') {
    ElMessage({
      showClose: true,
      message: `请解析内容!`,
      type: 'error',
    })
    return
  }

  // 复制访问链接
  const clipboard = new Clipboard('.link-copy', {
    // 点击copy按钮，直接通过text直接返回复印的内容
    text: () => state.parseConvertUrl, // 该文本则为需要复制的内容
  })
  // 通过传递DOM选择器，HTML元素或HTML元素列表实例化
  clipboard.on('success', (e) => {
    ElMessage({
      showClose: true,
      message: '拷贝到剪切板成功！',
      type: 'success',
    })
    e.clearSelection()
    // 释放内存
    clipboard.destroy()
  })
  clipboard.on('error', () => {
    // 不支持复制
    ElMessage({
      showClose: true,
      message: `该浏览器不支持自动复制!`,
      type: 'error',
    })
    // 释放内存
    clipboard.destroy()
  })
}
</script>
<style scoped lang="scss">
@use './style/index.scss';
</style>
