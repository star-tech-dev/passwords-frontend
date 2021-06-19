import { Item } from '../store/items/types'

export const getItemName = (item: Item) => {
  return item.name || `Item #${item._id}`
}
