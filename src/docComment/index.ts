/**
 * This is a doc comment for a file
 *
 * ![エビフライトライアングル](http://i.imgur.com/Jjwsc.jpg "サンプル")
 *
 * Hoge is sample class for example of `typedoc-plugin-mermaid`.
 */

/* eslint-disable max-classes-per-file */
/**
 * 倍 ばいん で 2倍
 *
 * ### Example
 * ```js
 * console.log(double(4))
 * // => 8
 * ```
 *
 * @param value
 */
export function double(value: number): number {
  const d = 2;
  return value * d;
}

/**
 * Codeblocks are great for examples
 *
 * ```
 * <my-custom-element>Highlight JS will autodetect the language</my-custom-element>
 * ```
 *
 * ```typescript
 * // Or you can specify the language explicitly
 * const instance = new MyClass();
 * ```
 */
export class MyClass {}

/** More details */
interface Foo {}

/**
 * See the [[Foo]] interface for more details.
 */
export class Bar implements Foo {}

/**
 *
 * @anotherNote つまり あれだよ
 *
 * @category aaa
 *
 * @param target
 * @param text
 */
export function doSomething<T>(target: T, text: string): string {
  // cc:stringだったら嬉しいな
  if (typeof target === 'string') {
    return `${target}${text}`;
  }
  return text;
}

/**
 *
 * @anotherNote それ
 *
 * @category aaa
 *
 * @param target
 * @param text
 */
export function doSomething2<T>(target: T, text: string): string {
  if (typeof target === 'string') {
    // cc:あれ系の処理#0;つまりここは大事
    return `${target}${text}`;
  }
  return text;
}

/**
 *
 * @anotherNote やほー
 *
 * @category bbb
 *
 * @param target
 * @param text
 */
export function xxx<T>(target: T, text: string): string {
  if (typeof target === 'string') {
    return `${target}${text}`;
  }
  return text;
}
