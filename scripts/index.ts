import { EnchantScriptsP, betterOption } from 'enchant-script';

type Tag = 'optimization';
type Custom = {
  tags: [Tag, ...Tag[]];
};

const target = '{src,scripts}';
export const scripts = new Set<EnchantScriptsP<Custom>>();
scripts.add({
  script: ['npx eslint ".**.{js,ts}" --fix --no-ignore'],
  ...betterOption,
  opt: {
    name: 'eslint -> 設定ファイル全般',
    description: 'eslintを適用する -> 設定ファイル全般',
    custom: {
      tags: ['optimization'],
    },
  },
});
scripts.add({
  script: [`npx eslint "${target}/**/*.{ts,js,json}" --fix`],
  ...betterOption,
  opt: {
    name: 'eslint -> code',
    description: 'eslintを適用する -> ソースコード全般',
    custom: {
      tags: ['optimization'],
    },
  },
});
scripts.add({
  script: [`npx jscpd "${target}" --config .jscpd.json`],
  ...betterOption,
  opt: {
    name: 'jscpd',
    description: 'コードの冗長な部分の検出',
    custom: {
      tags: ['optimization'],
    },
  },
});
scripts.add({
  script: ['npx tsc'],
  ...betterOption,
  opt: {
    name: 'tsc',
    description: '型チェック',
    custom: {
      tags: ['optimization'],
    },
  },
});
scripts.add({
  script: ['npx jest --coverage'],
  ...betterOption,
  opt: {
    name: 'test',
    description: '単体テスト codecovとの連携があるので coverageを毎回出力 重くなったら CI時実行',
    custom: {
      tags: ['optimization'],
    },
  },
});

scripts.add({
  script: [`npx typedoc src`],
  ...betterOption,
  opt: {
    name: 'typedoc',
    description: 'typedocを出力',
    custom: {
      tags: ['optimization'],
    },
  },
});
