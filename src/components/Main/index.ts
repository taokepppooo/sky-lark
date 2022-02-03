/*
 * @Author: taoke
 * @Date: 2022-02-02 00:50:27
 * @LastEditors: taoke
 * @LastEditTime: 2022-02-03 09:21:25
 * @Description:
 * @FilePath: \sky-lark\src\components\Main\index.ts
 */
import { withNoopInstall } from '/@/utils/with-install'
import Main from './src/main.vue'
import './style'

export const SlMain = withNoopInstall(Main)
export default Main
