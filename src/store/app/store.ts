import { AppState, ItemsMode } from './types'
import { AppDomain } from './domain'
import { setMounted, setItemsMode, setItemToDelete } from './events'

const initialState: AppState = {
  mounted: false,
  itemsMode: ItemsMode.default,
  itemToDelete: null
}

export const $app = AppDomain.store<AppState>(initialState)
  .on(setMounted, (state, value) => {
    return {
      ...state,
      mounted: value
    }
  })
  .on(setItemsMode, (state, value) => {
    return {
      ...state,
      itemsMode: value
    }
  })
  .on(setItemToDelete, (state, value) => {
    return {
      ...state,
      itemToDelete: value
    }
  })

export default { $app }
