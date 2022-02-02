/*
 * @Author: taoke
 * @Date: 2022-02-01 23:55:16
 * @LastEditors: taoke
 * @LastEditTime: 2022-02-01 23:55:16
 * @Description:
 * @FilePath: \sky-lark\src\utils\types.ts
 */
import type { Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin
