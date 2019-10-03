# TypeScript boilerplate

|  ᗷ𝐚ᗪgε | 𝒮𝑒𝓇𝓋𝒾𝒸𝑒 |URL|
|:--------|:------|:------|
|[![Actions](https://github.com/baron-template/typescript/workflows/Node%20CI/badge.svg)](https://github.com/baron-template/typescript/actions?workflow=Node+CI)|Ａｃｔｉｏｎｓ|https://github.com/baron-template/typescript/actions|
|[![License](https://img.shields.io/github/license/baron-template/typescript?style=for-the-badge&logo=appveyor)](https://github.com/baron-template/typescript/blob/master/LICENSE)|ᗰIT|https://github.com/baron-template/typescript/blob/master/LICENSE|
|[![Maintainability](https://api.codeclimate.com/v1/badges/e287e6b01ca920710fbb/maintainability)](https://codeclimate.com/github/baron-template/typescript/maintainability)|𝘤𝘰𝘥𝘦𝘤𝘭𝘪𝘮𝘢𝘵𝘦|https://codeclimate.com/github/baron-template/typescript|
|[![GitHub](https://img.shields.io/badge/(%E3%81%A3%E2%97%94%E2%97%A1%E2%97%94)%E3%81%A3%20%E2%99%A5%20GitHub%20%E2%99%A5-%F0%9F%8D%BA%F0%9F%8D%BA%F0%9F%8D%BA-brightgreen?style=for-the-badge&logo=appveyor)](https://github.com/baronTommy)|GιƚHυႦ|https://github.com/baronTommy|
|[![codecov](https://codecov.io/gh/baron-template/typescript/branch/master/graph/badge.svg)](https://codecov.io/gh/baron-template/typescript)|ᑕOᗪEᑕOᐯ|https://codecov.io/gh/baron-template/typescript|
|[![enchant-script](https://nodei.co/npm/enchant-script.png)](https://www.npmjs.com/package/enchant-script)|EᑎᑕᕼᗩᑎT-ᔕᑕᖇIᑭT|https://www.npmjs.com/package/enchant-script|

---

## isntall
- nodenv (anyenv)
- direnv
- git-secrets

---

## init
```bash
bash init.sh
```

---


## 確認すること

```bash
# こんな感じになるか？
npx ts-node -r tsconfig-paths/register scripts/testEnv

┌───────────────────────────┬──────────────┐
│          (index)          │    Values    │
├───────────────────────────┼──────────────┤
│ process.env.ARE_YOU_READY │     'ok'     │
│    echo $ARE_YOU_READY    │     'ok'     │
│       .node-version       │  '11.10.1'   │
│          node -v          │ 'v11.10.1\n' │
└───────────────────────────┴──────────────┘
```

---

## アカウント作成 や 連携
- codeclimate
- renovate

---

## ビルドなど
`webpack` & `babel` でやります

- `babel-loader`で`TypeScript`をトランスパイルする。ので`ts-loader`は使用しない
- 型チェックは、`tsc`でする

### webpack
- webpack
    - ファイルバンドリング
- webpack-cli
    - webpackをcli上で使用できるようにする。

#### webpack.config.ts 化
ts-node があれば tsもOK

### babel
- @babel/core
    - トランスパイラ
- @babel/preset-env
    - サポートされている環境に基づいて必要なBabelプラグインを自動で決定するライブラリ
- babel-loader
    - webpack上でbabelを使用するために必要
- @babel/preset-typescript
    - TSからJSへトランスパイル
- @babel/plugin-proposal-class-properties
- @babel/plugin-proposal-object-rest-spread

TypeScriptの文法には既に含まれているけど、
今はまだpreset-envには含まれていない文法も使えるようにしておく。
preset-envに含まれる日が来たら、これらのプラグインは不要になるはず。

#### babel.config.ts 化

まだないっぽい

---

## 開発の方針
```ts
// `function` 押しで
// 理由は typedoc で出力した際にわかりやすいから

// A
const myFunc = () => 'my Naem'

// B
function myFunc() {
    return 'my Naem'
}
```
