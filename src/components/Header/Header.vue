<!--
 * @Author: taoke
 * @Date: 2022-02-02 00:30:15
 * @LastEditors: taoke
 * @LastEditTime: 2022-02-05 21:27:45
 * @Description:
 * @FilePath: \sky-lark\src\components\Header\Header.vue
-->
<template>
  <el-header>
    <header-nav></header-nav>
  </el-header>
</template>

<script setup lang="ts">
import HeaderNav from './modules/HeaderNav.vue'
</script>
<style scoped lang="scss">
@use './style/index.scss';
</style>
