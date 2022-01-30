/*
 * @Author: taoke
 * @Date: 2022-01-22 13:40:36
 * @LastEditors: taoke
 * @LastEditTime: 2022-01-29 13:38:44
 * @Description:
 * @FilePath: \sky-lark\commitlint.config.js
 */
module.exports = { extends: ['@commitlint/config-conventional'] }

module.exports = {
  rules: {
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 72],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
      1,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-enum': [
      2,
      'always',
      [
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'merge',
        'perf',
        'refactor',
        'release',
        'style',
        'test',
        'revert',
      ],
    ],
  },
}
