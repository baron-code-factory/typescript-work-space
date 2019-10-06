import { execSync } from 'child_process';

const main = async () => {
  const check = {
    'process.env.ARE_YOU_READY': process.env.ARE_YOU_READY,
    // direnv でセットした値が正常に動作するか？
    'echo $ARE_YOU_READY': await execSync('/bin/echo -n $ARE_YOU_READY').toString(),
    '.node-version': await execSync('cat .node-version').toString(),
    'node -v': await execSync('node -v').toString(),
  };
  // eslint-disable-next-line no-console
  console.table(check);
};
main();
