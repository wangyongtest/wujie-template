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
    "./.eslintrc-auto-import.json"
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: false, // 使⽤单引号
        semi: false, // 末尾添加分号
        tabWidth: 2,
        trailingComma: 'none',
        useTabs: false,
        endOfLine: true
      }
    ]
  }
}
