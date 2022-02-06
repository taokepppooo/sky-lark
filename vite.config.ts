/*
 * @Author: taoke
 * @Date: 2022-01-21 14:31:48
 * @LastEditors: taoke
 * @LastEditTime: 2022-02-06 20:51:00
 * @Description:
 * @FilePath: \sky-lark\vite.config.ts
 */
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import dotenv from 'dotenv'
import { visualizer } from 'rollup-plugin-visualizer'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

export default ({ mode }) => {
  dotenv.config({ path: `./.env.${mode}` })
  return defineConfig({
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
        dts: 'src/auto-imports.d.ts',
      }),
      Components({
        resolvers: ElementPlusResolver({ importStyle: 'sass' }),
        dts: 'src/components.d.ts',
      }),
      visualizer({
        filename: './node_modules/.cache/visualizer/stats.html',
        open: true,
        gzipSize: true,
        brotliSize: true,
      }),
    ],
    base: process.env.VITE_BASE_URL,
    build: {
      outDir: process.env.VITE_OUTPUT_DIR,
    },
    resolve: {
      alias: [
        {
          find: /\/@\//,
          replacement: `${pathResolve('src')}/`,
        },
      ],
    },
    server: {
      port: 8080,
      strictPort: true,
      proxy: {
        '/api': {
          target: 'http://localhost',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  })
}
