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
  // cc:sub#0;start;開始
  const foo = getFoo();
  const baseName = getBaseName();
  const bar = getBar();

  // cc:sub#9;end;おしまい
  return {
    foo,
    baseName,
    bar,
  };
}

export const appName: AppName = 'TypeScript work space';
