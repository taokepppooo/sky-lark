<!--
 * @Author: taoke
 * @Date: 2022-02-02 17:06:24
 * @LastEditors: taoke
 * @LastEditTime: 2022-02-15 22:17:19
 * @Description:
 * @FilePath: \sky-lark\src\components\Header\modules\HeaderNav.vue
-->
<template>
  <el-menu
    class="menu"
    :default-active="activeIndex"
    mode="horizontal"
    :router="true"
  >
    <el-menu-item index="/home">首页</el-menu-item>
    <el-menu-item index="/letter-shift">英文字母转换</el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
const activeIndex = ref('/home')
</script>
<style scoped lang="scss">
@use '../style/headerNav.scss';
</style>
