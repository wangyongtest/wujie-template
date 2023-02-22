
# 目录结构

├── WuJie -------------------------------- 项目结构目录
│   ├── children -------------------------------- 子系统目录
│   │    ├── person ----------------------------------- 人员管理子应用
│   │    │    ├── pwu.js -----------------------------------命令文件
│   ├──  ├── sidebar --------------------------------- 左侧菜单子应用
│   │    │    ├── pwu.js -----------------------------------命令文件
│   │    ├── system ---------------------------------- 系统管理子应用
│   │    │    ├── pwu.js -----------------------------------命令文件
│   ├── main ------------------------------------ 基座目录
│   │    ├── public ---------------------------------------- 静态文件
│   │    ├── src ------------------------------------------- 源文件目录
│   │    │    ├──  api ------------------------------------------   对应模块功能接口相关
│   │    │    ├──  component -------------------------------------  公共组件
│   │    │    ├──  hooks -----------------------------------------  单独功能抽离
│   │    │    ├──  router ----------------------------------------  路由相关
│   │    │    ├──  server-api ------------------------------------  封装axiosApi
│   │    │    ├──  store -----------------------------------------  pinia 多文件或模块共用数据状态存储
│   │    │    ├──  sub-path-config -------------------------------  用于配置wujie子应用路由(初始默认配置项)
│   │    │    ├──  types -----------------------------------------  ts类型定义文件
│   │    │    ├──  utils -----------------------------------------  工具函数库
│   │    │    ├──  components.d.ts -------------------------------  自定义组件自动导入
│   │    │    ├──  env.d.ts --------------------------------------  vue ts文件检测配置，wujie 类型定义
│   │    │    ├──  main.ts ---------------------------------------  项目入口文件
│   │    │    ├── .editorconfig ----------------------------------  编辑器遵循的格式化文件
│   │    │    ├── .env.development -------------------------------  开发环境配置文件
│   │    │    ├── .env.production --------------------------------  生产环境配置文件
│   │    │    ├── .eslintrc-auto-import --------------------------  全局Api导入（在页面中可不用写 import xx from 'vue'）
│   │    │    ├── .eslintrc.cjs ----------------------------------  eslint 校验配置文件
│   │    │    ├── .eslintignore ----------------------------------  ESLint忽略的文件和目录
│   │    │    ├── .gitignore -------------------------------------  Git忽略的文件和目录
│   │    │    ├── .prettierignore -------------------------------- .prettier不检验的文件配置
│   │    │    ├── .prettierrc ------------------------------------ .prettier 格式化配置文件
│   │    │    ├──  auto-imports.d.ts -----------------------------  自动导入
│   │    │    ├──  components.d.ts -------------------------------  自动导入
│   │    │    ├──  index.html ------------------------------------  模板文件
│   │    │    ├──  package-lock.json -----------------------------  插件版本锁定
│   │    │    ├──  package.json ----------------------------------  管理依赖的包
│   │    │    ├──  pnpm-lock.yaml --------------------------------  pnpm管理包的版本号和来源
│   │    │    ├──  tsconfig.json ---------------------------------  typeScript 配置文件
│   │    │    ├──  tsconfig.node.json ----------------------------  tsNode配置文件
│   │    │    ├──  vite.config.ts --------------------------------  vite配置文件
│   ├──  readme --------------------------------- 解释型文件