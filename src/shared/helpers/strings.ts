export function addSeparator(num) {
  if (typeof num !== 'string' && typeof num !== 'number') {
    return '0'
  }

  const str = num + ''
  const reversed = str.split('').reverse().join('')
  const separated = reversed.replace(/(\d{3})/g, '$1.')
  const reverted = separated.split('').reverse().join('')
  return reverted.replace(/^\./, '')
}

export const extractNext = (header) => {
  const str = header || ''
  const result = str
    .split(',')
    .find((fragment) => /rel="next"/.test(fragment))

  if (!result) {
    return ''
  }

  const match = result.match(/<(.*)>/)
  return match ? match[1] : ''
}

export const extractTotal = (header) => {
  const str = header || ''
  const result = str
    .split(',')
    .find((fragment) => /rel="last"/.test(fragment))

  if (!result) {
    return 0
  }

  const match = result.match(/[&?]page=(\d+)/)

  return match ? parseInt(match[1], 10) : 0
}
