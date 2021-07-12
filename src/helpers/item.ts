import { Item } from '../store/items/types'

export const getItemName = (item: Item) => {
  if (!item) {
    return ''
  }
  return item.name || `Item #${item._id}`
}

export const getItemLetter = (item: Item | string) => {
  return typeof item === 'string'
    ? item.slice(0, 1)
    : item.name.slice(0, 1)
}
