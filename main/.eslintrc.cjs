module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    '@vue/prettier',
    './.eslintrc-auto-import.json'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    // 解析 .ts ⽂件
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true, // 使⽤单引号
        semi: false, // 末尾添加分号
        tabWidth: 2,
        trailingComma: 'none',
        useTabs: false,
        endOfLine: 'auto',
        printWidth: 100,
        bracketSpacing: true
      }
    ],
    'vue/comment-directive': [
      'error',
      {
        reportUnusedDisableDirectives: false
      }
    ]
  }
}
