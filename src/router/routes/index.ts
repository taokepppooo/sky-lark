/*
 * @Author: taoke
 * @Date: 2022-01-31 19:06:32
 * @LastEditors: taoke
 * @LastEditTime: 2022-02-23 21:59:32
 * @Description:
 * @FilePath: \sky-lark\src\router\routes\index.ts
 */
const Home = () => import('/@/views/home/home.vue')

export const basicRoutes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页',
    },
    component: Home,
  },
  {
    path: '/text',
    name: 'text',
    meta: {
      title: '文本工具',
    },
    component: () => import('/@/components/main/main.vue'),
    children: [
      {
        path: '/letter-shift',
        name: 'letter-shift',
        meta: {
          title: '英文字母转换',
        },
        component: () => import('/@/views/letterShift/letterShift.vue'),
      },
      {
        path: '/parse-url',
        name: 'parse-url',
        meta: {
          title: '地址解析',
        },
        component: () => import('/@/views/parseUrl/parseUrl.vue'),
      },
    ],
  },
]
