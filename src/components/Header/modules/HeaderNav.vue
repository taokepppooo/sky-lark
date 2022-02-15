<!--
 * @Author: taoke
 * @Date: 2022-02-02 17:06:24
 * @LastEditors: taoke
 * @LastEditTime: 2022-02-15 15:09:52
 * @Description:
 * @FilePath: \sky-lark\src\components\Header\modules\HeaderNav.vue
-->
<template>
  <el-menu class="menu" :default-active="activeIndex" mode="horizontal">
    <el-menu-item index="1">Processing Center</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3" disabled>Info</el-menu-item>
    <el-menu-item index="4">Orders</el-menu-item>
    <el-menu-item index="5">Orders</el-menu-item>
    <el-menu-item index="6">Orders</el-menu-item>
    <el-menu-item index="7">Orders</el-menu-item>
    <el-menu-item index="8">Orders</el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
const activeIndex = ref('1')
</script>
<style scoped lang="scss">
@use '../style/headerNav.scss';
</style>
