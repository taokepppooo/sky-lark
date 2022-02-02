<!--
 * @Author: taoke
 * @Date: 2022-02-01 12:56:14
 * @LastEditors: taoke
 * @LastEditTime: 2022-02-02 16:54:13
 * @Description: 页面结构
 * @FilePath: \sky-lark\src\components\Application\src\AppProvider.vue
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
import { SlHeader } from '/@/components/Header'
import { SlMain } from '/@/components/Main'
</script>
<style lang="scss" scoped>
.container {
  display: block;
}

.common-layout .el-main {
  color: var(--el-text-color-primary);
  line-height: 160px;
  text-align: center;
  background-color: #e9eef3;
}

.common-layout > .el-container {
  margin-bottom: 40px;
}
</style>
