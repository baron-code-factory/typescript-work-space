const presets = [
  // ES2015以降の文法を使えるようにする定番プリセット
  [
    '@babel/preset-env',
    {
      targets: {
        node: 'current',
      },
    },
  ],

  // 型アノテーションの部分などを取り除く変換を行う。
  '@babel/preset-typescript',

  // ざっくり言うと、preset-typescriptは、TypeScriptからES2015以降への変換を担当し、
  // preset-envは、ES2015以降からES5への変換を担当する。
];

const plugins = [
  // TypeScriptの文法には既に含まれているけど、
  // 今はまだpreset-envには含まれていない文法も使えるようにしておく。
  // preset-envに含まれる日が来たら、これらのプラグインは不要になるはず。

  // ['@babel/plugin-proposal-decorators', { legacy: true }],
  // ['@babel/plugin-proposal-class-properties', { loose: true }],
  // '@babel/proposal-object-rest-spread',

  [
    // aliasを使うため
    require.resolve('babel-plugin-module-resolver'),
    {
      alias: {
        src: './src',
        scripts: './scripts',
      },
    },
  ],
];

module.exports = { presets, plugins };
