/*
 * @Author: taoke
 * @Date: 2022-01-31 19:06:32
 * @LastEditors: taoke
 * @LastEditTime: 2022-02-15 22:16:59
 * @Description:
 * @FilePath: \sky-lark\src\router\routes\index.ts
 */
import Home from '/@/views/Home/Home.vue'
import LetterShift from '/@/views/LetterShift/LetterShift.vue'

export const basicRoutes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/letter-shift',
    name: 'letter-shift',
    component: LetterShift,
  },
]
