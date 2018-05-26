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

export const extractNext = (header) => {
  const str = header || '';
  const result = str
    .split(',')
    .find((fragment) => /rel="next"/.test(fragment));

  if (!result) {
    return '';
  }

  const match = result.match(/<(.*)>/);
  return match? match[1] : '';
};

export const extractTotal = (header) => {
  const str = header || '';
  const result = str
    .split(',')
    .find((fragment) => /rel="last"/.test(fragment));

  if (!result) {
    return 0;
  }

  const match = result.match(/[&?]page=(\d+)/);
  return match? parseInt(match[1], 10) : 0;
};
