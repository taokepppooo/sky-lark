/*
 * @Author: taoke
 * @Date: 2022-01-23 08:26:59
 * @LastEditors: taoke
 * @LastEditTime: 2022-01-23 08:26:59
 * @Description:
 * @FilePath: \sky-lark\jest.config.js
 */
module.exports = {
  globals: {
    // work around: https://github.com/kulshekhar/ts-jest/issues/748#issuecomment-423528659
    'ts-jest': {
      diagnostics: {
        ignoreCodes: [151001],
      },
    },
  },
  setupFiles: ['./jest.setup.js'],
  testPathIgnorePatterns: ['/node_modules/', 'dist'],
  modulePathIgnorePatterns: ['/node_modules/', 'dist', 'cypress'],
  testEnvironment: 'jsdom',
  transform: {
    // Doesn't support jsx/tsx since sucrase doesn't support Vue JSX
    '\\.(j|t)s$': '@sucrase/jest-plugin',
    '^.+\\.vue$': 'vue-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  // u can change this option to a more specific folder for test single component or util when dev
  // for example, ['<rootDir>/packages/components/input']
  roots: ['<rootDir>'],
}
