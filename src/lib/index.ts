import path from 'path';
/**
 * baseneme 取得する
 */
export function getBaseName() {
  // cc:sub#2;経由する;`basename('')する`意味は無いが
  return path.basename('');
}
