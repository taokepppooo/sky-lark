/*
 * @Author: taoke
 * @Date: 2022-01-21 14:31:48
 * @LastEditors: taoke
 * @LastEditTime: 2022-02-02 20:52:12
 * @Description:
 * @FilePath: \sky-lark\src\main.ts
 */
import { createApp } from 'vue'
import { router } from './router'
import store from './store'
import App from './App.vue'

// 导入scss导入总文件
import '/@/styles/src/index.scss'

const app = createApp(App)
app.use(router)
app.use(store)

app.mount('#app')
