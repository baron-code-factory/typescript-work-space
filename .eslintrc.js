/* eslint-disable no-magic-numbers */

// eslint-config-prettier
// ESLintとprettierの処理で重複する項目について無効化してくれる

// eslint-plugin-prettier
// prettierで設定できるルールをESLintのルールとして処理できるようにする

module.exports = {
  // TSをESLintで解釈できるようにするparser
  parser: '@typescript-eslint/parser',

  // extends にて、プラグインが提供する推奨設定を指定できます。
  extends: [
    // eslint 推奨ルール
    'eslint:recommended',

    // eslint-plugin-prettier 推奨設定
    'plugin:prettier/recommended',

    // TypeScriptでチェックされる項目を除外する設定
    'plugin:@typescript-eslint/eslint-recommended',
    // typescript-eslint 推奨設定
    'plugin:@typescript-eslint/recommended',

    // ESLintにないTS固有のルールを担う
    'prettier/@typescript-eslint',
    'plugin:jest/recommended',

    // 厳し目の拡張
    'airbnb-base',

    'prettier',
  ],
  plugins: ['@typescript-eslint', 'jest', 'json', 'prettier'],

  settings: {
    'import/resolver': {
      // https://numb86-tech.hatenablog.com/entry/2019/05/09/221954
      node: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
      },
    },
  },
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    'jest/globals': true,
  },
  rules: {
    // .eslintrc.js にPrettierのルールを定義 →
    // ESLintの処理時にPrettierのルールもやってもらう
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        trailingComma: 'all',
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        arrowParens: 'always',
        endOfLine: 'lf',
      },
    ],
    // ts-lintとの差分吸収
    '@typescript-eslint/explicit-function-return-type': 0,

    // ts-lintとの差分吸収
    '@typescript-eslint/explicit-member-accessibility': 0,

    // 空のinterface OK
    '@typescript-eslint/no-empty-interface': 0,

    // export default は必須ではない
    'import/prefer-default-export': 0,

    // aliasの設定がある場合苦しい
    'import/no-unresolved': 0,

    // prettierに任せる
    'object-curly-newline': 0,

    // async await セット
    'require-await': 2,

    // 一行の長さ
    'max-len': 0,

    // マジックナンバー
    'no-magic-numbers': 2,

    // console.log
    'no-console': 2,

    // 1メソッドあたりの行数
    'max-lines-per-function': ['error', 20],

    // ネストの深さ
    'max-depth': ['error', 3],

    // 引数の数
    'max-params': ['error', 3],

    // コールバックの数
    'max-nested-callbacks': ['error', 2],

    // 変数の数
    'max-statements': ['error', 7],

    '@typescript-eslint/no-explicit-any': 2,
  },
};
