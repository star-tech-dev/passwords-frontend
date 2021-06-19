import { createStore } from 'effector'
import { createItem, deleteItem, getItems, toggleItemFavouriteStatus } from './events'
import { State } from './types'

const initialState: State = []

export const $items = createStore(initialState)
  .on(getItems.done, (state, { result }) => {
    state = result
    return state
  })
  .on(createItem.done, (state, { result }) => {
    if (result) {
      state.push(result)
    }
    return state
  })
  .on(toggleItemFavouriteStatus.done, (state, { params, result }) => {
    return state.map(i => {
      if (i._id === params.id) {
        return { ...i, isFavourite: (result as any).isFavourite }
      }
      return i
    })
  })
  .on(deleteItem.done, (state, { params }) => {
    return state.filter(i => i._id !== params.id)
  })

export default $items
