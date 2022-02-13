<!--
 * @Author: taoke
 * @Date: 2022-02-01 12:56:14
 * @LastEditors: taoke
 * @LastEditTime: 2022-02-13 18:29:57
 * @Description: 页面结构
 * @FilePath: \sky-lark\src\components\AppProvider\AppProvider.vue
-->
<template>
  <div class="common-layout">
    <el-container class="container">
      <sl-header></sl-header>
      <el-container>
        <sl-main></sl-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import SlHeader from '/@/components/Header/Header.vue'
import SlMain from '/@/components/Main/Main.vue'
</script>
<style scoped lang="scss">
@use './style/index.scss';
</style>
