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
 * Hoge is sample class for example of `typedoc-plugin-mermaid`.
 *
 * @mermaid Make TypeDoc easy to use with mermaid.js
 * graph TB
 *   mermaid.js --> TypeDoc;
 *
 * @nomnoml Alice greet to Jone
 * [Pirate|eyeCount: Int|raid();pillage()|
 *   [beard]--[parrot]
 *   [beard]-:>[foul mouth]
 * ]
 *
 * [<abstract>Marauder]<:--[Pirate]
 * [Pirate]- 0..7[mischief]
 * [jollyness]->[Pirate]
 * [jollyness]->[rum]
 * [jollyness]->[singing]
 * [Pirate]-> *[rum|tastiness: Int|swig()]
 * [Pirate]->[singing]
 * [singing]<->[rum]
 *
 * [<start>st]->[<state>plunder]
 * [plunder]->[<choice>more loot]
 * [more loot]->[st]
 * [more loot] no ->[<end>e]
 *
 * [<actor>Sailor] - [<usecase>shiver me;timbers]
 */
export function sub() {
  return {
    foo: getFoo(),
    bar: getBar(),
    baseName: getBaseName(),
  };
}

export const appName: AppName = 'TypeScript work space';
