/*
 * @Author: taoke
 * @Date: 2022-01-21 14:31:48
 * @LastEditors: taoke
 * @LastEditTime: 2022-02-23 23:18:38
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
    // https://github.com/vitejs/vite/issues/5519
    css: {
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove()
                }
              },
            },
          },
        ],
      },
    },
    plugins: [
      vue(),
      AutoImport({
        // global imports to register
        imports: [
          'vue',
          'vue-router',
          'vue-i18n',
          '@vueuse/head',
          '@vueuse/core',
        ],
        eslintrc: {
          enabled: false,
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: true,
        },
        // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
        dts: 'src/auto-imports.d.ts',
      }),
      Components({
        resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
        extensions: ['vue'],
        include: [/\.vue$/, /\.vue\?vue/],
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
