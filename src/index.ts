import { getBar } from 'src/bar';
import { getFoo } from 'src/foo';
import { getBaseName } from 'src/lib';

// import + export あわせ技
export * from 'src/docComment';

export const main = () => 'I am main';
export const sub = () => ({
  foo: getFoo(),
  bar: getBar(),
  baseName: getBaseName(),
});

export const appName: AppName = 'type script app';
