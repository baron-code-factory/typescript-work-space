import { EnchantScriptsP } from 'enchant-script';
import { scripts as baseScripts } from 'scripts';

if (!process.argv[2]) {
  throw new Error('yarn filterScript ???');
}

export const filterScript = (name: string) => {
  const scripts = new Set<EnchantScriptsP>();

  baseScripts.forEach((item) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((item.opt.custom as any).tags.includes(name)) {
      scripts.add(item);
    }
  });
  return scripts;
};
