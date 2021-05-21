/**
 * is all fields empty helper
 * @param data {object}
 * @param exclude {array}
 * @returns {boolean}
 */
export const isAllFieldsEmpty = (data: object, exclude: string[] = []) => {
  let isFilled = false
  Object.entries(data).every(pair => {
    if (exclude.includes(pair[0])) {
      return true
    }
    if (pair[1]) {
      isFilled = true
      return false
    }
    return true
  })
  return !isFilled
}

export default {
  isAllFieldsEmpty
}
