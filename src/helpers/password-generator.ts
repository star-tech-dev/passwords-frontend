interface generateOptions {
  length?: number,
  smallLetters?: boolean,
  largeLetters?: boolean,
  numbers?: boolean,
  symbols?: boolean
}

interface optionsObject {
  length: number,
  smallLetters: boolean,
  largeLetters: boolean,
  numbers: boolean,
  symbols: boolean
}

const defaultOptions = {
  length: 18,
  smallLetters: true,
  largeLetters: true,
  numbers: true,
  symbols: false
} as optionsObject

export function generatePassword (_options: generateOptions) {
  const options = { ...defaultOptions, ..._options } as optionsObject
  let value = ''
  const charset = {
    small: 'abcdefghijklmnopqrstuvwxyz',
    large: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: '~!@#$%^&*()_-+=|:;,.',
    current: ''
  }
  if (options.smallLetters) {
    charset.current += `${charset.small}${charset.small}`
  }
  if (options.largeLetters) {
    charset.current += `${charset.large}${charset.large}`
  }
  if (options.numbers) {
    charset.current += `${charset.numbers}${charset.numbers}`
  }
  if (options.symbols) {
    charset.current += charset.symbols
  }
  for (let i = 0; i < options.length; ++i) {
    value += charset.current.charAt(Math.floor(Math.random() * charset.current.length))
  }
  return value
}
