export function addSeparator(num) {
  if (typeof num !== 'string' && typeof num !== 'number') {
    return '0';
  }

  let str = num+'';
  let reversed = str.split('').reverse().join('');
  let separated = reversed.replace(/(\d{3})/g, '$1.');
  let reverted = separated.split('').reverse().join('');
  return reverted.replace(/^\./, '');
}

export const isEnabled = (str) => ['false', '0', 0, false].indexOf(str) < 0;
