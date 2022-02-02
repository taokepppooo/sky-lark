/*
 * @Author: taoke
 * @Date: 2022-02-01 13:01:28
 * @LastEditors: taoke
 * @LastEditTime: 2022-02-02 01:22:29
 * @Description:
 * @FilePath: \sky-lark\src\utils\with-install.ts
 */
import { NOOP } from '@vue/shared'
import type { SFCWithInstall } from './types'

/**
 * install component
 * @param main
 * @param extra
 * @returns
 */
export const withInstall = <T, E extends Record<string, any>>(
  main: T,
  extra?: E
) => {
  ;(main as SFCWithInstall<T>).install = (app): void => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp)
    }
  }

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      ;(main as any)[key] = comp
    }
  }
  return main as SFCWithInstall<T> & E
}

/**
 * @description: noop install component
 * @param {*} T
 * @return {*}
 */
export const withNoopInstall = <T>(component: T) => {
  ;(component as SFCWithInstall<T>).install = NOOP

  return component as SFCWithInstall<T>
}
