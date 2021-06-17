import { AppState, ItemsMode } from './types'
import { AppDomain } from './domain'
import { setMounted, setItemsMode } from './events'

const initialState: AppState = {
  mounted: false,
  itemsMode: ItemsMode.default
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

export default { $app }
