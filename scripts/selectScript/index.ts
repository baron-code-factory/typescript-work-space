import { selectScript, consoleReport } from 'enchant-script';
import { filterScript } from 'scripts/filterScript';

if (!process.argv[2]) {
  throw new Error('yarn selectScript ???');
}

const scripts = filterScript(process.argv[2]);

const main = async () => {
  const r = await selectScript(scripts);
  consoleReport(r);

  // eslint-disable-next-line
  const x = (r as any).filter((v: any) => (v as any).exitCode > 0) as [];
  process.exit(x.length);
};
main();
