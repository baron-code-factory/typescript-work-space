/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import { Configuration, RuleSetRule } from 'webpack';
import merge from 'webpack-merge';
import { production } from 'configs/webpack/production';
import { development } from 'configs/webpack/development';

const processExitErrCode = 1;

const rules: RuleSetRule[] = [
  {
    // 拡張子 .ts の場合
    test: /\.ts$/,
    // TypeScript をコンパイルする
    use: 'babel-loader',
  },
];

const base: Configuration = {
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: './src/index.ts',

  // 出力先
  output: {
    filename: 'index.js',
    path: path.join(process.cwd(), 'dist'),
  },

  // import 文で .ts ファイルを解決するため
  resolve: {
    extensions: ['.ts', '.js'],
  },

  module: {
    rules,
  },
};

const getEnvConfig = () => {
  if (process.env.NODE_ENV === 'production') {
    return production;
  }

  if (process.env.NODE_ENV === 'development') {
    return development;
  }

  return null;
};

const envConfig = getEnvConfig();
const config = envConfig === null ? process.exit(processExitErrCode) : merge(base, envConfig);

export default config;
