<!--
 * @Author: taoke
 * @Date: 2022-02-01 12:56:14
 * @LastEditors: taoke
 * @LastEditTime: 2022-02-15 17:05:18
 * @Description: 页面结构
 * @FilePath: \sky-lark\src\components\AppProvider\AppProvider.vue
-->
<template>
  <div class="common-layout">
    <sl-header></sl-header>
    <sl-main></sl-main>
  </div>
</template>

<script setup lang="ts">
import SlHeader from '/@/components/Header/Header.vue'
import SlMain from '/@/components/Main/Main.vue'
</script>
<style scoped lang="scss">
@use './style/index.scss';
</style>
