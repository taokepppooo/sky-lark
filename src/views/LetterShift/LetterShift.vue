<!--
 * @Author: taoke
 * @Date: 2022-02-15 22:08:23
 * @LastEditors: taoke
 * @LastEditTime: 2022-02-23 21:30:05
 * @Description:
 * @FilePath: \sky-lark\src\views\letterShift\letterShift.vue
-->
<template>
  <div>
    <el-input
      v-model="state.convertContent"
      :autosize="{ minRows: 10 }"
      maxlength="5000"
      placeholder="请填写转换的内容"
      show-word-limit
      type="textarea"
    />
    <el-row class="button-row" :gutter="24">
      <el-button type="primary" @click="upperCase">全大写</el-button>
      <el-button type="primary" @click="lowerCase">全小写</el-button>
      <el-button type="primary" @click="textTransformcapitalize"
        >单词首字母大写</el-button
      >
      <el-button type="primary" @click="lowerRowFirstLetter"
        >每行首字母小写</el-button
      >
      <el-button type="primary" @click="upperRowFirstLetter"
        >每行首字母大写</el-button
      >
      <el-button @click="clear">清空</el-button>
    </el-row>
    <el-row class="button-row" :gutter="24">
      <el-button type="primary" @click="spaceConvertUnderline"
        >空格转下划线</el-button
      >
      <el-button type="primary" @click="underlineConvertCamel"
        >下划线转驼峰</el-button
      >
      <el-button type="primary" @click="camelConvertUnderline"
        >驼峰转下划线</el-button
      >
      <el-button type="primary" @click="underlineConvertSpace"
        >下划线转空格</el-button
      >
      <el-button type="primary" @click="underlineConvertHyphen"
        >下划线转中横线</el-button
      >
      <el-button type="primary" @click="hyphenConvertUnderline"
        >中横线转下划线</el-button
      >
      <el-button type="primary" @click="pointConvertUnderline"
        >小数点转下划线</el-button
      >
    </el-row>
    <el-row class="button-row custom-convert" :gutter="24">
      <el-col :span="2" class="head-col">
        <el-input v-model="state.preConvert"> </el-input
      ></el-col>
      <span>转换为</span>
      <el-col :span="2">
        <el-input v-model="state.suffixConvert"> </el-input
      ></el-col>
      <el-button type="primary" @click="customConvert">自定义转换</el-button>
    </el-row>
    <div class="tip custom-block">
      <p class="custom-block-title">注意</p>
      <p>首字母转大写仅在英文单词前有空格的情况下才有效；</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const state = reactive({
  convertContent: '',
  preConvert: '',
  suffixConvert: '',
})
const upperCase = () => {
  state.convertContent = state.convertContent.toUpperCase()
}
const lowerCase = () => {
  state.convertContent = state.convertContent.toLowerCase()
}
const textTransformcapitalize = () => {
  state.convertContent = state.convertContent
    .toLowerCase()
    .replace(/( |^|\n)[a-z]/g, (content: string) => content.toUpperCase())
}
const rowConverConmmon = (regex: RegExp, toCase: string) => {
  const convertContentArr: string[] = state.convertContent.split('\n')
  const contentStrArr: string[] = []
  convertContentArr.forEach((content: string) => {
    content = content
      .trim()
      .replace(regex, (content: string) => content[toCase]())
    contentStrArr.push(content)
  })
  state.convertContent = contentStrArr.join('\n')
}
const lowerRowFirstLetter = () => {
  rowConverConmmon(/(^)[A-Z]/g, 'toLowerCase')
}
const upperRowFirstLetter = () => {
  rowConverConmmon(/(^)[a-z]/g, 'toUpperCase')
}
const clear = () => {
  state.convertContent = ''
}
const charConvertCommon = (front: RegExp, later: string | any) => {
  state.convertContent = state.convertContent.replace(front, later)
}
const spaceConvertUnderline = () => {
  charConvertCommon(/ /g, '_')
}
const underlineConvertCamel = () => {
  const str: string[] = state.convertContent.split('_')
  let result: string = str[0]
  for (let i = 1; i < str.length; i++) {
    result = result + str[i].slice(0, 1).toUpperCase() + str[i].slice(1)
  }
  state.convertContent = result
}
const camelConvertUnderline = () => {
  charConvertCommon(/\B([A-Z])/g, '_$1')
  state.convertContent = state.convertContent.toLowerCase()
}
const underlineConvertSpace = () => {
  charConvertCommon(/_/g, ' ')
}
const underlineConvertHyphen = () => {
  charConvertCommon(/_/g, '-')
}
const hyphenConvertUnderline = () => {
  charConvertCommon(/-/g, '_')
}
const pointConvertUnderline = () => {
  charConvertCommon(/\./g, '_')
}
const customConvert = () => {
  charConvertCommon(
    new RegExp(`\\${state.preConvert}`, 'g'),
    state.suffixConvert
  )
}
</script>
<style scoped lang="scss">
@use './style/index.scss';
</style>
