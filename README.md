# TypeScript boilerplate

|  ᗷ𝐚ᗪgε | 𝒮𝑒𝓇𝓋𝒾𝒸𝑒 |
|:--------|:------|
|[![Actions](https://github.com/baron-template/typescript/workflows/Node%20CI/badge.svg)](https://github.com/baron-template/typescript/actions?workflow=Node+CI)|[Ａｃｔｉｏｎｓ](https://github.com/baron-template/typescript/actions)
|[![License](https://img.shields.io/github/license/baron-template/typescript?style=for-the-badge&logo=appveyor)](https://github.com/baron-template/typescript/blob/master/LICENSE)|[ᗰIT](https://github.com/baron-template/typescript/blob/master/LICENSE)
|[![Maintainability](https://api.codeclimate.com/v1/badges/e287e6b01ca920710fbb/maintainability)](https://codeclimate.com/github/baron-template/typescript/maintainability)|[𝘤𝘰𝘥𝘦𝘤𝘭𝘪𝘮𝘢𝘵𝘦](https://codeclimate.com/github/baron-template/typescript)
|[![GitHub](https://img.shields.io/badge/(%E3%81%A3%E2%97%94%E2%97%A1%E2%97%94)%E3%81%A3%20%E2%99%A5%20GitHub%20%E2%99%A5-%F0%9F%8D%BA%F0%9F%8D%BA%F0%9F%8D%BA-brightgreen?style=for-the-badge&logo=appveyor)](https://github.com/baronTommy)|[GιƚHυႦ](https://github.com/baronTommy)
|[![codecov](https://codecov.io/gh/baron-template/typescript/branch/master/graph/badge.svg)](https://codecov.io/gh/baron-template/typescript)|[ᑕOᗪEᑕOᐯ](https://codecov.io/gh/baron-template/typescript)
|[![Netlify Status](https://api.netlify.com/api/v1/badges/9ac9d26b-1886-4f56-9ae6-2fa77789c77e/deploy-status)](https://app.netlify.com/sites/naughty-mayer-acdfab/deploys)|[𝐓𝐲𝐩𝐞𝐃𝐨𝐜](https://naughty-mayer-acdfab.netlify.com/typedoc/)<br>[𝗷𝘀𝗰𝗽𝗱](https://naughty-mayer-acdfab.netlify.com/jscpd/jscpd-report.html)


## Document

- [𝐓𝐲𝐩𝐞𝐃𝐨𝐜](https://naughty-mayer-acdfab.netlify.com/typedoc/)
- [𝗷𝘀𝗰𝗽𝗱](https://naughty-mayer-acdfab.netlify.com/jscpd/jscpd-report.html)
- [ᑕOᗪEᑕOᐯ](https://codecov.io/gh/baron-template/typescript)
- [𝘤𝘰𝘥𝘦𝘤𝘭𝘪𝘮𝘢𝘵𝘦](https://codeclimate.com/github/baron-template/typescript)

---

## isntall
- nodenv (anyenv)
- direnv
- git-secrets

---

## init
```bash
bash init.sh
npm i
```

---

## アカウント作成 や 連携
### codeclimate

### Renovate
https://github.com/baron-template/typescript/settings/secrets  
- `CODECOV_TOKEN` 追加

### Netlify
- `NETLIFY_AUTH_TOKEN` 追加
- `NETLIFY_SITE_ID` 追加


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
// 関数は 可能であれば function
// 理由は typedoc で出力した際にわかりやすいから

// A
const myFunc = () => 'my Naem'

// B
function myFunc() {
    return 'my Naem'
}
```
