/*
 * @Author: taoke
 * @Date: 2022-01-21 14:31:48
 * @LastEditors: taoke
 * @LastEditTime: 2022-02-03 10:20:49
 * @Description:
 * @FilePath: \sky-lark\vite.config.ts
 */
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // global imports to register
      imports: ['vue', 'vue-router'],
      eslintrc: {
        enabled: false,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
      dts: './auto-imports.d.ts',
    }),
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
