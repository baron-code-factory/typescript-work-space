# TypeScript boilerplate

| Badge |  |
|:--------|:------|
|![GitHub](https://img.shields.io/badge/(%E3%81%A3%E2%97%94%E2%97%A1%E2%97%94)%E3%81%A3%20%E2%99%A5%20GitHub%20%E2%99%A5-%F0%9F%8D%BA%F0%9F%8D%BA%F0%9F%8D%BA-brightgreen?style=for-the-badge&logo=appveyor, 'GitHub')  |𝙂𝙞𝙩𝙃𝙪𝙗🍺|
|[![Actions Status](https://github.com/baron-template/typescript/workflows/Node%20CI/badge.svg)](https://github.com/baron-template/typescript/workflows/Node%20CI/badge.svg)|Ａｃｔｉｏｎｓ|
|![license](https://img.shields.io/github/license/baron-template/typescript?style=for-the-badge&logo=appveyor, 'license')|ᗰIT|
|![enchant-script](https://nodei.co/npm/enchant-script.png)|EᑎᑕᕼᗩᑎT-ᔕᑕᖇIᑭT|

## isntall
- nodenv (anyenv)
- direnv
- git-secrets

## init
```bash
bash init.sh
```

## 確認すること

node の version が nodenv の設定通りか？
```bash
nodenv install
nodenv rehash

# 同じか確認
cat .node-version
node -v
```

direnv が 正常に動作するか？
```bash
direnv allow .
echo $ARE_YOU_READY
# ok が表示される
```

```ts
console.log(process.env.ARE_YOU_READY); // ok
```


---

## 方針
- `babel-loader`で`TypeScript`をトランスパイルする。ので`ts-loader`は使用しない
- 型チェックは、`tsc`でする

## 用語

### webpack
- webpack
    - ファイルバンドリング
- webpack-cli
    - webpackをcli上で使用できるようにする。

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

## webpack.config.ts 化
ts-node があれば tsもOK

## babel.config.ts 化
まだないっぽい
