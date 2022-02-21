/*
 * @Author: taoke
 * @Date: 2022-02-20 12:46:49
 * @LastEditors: taoke
 * @LastEditTime: 2022-02-20 14:01:40
 * @Description:
 * @FilePath: \sky-lark\deploy\example.ts
 */

const config = {
  ssh: {
    test: {
      host: 'xx.xx.xx.xx',
      port: '22',
      user: 'root',
      pass: 'xxx',
      remotePath: '/home/sky-lark/',
    },
    production: {
      host: 'xx.xx.xx.xx',
      port: '22',
      user: 'root',
      pass: 'xxx',
      remotePath: '/home/sky-lark/',
    },
  },
}

export default config
