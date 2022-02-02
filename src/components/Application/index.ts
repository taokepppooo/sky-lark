/*
 * @Author: taoke
 * @Date: 2022-02-01 12:57:41
 * @LastEditors: taoke
 * @LastEditTime: 2022-02-02 01:32:45
 * @Description: 页面结构
 * @FilePath: \sky-lark\src\components\Application\index.ts
 */
import { withNoopInstall } from '/@/utils/with-install'
import appProvider from './src/AppProvider.vue'

export const AppProvider = withNoopInstall(appProvider)
export default AppProvider
