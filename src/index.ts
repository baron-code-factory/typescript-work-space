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

/**
 *
 * @mermaid まぁめいど
 * 
sequenceDiagram
  participant Alice
  participant Bob
  Alice->>John: Hello John, how are you?
  loop Healthcheck
      John->>John: Fight against hypochondria
  end
  Note right of John: Rational thoughts <br/>prevail!
  John-->>Alice: Great!
  John->>Bob: How about you?
  Bob-->>John: Jolly good!
 */
export const mmid2 = '';

/**
 *
 * @mermaid まぁめいど  
 * 
classDiagram
  Class01 <|-- AveryLongClass : Cool
  Class03 *-- Class04
  Class05 o-- Class06
  Class07 .. Class08
  Class09 --> C2 : Where am i?
  Class09 --* C3
  Class09 --|> Class07
  Class07 : equals()
  Class07 : Object[] elementData
  Class01 : size()
  Class01 : int chimp
  Class01 : int gorilla
  Class08 <--> C2: Cool label
 */
export const mmid3 = '';

/**
 * Hoge is sample class for example of `typedoc-plugin-mermaid`.
 *
 * @mermaid Make TypeDoc easy to use with mermaid.js
 * 
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
 */
export const mmid4 = '';

export const appName: AppName = 'type script app';
