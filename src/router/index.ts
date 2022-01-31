/*
 * @Author: taoke
 * @Date: 2022-01-31 15:03:10
 * @LastEditors: taoke
 * @LastEditTime: 2022-01-31 19:12:46
 * @Description: 路由配置
 * @FilePath: \sky-lark\src\router\index.ts
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import { basicRoutes } from './routes'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes,
})
