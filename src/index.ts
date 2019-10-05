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
  return {
    foo: getFoo(),
    bar: getBar(),
    baseName: getBaseName(),
  };
}

export const appName: AppName = 'TypeScript work space';
