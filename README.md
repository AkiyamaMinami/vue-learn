### 项目复杂度维度

1. 数据量大，复杂场景；
2. 开发效率的提示
3. 性能
4. 用户体验
5. 项目质量

### 项目技术选型

1. 框架 Vue3
2. 语言 TypeScript
3. 包管理 pnpm
4. 代码规范校验 eslint
    - pnpm i eslint -d
    - npx eslint --init
    - 相关依赖的安装 => eslint-plugin-vue@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest eslint@latest
    - 使用@antfu/eslint-config 集成配置
5. git 规范
    - git commit 信息规范 => 增加 hook 配合 eslint 进行规范 => 报错提交失败
    - husky 管理 git hook => pnpm i husky -d / npx husky install
    - 设置 hook => npx husky add .husky/pre-commit "pnpm run lint"
