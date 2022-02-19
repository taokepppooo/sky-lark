<!--
 * @Author: taoke
 * @Date: 2022-02-02 00:30:15
 * @LastEditors: taoke
 * @LastEditTime: 2022-02-15 21:11:39
 * @Description:
 * @FilePath: \sky-lark\src\components\Header\Header.vue
-->
<template>
  <el-header>
    <div class="logo">
      <el-image class="logo-img" :src="url" fit="fill"></el-image>
    </div>
    <header-nav class="nav"></header-nav>
  </el-header>
</template>

<script setup lang="ts">
import HeaderNav from './modules/headerNav.vue'
const url =
  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
</script>
<style scoped lang="scss">
@use './style/index.scss';
</style>
