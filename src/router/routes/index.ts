/*
 * @Author: taoke
 * @Date: 2022-01-31 19:06:32
 * @LastEditors: taoke
 * @LastEditTime: 2022-02-01 23:44:21
 * @Description:
 * @FilePath: \sky-lark\src\router\routes\index.ts
 */
import Home from '/@/views/Home.vue'

export const basicRoutes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
]
