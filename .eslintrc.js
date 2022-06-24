module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'arrow-parens': ['warn', 'as-needed'],
    'arrow-spacing': 'warn',
    'comma-dangle': ['warn', 'always-multiline'],
    'comma-spacing': 'warn',
    'default-case': 'warn',
    eqeqeq: 'warn',
    'import/first': 'warn',
    'import/newline-after-import': 'warn',
    'import/no-duplicates': 'error',
    'import/order': 'warn',
    'key-spacing': 'warn',
    'linebreak-style': ['warn', 'unix'],
    // 'newline-after-var': 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-duplicate-imports': ['warn', { includeExports: true }],
    'no-else-return': 'warn',
    'no-extra-boolean-cast': ['warn', { enforceForLogicalOperands: true }],
    'no-extra-semi': 'warn',
    'no-floating-decimal': 'warn',
    'no-multi-spaces': 'warn',
    'no-multiple-empty-lines': ['warn', { max: 1 }],
    'no-param-reassign': 0,
    'no-tabs': 'warn',
    'no-trailing-spaces': 'warn',
    'no-unneeded-ternary': 'warn',
    'no-var': 'warn',
    'no-whitespace-before-property': 'warn',
    'object-curly-newline': ['warn', { ImportDeclaration: { minProperties: 4 } }],
    'object-curly-spacing': ['warn', 'always'],
    'operator-linebreak': ['warn', 'before'],
    semi: 'warn',
    'semi-spacing': ['warn', { before: false, after: true }],
    'semi-style': 'warn',
    'sort-imports': 'off',
    'spaced-comment': ['warn', 'always'],
    'switch-colon-spacing': 'warn',
  },
};
