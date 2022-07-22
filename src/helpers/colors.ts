export const colors = ['red', 'blue', 'orange', 'violet', 'green']

export const getColors = (length?: number) => {
  return colors.slice(0, length || colors.length)
}

export default colors
