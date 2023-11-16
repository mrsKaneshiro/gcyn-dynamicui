module.exports = {
  extends: ['eslint:recommended', 'plugin:vue/recommended'],
  rules: {
    // 分号 autofixable
    semi: ['error', 'always'],
    // 引号 autofixable
    quotes: ['error', 'single'],
    // 严格等于 https://eslint.org/docs/rules/eqeqeq
    eqeqeq: ['warn', 'always'],
    // 括号 autofixable
    curly: ['error', 'all'],
    // 缩进 autofixable
    indent: ['error', 2],
    // 对象内空格 autofixable
    'object-curly-spacing': ['error', 'always'],
    // 块前空格 autofixable
    'space-before-blocks': ['error', 'always'],
    // keyword 前后空格 autofixable
    'keyword-spacing': 'error',
    // 运算符前后空格 autofixable
    'space-infix-ops': 'error',
    // 最长长度
    'max-len': ['warn', { code: 120, ignoreComments: true }],
    // 操作符换行-句首 autofixable
    'operator-linebreak': ['error', 'before'],
    // 不出现 console 语句
    'no-console': ['warn'],
    // 行尾空格 autofixable
    'no-trailing-spaces': 'error',
    // 规定了块可以嵌套的最大深度，以减少代码的复杂性
    'max-depth': ['warn', 3],
    // 在捕获当前执行环境时执行一致的命名
    'consistent-this': ['error', 'self'],
    // 强制执行块的一致括号样式，1tbs autofixable
    'brace-style': 'error',
    'no-control-regex': 'warn',
    // 不允许未使用的变量，入参前加下划线可忽略
    'no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
      },
    ],
    // 这条规则强制要求在对象和数组字面上统一使用尾部逗号. autofixable
    'comma-dangle': ['error', 'always-multiline'],
    // 不出现 debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 使用字面值创建对象
    'no-new-object': 'warn',
    // 函数生命小括号前空格 autofixable
    'space-before-function-paren': ['error', 'never'],
    // 文件末尾空行 autofixable
    'eol-last': ['error', 'always'],
    // 在 Template 模版中使用组件，应使用 PascalCase 模式 autofixable
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    // prop名, camelCase
    'vue/prop-name-casing': ['warn', 'camelCase'],
    // template 双括号 autofixable
    'vue/html-quotes': ['error', 'double', { avoidEscape: false }],
    // 组件名必须是多单词
    'vue/multi-word-component-names': ['off'],
    // template 属性单行限制 autofixable
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 2,
        },
        multiline: {
          max: 1,
        },
      },
    ],
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  root: true,
  env: {
    node: true,
    browser: true,
  },
  ignorePatterns: [
    'src/modules/drug',
    'vue.config.js',
    'nginx.js',
    'deploy.js',
  ],
};
