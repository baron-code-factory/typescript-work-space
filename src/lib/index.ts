import path from 'path';
/**
 * baseneme 取得する
 */
export function getBaseName() {
  // cc:sub#30;念の為basenameを取得;`basename('')する`意味は無いが...
  return path.basename('');
}
