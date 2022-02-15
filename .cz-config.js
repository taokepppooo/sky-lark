/*
 * @Author: taoke
 * @Date: 2022-01-22 19:00:37
 * @LastEditors: taoke
 * @LastEditTime: 2022-02-15 22:19:33
 * @Description:
 * @FilePath: \sky-lark\.cz-config.js
 */
module.exports = {
  types: [
    { value: '🔧chore', name: '🔧chore: 改变构建流程、或者增加依赖库、工具等' },
    { value: '👷ci', name: '👷ci: CI相关更改' },
    {
      value: '📝docs',
      name: '📝docs: 仅仅修改了文档，比如 README, CHANGELOG, CONTRIBUTE 等',
    },
    { value: '✨feat', name: '✨feat: 新功能' },
    { value: '🐛fix', name: '🐛fix: 修复bug' },
    { value: '🔀merge', name: '🔀merge: 合并分支' },
    { value: '⚡️perf', name: '⚡️perf: 优化相关，比如提升性能、体验' },
    {
      value: '🔨refactor',
      name: '🔨refactor: 代码重构，没有加新功能或者修复 bug',
    },
    { value: '🔖release', name: '🔖release: 发布' },
    {
      value: '🎨style',
      name: '🎨style: 仅仅修改了空格、格式缩进、都好等等，不改变代码逻辑',
    },
    { value: '✅test', name: '✅test: 测试用例，包括单元测试、集成测试等' },
    { value: '⏪revert', name: '⏪revert: 回滚到上一个版本' },
  ],
  // scope 类型（定义之后，可通过上下键选择）
  scopes: [
    ['component', '组件相关'],
    ['views', '页面'],
    ['配置文件', '配置文件'],
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(20)} ${description}`,
    }
  }),
  messages: {
    type: '选择更改类型: ',
    scope: '更改的范围: ',
    customScope: '请输入自定义的scope: ',
    subject: '简短描述: ',
    body: '详细描述: ',
    breaking: '非兼容性重大变更: ',
    footer: '关闭的issues列表: ',
    confirmCommit: '确认提交?',
  },
  breaklineChar: '|',
  // 设置只有 type 选择了 feat 或 fix，才询问 breaking message
  allowBreakingChanges: ['feat', 'fix'],
}
