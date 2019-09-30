import {
  consoleReport,
  // runInOrder,
  // runAll,
  tryRunInOrder,
} from 'enchant-script';
import { filterScript } from 'scripts/filterScript';

const main = async () => {
  const scripts = filterScript('optimization');

  try {
    // const runInOrderR = await runInOrder(scripts);
    // const runAllR = await runAll(scripts);
    const tryRunInOrderR = await tryRunInOrder(scripts);

    // consoleReport('runInOrder', runInOrderR);
    // consoleReport('runAllR', runAllR);
    consoleReport('tryRunInOrder', tryRunInOrderR);

    // eslint-disable-next-line no-magic-numbers
    process.exit(0);
  } catch (e) {
    consoleReport(e.customeData);
    // eslint-disable-next-line no-magic-numbers
    process.exit(1);
  }
};

main();
