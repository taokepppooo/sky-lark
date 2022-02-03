/*
 * @Author: taoke
 * @Date: 2022-01-21 14:31:48
 * @LastEditors: taoke
 * @LastEditTime: 2022-02-02 22:38:04
 * @Description:
 * @FilePath: \sky-lark\vite.config.ts
 */
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: ElementPlusResolver(),
      dts: false,
    }),
  ],
  resolve: {
    alias: [
      {
        find: /\/@\//,
        replacement: `${resolve('src')}/`,
      },
    ],
  },
  server: {
    port: 8080,
    strictPort: true,
  },
})
