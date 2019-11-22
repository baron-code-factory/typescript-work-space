import { getBar } from 'src/bar';
import { getFoo } from 'src/foo';
import { getBaseName } from 'src/lib';

export * from 'src/docComment'; // import + export あわせ技

/**
 * ## mainの関数
 * すべてはここから始まるよ
 *
 * ```ts
 * main()
 * ```
 *
 * @anotherNote めぃーん
 */
export function main() {
  return 'I am main';
}

/**
 * さぶちゃん
 */
export function sub() {
  // cc:sub#0;;ここがsub処理の開始地点
  const foo = getFoo();
  const baseName = getBaseName();
  const bar = getBar();

  // cc:sub#100;;苦労して集めた戻り値達を一気に返します
  return {
    foo,
    baseName,
    bar,
  };
}

export const appName: AppName = 'TypeScript work space';
