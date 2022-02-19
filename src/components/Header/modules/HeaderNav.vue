<!--
 * @Author: taoke
 * @Date: 2022-02-02 17:06:24
 * @LastEditors: taoke
 * @LastEditTime: 2022-02-17 15:35:18
 * @Description:
 * @FilePath: \sky-lark\src\components\Header\modules\HeaderNav.vue
-->
<template>
  <el-menu class="menu" :default-active="onRoutes" mode="horizontal" router>
    <template v-for="(rou, index) in routerList">
      <template v-if="rou.meta && rou.meta.title">
        <el-menu-item v-if="!rou.children" :key="index" :index="rou.path">{{
          rou.meta.title
        }}</el-menu-item>
        <el-sub-menu v-else :key="rou.path" :index="rou.path">
          <template #title>{{ rou.meta.title }}</template>
          <template v-for="(r, cIndex) in rou.children">
            <template v-if="r.meta && r.meta.title">
              <el-menu-item :key="cIndex" :index="r.path">{{
                r.meta.title
              }}</el-menu-item>
            </template>
          </template>
        </el-sub-menu>
      </template>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
const route = useRoute()
const onRoutes = computed(() => {
  return route.path
})
const router = useRouter()
const routerList = router.options.routes
</script>
<style scoped lang="scss">
@use '../style/headerNav.scss';
</style>
