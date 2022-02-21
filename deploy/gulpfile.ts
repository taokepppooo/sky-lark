/*
 * @Author: taoke
 * @Date: 2022-02-19 20:22:43
 * @LastEditors: taoke
 * @LastEditTime: 2022-02-21 15:19:21
 * @Description:
 * @FilePath: \sky-lark\deploy\gulpfile.ts
 */
import sftp from 'gulp-sftp-up4'
import gulp from 'gulp'
import cfg from '.'
const config = cfg.ssh

let modeIndex: number
let modeValue: string
// 获取打包传参
if (process.argv) {
  modeIndex = process.argv.findIndex((element) => element === '--mode')
  if (modeIndex !== -1) {
    modeValue = process.argv[++modeIndex]
  } else {
    throw new Error('打包错误！')
  }
}

gulp.task('default', () => {
  return gulp.src('../dist/**').pipe(
    sftp({
      host: config[modeValue].host,
      port: config[modeValue].port,
      user: config[modeValue].user,
      pass: config[modeValue].pass,
      remotePath: config[modeValue].remotePath,
    })
  )
})
