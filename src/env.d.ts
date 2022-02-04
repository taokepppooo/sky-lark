/*
 * @Author: taoke
 * @Date: 2022-01-30 23:13:40
 * @LastEditors: taoke
 * @LastEditTime: 2022-02-04 18:10:44
 * @Description:
 * @FilePath: \sky-lark\src\env.d.ts
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
