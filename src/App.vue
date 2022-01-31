<!--
 * @Author: taoke
 * @Date: 2022-01-21 14:31:48
 * @LastEditors: taoke
 * @LastEditTime: 2022-01-31 20:43:16
 * @Description:
 * @FilePath: \sky-lark\src\App.vue
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import './styles/common/common.scss';

#app {
  margin-top: 60px;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
