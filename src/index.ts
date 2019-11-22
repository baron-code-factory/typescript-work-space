import { getBar } from 'src/bar';
import { getFoo } from 'src/foo';
import { getBaseName } from 'src/lib';

export * from 'src/docComment'; // import + export あわせ技

// cc:remember place
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
  // cc:あれ系の処理#0;つまりここは大事
  return 'I am main';
}

/**
 * さぶちゃん
 */
export function sub() {
  // cc:subの処理で色々値を返すまで#0;ここがsub処理の開始地点
  const foo = getFoo();
  const baseName = getBaseName();
  const bar = getBar();

  // cc:subの処理で色々値を返すまで#100;苦労して集めた戻り値達を一気に返します
  return {
    foo,
    baseName,
    bar,
  };
}

export const appName: AppName = 'TypeScript work space';
