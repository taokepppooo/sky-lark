/*
 * @Author: taoke
 * @Date: 2022-01-21 14:52:45
 * @LastEditors: taoke
 * @LastEditTime: 2022-01-29 13:11:34
 * @Description:
 * @FilePath: \sky-lark\src\store\index.ts
 */
import { createStore } from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
const store = createStore({
  state,
  mutations,
  actions,
  modules: {},
})

export default store
