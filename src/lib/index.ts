import path from 'path';
/**
 * baseneme 取得する
 */
export function getBaseName() {
  // cc:subの処理で色々値を返すまで#30;念の為basenameを取得;`basename('')する`意味は無いが...
  return path.basename('');
}
