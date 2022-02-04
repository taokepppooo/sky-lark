/*
 * @Author: taoke
 * @Date: 2022-02-02 00:50:27
 * @LastEditors: taoke
 * @LastEditTime: 2022-02-04 11:12:41
 * @Description:
 * @FilePath: \sky-lark\src\components\main\index.ts
 */
import { withNoopInstall } from '/@/utils/with-install'
import Main from './src/Main.vue'
import './style'

export const SlMain = withNoopInstall(Main)
export default Main
