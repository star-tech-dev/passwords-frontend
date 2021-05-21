import { createStore } from 'effector'
import { createItem, getItems } from './events'
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
