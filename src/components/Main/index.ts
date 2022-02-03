/*
 * @Author: taoke
 * @Date: 2022-02-02 00:50:27
 * @LastEditors: taoke
 * @LastEditTime: 2022-02-03 09:55:41
 * @Description:
 * @FilePath: \sky-lark\src\components\Main\index.ts
 */
import { withNoopInstall } from '/@/utils/with-install'
import Main from './src/Main.vue'
import './style'

export const SlMain = withNoopInstall(Main)
export default Main
