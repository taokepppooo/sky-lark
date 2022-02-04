/*
 * @Author: taoke
 * @Date: 2022-01-21 14:31:48
 * @LastEditors: taoke
 * @LastEditTime: 2022-02-04 13:05:13
 * @Description:
 * @FilePath: \sky-lark\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import store from './store'

// 导入scss导入总文件
import '/@/styles/src/index.scss'

const app = createApp(App)
app.use(router)
app.use(store)

app.mount('#app')
