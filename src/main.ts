/*
 * @Author: taoke
 * @Date: 2022-01-21 14:31:48
 * @LastEditors: taoke
 * @LastEditTime: 2022-01-21 16:43:01
 * @Description:
 * @FilePath: \sky-lark\src\main.ts
 */

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from './store'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.use(store)

app.mount('#app')
