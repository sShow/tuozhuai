/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'eslint-config-tencent',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
  plugins: [
    'simple-import-sort',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'no-param-reassign': ['error'],
    'no-underscore-dangle': ['error', {
      allowAfterThis: true,
    }],
    // 对象写在一行时，大括号里需要空格
    'object-curly-spacing': ['error', 'always'],
    'simple-import-sort/imports': ['error', {
      groups: [
        ['^[a-zA-Z]'],
        ['^@editor'],
        ['^@components'],
        ['^@hooks'],
        ['^@views'],
        ['^@router'],
        ['^@utils'],
        ['^@styles'],
        ['^@/\\w'],
        ['^\\.\\.'],
        ['^\\.'],
      ],
    }],
    'vue/multi-word-component-names': 'off',
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
        'import/first': 'off',
        'vue/html-closing-bracket-newline': ['error', {
          singleline: 'never',
          multiline: 'never',
        }],
        'vue/attributes-order': ['error', {
          order: [
            'DEFINITION',
            'LIST_RENDERING',
            'CONDITIONALS',
            'RENDER_MODIFIERS',
            'GLOBAL',
            ['UNIQUE', 'SLOT'],
            'TWO_WAY_BINDING',
            'OTHER_DIRECTIVES',
            'OTHER_ATTR',
            'EVENTS',
            'CONTENT',
          ],
          alphabetical: true,
        }],
        'vue/define-macros-order': ['error', {
          order: ['defineProps', 'defineEmits'],
        }],
        'vue/no-undef-properties': ['error', {
          ignores: ['/^\\$/'],
        }],
        'vue/no-unused-properties': ['error', {
          groups: ['props'],
          deepData: false,
          ignorePublicMembers: false,
        }],
        'vue/no-useless-mustaches': ['error', {
          ignoreIncludesComment: false,
          ignoreStringEscape: false,
        }],
        'vue/no-useless-v-bind': ['error', {
          ignoreIncludesComment: false,
          ignoreStringEscape: false,
        }],
        'vue/prefer-separate-static-class': 'error',
        'vue/prefer-true-attribute-shorthand': 'error',
        'vue/script-indent': ['error', 2, {
          baseIndent: 1,
        }],
        'vue/component-name-in-template-casing': ['error', 'kebab-case', {
          registeredComponentsOnly: false,
          ignores: [],
        }],
      },
    },
  ],
};
