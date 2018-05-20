export function addSeparator(num) {
  let str = num+'';
  let reversed = str.split('').reverse().join('');
  let separated = reversed.replace(/(\d{3})/g, '$1.');
  let reverted = separated.split('').reverse().join('');
  return reverted.replace(/^\./, '');
}
