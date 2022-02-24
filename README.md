# 技术栈

编码工具: vscode + volar + prettier + esint
包管理工具: pnpm
代码规范: editorconfig + prettier + esint
代码校验和提交规范: husky
主要技术: vite + vue3 + typescript + vue-router + vuex + husky + lint-staged +
cypress + gulp
前端组件: elementui-plus
插件: Vue 3 Snippets + EditorConfig for VS Code + ESlint + Prettier ESlint +
stylelint + stylelint-plus + Vue Language Features (Volar) + TypeScript Vue Plugin (Volar)
`npm init @vitejs/app my-vue-app`

## 注意

gulp deploy 文件`index.ts`

包环境文件`.env.development、.env.production、.env.test`

## nvm node 版本管理

nvm-windows
[https://github.com/coreybutler/nvm-windows/releases](https://note.youdao.com/)

## Prettier

` .prettierrc``pnpm add -D prettier eslint-config-prettier eslint-plugin-prettier `

- `prettier`：prettier 插件的核心代码
- `eslint-config-prettier`：解决 ESLint 中的样式规范和 prettier 中样式规范的冲突，以 prettier 的样式规范为准，使 ESLint 中的样式规范自动失效
- `eslint-plugin-prettier`：将 prettier 作为 ESLint 规范来使用

## Eslint

`pnpm i -D eslint eslint-plugin-vue @typescript-eslint/parser @typescript-eslint/eslint-plugin`

- `eslint`: EsLint 的核心代码
- `eslint-plugin-vue`：[为 Vue 使用 Eslint 的插件](https://eslint.vuejs.org/)
- `@typescript-eslint/parser`：ESLint 的解析器，用于解析 typescript，从而检查和规范 Typescript 代码
- `@typescript-eslint/eslint-plugin`：这是一个 ESLint 插件，包含了各类定义好的检测 Typescript 代码的规范

修改`.eslintrc.js`文件，在 extends 中增加

```JavaScript
[
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
]
```

- 添加配置文件

`npx eslint --init`
解决版本冲突
`npm install --save --legacy-peer-deps`

- `package.json`

```json
"lint": "eslint . --ext .vue,.js,.ts,.jsx,.tsx --max-warnings 0 && pretty-quick --check --branch dev",
"lint:fix": "eslint . --fix --ext .vue,.js,.ts,.jsx,.tsx --max-warnings 0  && pretty-quick --branch dev",
```

- `setting.json`

```JSON
"editor.codeActionsOnSave": {
  "source.fixAll": true
},
"eslint.alwaysShowStatus": true,
```

## stylelint vscode 带插件

`pnpm install --save-dev stylelint stylelint-config-standard stylelint-config-prettier`
`pnpm install --save-dev stylelint-scss`

## vscode 中显示 stylelint 错误

- stylelint-plus 插件

配置 use local version of stylelint 否则会因为版本过老报错

## vscode `settion.json`

```JSON
"editor.codeActionsOnSave": {
  "source.fixAll.stylelint": true
},
"stylelint.validate": [
  "css",
  "less",
  "postcss",
  "scss",
  "vue",
  "sass"
]
```

## `package.json`

```JSON
"scripts": {
    "lint:style": "stylelint \"src/**/*.{css,scss,vue}\"",
    "lint:style:fix": "stylelint --fix \"src/**/*.{css,scss,vue}\"",
},
"lint-staged": {
    "*.{*.css,scss,vue}": "stylelint --fix"
}
```

## 创建`.stylelintrc.json`文件

`"extends": ["stylelint-config-standard", "stylelint-config-prettier"]`

- plugins

`"plugins": ["stylelint-order", "stylelint-declaration-block-no-ignored-properties"],`

## `stylelint-order` 属性顺序

` pnpm install stylelint-order --save-dev``pnpm install stylelint-config-rational-order --save-dev `

## stylelint-config-recommended [避免错误](https://stylelint.io/user-guide/rules/list/#avoid-errors)

`pnpm install stylelint-config-recommended --save-dev`

## sass

` pnpm install sass --save-dev``pnpm install @types/sass --save-dev `

## 增加 setting.json 配置

在.vscode 文件夹中增加`setting.json`配置文件，用于自动保存时，自动修复及检验代码。

```json
{
  "cSpell.words": ["Element Plus", "element-plus"],
  "typescript.tsdk": "node_modules/typescript/lib",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "npm.packageManager": "pnpm",
  "eslint.probe": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "html",
    "vue",
    "markdown"
  ],
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "html",
    "vue",
    "markdown"
  ],
  "vite.devCommand": "pnpm run dev -- --"
```

## 使用 pretty-quick

`pnpm add -D pretty-quick`

```javascript
    "husky": {
        "hooks": {
          "pre-commit": "pretty-quick --staged"
        }
    }
```

## 使用 husky

` pnpm i --save-dev husky``npx husky install `

`commit-msg`和`pre-commit`必须在`.husky`目录
`.husky/commit-msg`

```Bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit
```

` pnpm install lint-staged --save-dev``.husky/pre-commit `

```Bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

pnpm exec lint-staged
pnpm exec pretty-quick --staged
```

- 修改 package.json

```JSON
    "husky": {
        "hooks": {
            "pre-commit": "lint-staged"
        }
    }
```

## commitlint 提交检测

` pnpm install --save-dev @types/node``pnpm install --save-dev@commitlint/config-conventional @commitlint/cli `

## commitizen 是一个撰写合格 Commit message 的工具

` pnpm install --save-dev conventional-changelog-cli``package.json ` scripts
`"log": "conventional-changelog -p angular -i CHANGELOG.md -s && git add CHANGELOG.md"`
`push`后运行`pnpm log`日志生成

## 发布版本控制(替代 npm run version)

`pnpm install --save-dev standard-version`
Add an `npm run` script to your `package.json`:

```javascript
{
  "scripts": {
    "release": "standard-version"
  }
}
```

Now you can use `npm run release` in place of `npm run version`.
`npm run release`可加参数
` git push --follow-tags origin main``package.json `

```javascript
"release:tags": "npm run release && git push --follow-tags origin main",
```

`npm run release -- --prerelease alpha`
To forgo the automated version bump use `--release-as` with the argument `major`, `minor` or `patch`.

- Configuation

`.versionrc`

- Conventional Changelog Configuration Spec(v2.1.0)

## cz-customizable 定制说明包括 git-cz

` package.json``"cz": "cz", `

` pnpm install -g commitizen``pnpm install cz-customizable --save-dev ` 创建`.cz-config.js`

- package.json

```json
"commit": "git add . && cz-customizable",
```

## pnpm

` npm install pnpm --save-dev``.npmrc ` `shamefully-hoist=true`
` pnpm config set registry http://registry.npm.taobao.org ``pnpm install `

vue-router
`pnpm install vue-router@4`

## EditorConfig

`.editorconfig`

```json
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
quote_type = single
```

## Conventional Commits vscode 插件

解决提交不上去问题

## `.gitattributes`

A gitattributes file is a simple text file that gives attributes to pathnames.

```json
* text=auto eol=lf
*.ts linguist-detectable=false
*.css linguist-detectable=false
*.scss linguist-detectable=false
*.js linguist-detectable=true
*.vue linguist-detectable=true
```

## Test

`pnpm install --save-dev babel-core inquirer vue-template-compiler`
` pnpm install --save-dev vue-jest``pnpm install --save-dev resize-observer-polyfill @sucrase/jest-plugin `

## git

查看 config
`git config -l --global`

- 允许 `git push --follow-tags`

`git config --global push.followTags true`

- 解决 fatal: unable to access '[https://github.com/taokepppooo/sky-lark.git/](https://github.com/taokepppooo/sky-lark.git/)': OpenSSL SSL_read: Connection was reset, errno 10054

` git config --global http.sslVerify "false"``git config --global https.sslVerify "false" `

## cypress

A complete end-to-end testing experience.
` pnpm install --save-dev @types/jest``pnpm install --save-dev ts-jest `
A Jest transformer with source map support that lets you use Jest to test projects written in TypeScript
`pnpm install cypress --save-dev`

## Sucrase

Sucrase is an alternative to Babel that allows super-fast development builds.
` pnpm install --save-dev sucrase``pnpm install --save-dev @sucrase/jest-plugin `
`package.json` `scripts` `sucrase-node index.ts`

## rollup JavaScript 模块打包器

## gulp

`pnpm install --save-dev gulp`

## 按需加载

## 组件按需加载

`pnpm i unplugin-vue-components -D`s
生成`components.d.ts`

- 支持 vue2 和 vue3
- 支持 components 和 directives
- 支持 Vite, Webpack, Vue CLI, Rollup, esbuild and more

`vite.config.ts`

### unplugin-vue-components/vite

`import Components from 'unplugin-vue-components/vite'`

### unplugin-vue-components/resolvers

`import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'`

```TypeScript
plugins: [
    Components({
      resolvers: ElementPlusResolver({ importStyle: 'sass' }),
      dts: 'src/components.d.ts',
    }),
],
```

## vue 相关模块自动导入

` pnpm i -D unplugin-auto-import``ref `方法我们可以直接使用并有相应的 TS 语法提示，而不需要手动的去
`import { ref } from 'vue'`
src 目录下添加`auto-imports.d.ts`文件
`vite.config.ts`

```TypeScript
AutoImport({
  imports: ['vue', 'vue-router'],
  eslintrc: {
    enabled: false,
    filepath: './.eslintrc-auto-import.json',
    globalsPropValue: true,
  },
  dts: 'src/auto-imports.d.ts',
}),
```

`.eslintrc.js`

```JavaScript
extends: [
    './.eslintrc-auto-import.json',
],
```

## markdownlint

`pnpm install markdownlint --save-dev`
添加`.markdownlint.json`文件

## dotenv

`pnpm install dotenv --save`
零依赖的模块，它能将环境变量中的变量从 .env 文件加载到 process.env 中

## fs

` pnpm install --save-dev @types/fs-extra``pnpm install --save-dev fs-extra `

## 跟据环境变量构建项目

`vite.config.ts`

```TypeScript
export default ({ mode }) => {
  dotenv.config({ path: `./.env.${mode}` })
  return defineConfig({
    base: process.env.VITE_BASE_URL,
  })
}
```

## Rollup Plugin Visualizer 依赖分析

`pnpm install --save-dev rollup-plugin-visualizer`

## bootstrap

`pnpm install bootstrap`

## 自动部署

`pnpm i --save-dev ts-node`

`pnpm i gulp gulp-sftp-up4 -save-dev`

`pnpm install —-save-dev @vue/tsconfig`

`pnpm install --save-dev gulp-cli`

`pnpm install --save-dev @babel/register @babel/core @babel/preset-env`

解决 gulp 无法 import 问题

`pnpm install gulp @types/gulp sucrase -D`

`pnpm install @babel/preset-typescript —-save-dev`

`pnpm install --save-dev babel-plugin-transform-import-meta`

## 解决打包 warning

## warning: "@charset" must be the first rule in the file

`vite.config.ts`

```TypeScript
// https://github.com/vitejs/vite/issues/5519
    css: {
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove()
                }
              },
            },
          },
        ],
      },
    },
```

`.env.test`

## 剪贴板

`pnpm install clipboard --save`
