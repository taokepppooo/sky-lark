/*
 * @Author: taoke
 * @Date: 2022-01-31 19:06:32
 * @LastEditors: taoke
 * @LastEditTime: 2022-02-17 15:28:29
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
    component: () => import('../../views/letterShift/letterShift.vue'),
    children: [
      {
        path: '/letter-shift',
        name: 'letter-shift',
        meta: {
          title: '英文字母转换',
        },
        component: () => import('../../views/letterShift/letterShift.vue'),
      },
    ],
  },
]
