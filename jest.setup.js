/*
 * @Author: taoke
 * @Date: 2022-01-23 08:25:11
 * @LastEditors: taoke
 * @LastEditTime: 2022-01-23 08:25:13
 * @Description:
 * @FilePath: \sky-lark\jest.setup.js
 */
/* eslint-disable @typescript-eslint/no-var-requires */
const { config } = require('@vue/test-utils')
const _ResizeObserver = require('resize-observer-polyfill')

config.global.stubs = {}

global.ResizeObserver = _ResizeObserver
process.addListener('unhandledRejection', (err) => console.error(err))
