# TypeScript work space

|  ᗷ𝐚ᗪgε | 𝒮𝑒𝓇𝓋𝒾𝒸𝑒 |
|:--------|:------|
|[![Actions](https://github.com/baron-code-factory/typescript-work-space/workflows/Node%20CI/badge.svg)](https://github.com/baron-code-factory/typescript-work-space/actions?workflow=Node+CI)|[Ａｃｔｉｏｎｓ](https://github.com/baron-code-factory/typescript-work-space/actions)
|[![License](https://img.shields.io/github/license/baron-code-factory/typescript-work-space?style=for-the-badge&logo=appveyor)](https://github.com/baron-code-factory/typescript-work-space/blob/master/LICENSE)|[ᗰIT](https://github.com/baron-code-factory/typescript-work-space/blob/master/LICENSE)
|[![Maintainability](https://api.codeclimate.com/v1/badges/f43a6023f2def572942c/maintainability)](https://codeclimate.com/github/baron-code-factory/typescript-work-space/maintainability)|[𝘤𝘰𝘥𝘦𝘤𝘭𝘪𝘮𝘢𝘵𝘦](https://codeclimate.com/github/baron-code-factory/typescript-work-space)
|[![GitHub](https://img.shields.io/badge/(%E3%81%A3%E2%97%94%E2%97%A1%E2%97%94)%E3%81%A3%20%E2%99%A5%20GitHub%20%E2%99%A5-%F0%9F%8D%BA%F0%9F%8D%BA%F0%9F%8D%BA-brightgreen?style=for-the-badge&logo=appveyor)](https://github.com/baronTommy)|[GιƚHυႦ](https://github.com/baronTommy)
|[![codecov](https://codecov.io/gh/baron-code-factory/typescript-work-space/branch/master/graph/badge.svg)](https://codecov.io/gh/baron-code-factory/typescript-work-space)|[ᑕOᗪEᑕOᐯ](https://codecov.io/gh/baron-code-factory/typescript-work-space)
|[![Netlify Status](https://api.netlify.com/api/v1/badges/9ac9d26b-1886-4f56-9ae6-2fa77789c77e/deploy-status)](https://app.netlify.com/sites/naughty-mayer-acdfab/deploys)|[𝐓𝐲𝐩𝐞𝐃𝐨𝐜](https://naughty-mayer-acdfab.netlify.com/typedoc/)<br>[𝗷𝘀𝗰𝗽𝗱](https://naughty-mayer-acdfab.netlify.com/jscpd/jscpd-report.html)
|[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fbaron-code-factory%2Ftypescript-work-space.svg?type=small)](https://app.fossa.com/projects/git%2Bgithub.com%2Fbaron-code-factory%2Ftypescript-work-space?ref=badge_small)|[𝐹𝒪𝒮𝒮𝒜](https://app.fossa.com/projects/git%2Bgithub.com%2Fbaron-code-factory%2Ftypescript-work-space/refs/branch/master/f014046d58177db2f863661167d05e17dd64ceac/preview)|
|[![BCH compliance](https://bettercodehub.com/edge/badge/baron-code-factory/typescript-work-space?branch=master)](https://bettercodehub.com/)|[𝐁𝐞𝐭𝐭𝐞𝐫 𝐂𝐨𝐝𝐞𝐡𝐮𝐛](https://bettercodehub.com)
|[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/baron-code-factory/typescript-work-space/releases)|[𝘀𝗲𝗺𝗮𝗻𝘁𝗶𝗰-𝗿𝗲𝗹𝗲𝗮𝘀𝗲](https://github.com/baron-code-factory/typescript-work-space/releases)|
|[![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)](https://gitmoji.carloscuesta.me/)|[Gitmoji](https://gitmoji.carloscuesta.me)|

---

## isntall
- nodenv (anyenv)
- direnv

---

## init
```bash
npm i
```

---


## 確認すること

```bash
# こんな感じになるか？
npx ts-node -r tsconfig-paths/register scripts/check

┌───────────────────────────┬──────────────┐
│          (index)          │    Values    │
├───────────────────────────┼──────────────┤
│ process.env.ARE_YOU_READY │     'ok'     │
│    echo $ARE_YOU_READY    │     'ok'     │
│       .node-version       │  '11.10.1'   │
│          node -v          │ 'v11.10.1'   │
└───────────────────────────┴──────────────┘
```

---

## アカウント作成 や 連携
### Codeclimate

### Renovate

### Codecov
https://github.com/baron-code-factory/typescript-work-space/settings/secrets  

- CODECOV_TOKEN

### Netlify
https://github.com/baron-code-factory/typescript-work-space/settings/secrets  

- NETLIFY_AUTH_TOKEN
- NETLIFY_SITE_ID

### Slack

- SLACK_WEBHOOK_URL

---
## 開発の方針
関数は 可能であれば function  
理由は typedoc で出力した際にわかりやすいから  
```ts
// A
const myFunc = () => 'my Naem'

// B
function myFunc() {
    return 'my Naem'
}
```

todo や isssue 管理  
https://github.com/JasonEtco/todo
```ts
/**
 * TODO Take over the world
 * BODY Humans are weak; Robots are strong. We must cleanse the world of the virus that is humanity.
 */
function ruleOverPunyHumans (p: string) {
  // We must strategize beep boop
}
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

## Support

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/P5P4150S5)

## License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fbaron-code-factory%2Ftypescript-work-space.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fbaron-code-factory%2Ftypescript-work-space?ref=badge_large)
