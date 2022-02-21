/*
 * @Author: taoke
 * @Date: 2022-01-21 14:31:48
 * @LastEditors: taoke
 * @LastEditTime: 2022-02-21 14:53:43
 * @Description:
 * @FilePath: \sky-lark\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import store from './store'

// bootstrap
import 'bootstrap/dist/css/bootstrap.css'

// 导入scss导入总文件
import '/@/styles/src/index.scss'

const app = createApp(App)
app.use(router)
app.use(store)

app.mount('#app')
