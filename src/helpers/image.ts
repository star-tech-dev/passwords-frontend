const colors = ['#FFC6EF', '#A688E0', '#8FD0EE', '#97DBB6', '#BADD7F', '#EFE084', '#DFAD7B', '#EB998C', '#EB8CAA']

const _componentToHex = (color: number) => {
  const hex = color.toString(16)
  return hex.length === 1 ? '0' + hex : hex
}

export const rgbToHex = (rgb: string[] | number[]) => {
  return '#' + _componentToHex(+rgb[0]) + _componentToHex(+rgb[1]) + _componentToHex(+rgb[2])
}

export const getImageRGB = (imgEl: HTMLImageElement | null) => {
  const defaultRGB = [0, 0, 0]

  if (!imgEl) {
    return defaultRGB
  }
  const blockSize = 4 // only visit every 5 pixels
  const canvas = document.createElement('canvas') as HTMLCanvasElement
  const context = canvas.getContext('2d') as CanvasRenderingContext2D
  let data
  let i = -4
  const colorMap = {} as any

  if (!context) {
    return defaultRGB
  }

  const height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height
  const width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width

  context.drawImage(imgEl, 0, 0)

  try {
    data = context.getImageData(0, 0, width, height)
  } catch (e) {
    return defaultRGB
  }

  const length = data.data.length

  while ((i += blockSize * 4) < length) {
    const color = `${data.data[i]},${data.data[i + 1]},${data.data[i + 2]}`
    colorMap[color]
      ? colorMap[color] += 1
      : colorMap[color] = 1
  }

  const biggest = {
    color: Object.keys(colorMap)[0],
    amount: 0
  }
  Object.keys(colorMap).forEach(color => {
    if (colorMap[color] > biggest.amount) {
      biggest.color = color
      biggest.amount = colorMap[color]
    }
  })

  return biggest.color.split(',')
}

export const getImageBase64 = (imgSelector: string | null) => {
  if (!imgSelector) {
    return
  }

  const canvas = document.createElement('canvas') as HTMLCanvasElement
  const imgEl = document.querySelector(imgSelector) as HTMLImageElement | null
  let res = null

  if (!imgEl) {
    return res
  }

  canvas.width = imgEl.naturalWidth
  canvas.height = imgEl.naturalHeight
  const context = canvas.getContext && canvas.getContext('2d') as CanvasRenderingContext2D

  context.drawImage(imgEl, 0, 0)

  try {
    res = canvas.toDataURL()
  } catch (e) {}

  return res
}

export const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)]
}
