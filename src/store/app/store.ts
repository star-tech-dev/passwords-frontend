import { AppState, GeneratorMode, ItemsMode } from './types'
import { AppDomain } from './domain'
import { setItemsMode, setItemToDelete, setMounted, onOpenGenerator, onCloseGenerator } from './events'

const initialState: AppState = {
  mounted: false,
  itemsMode: ItemsMode.default,
  itemToDelete: null,
  generatorMode: GeneratorMode.default
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
  .on(onOpenGenerator, (state, value) => {
    return {
      ...state,
      generatorMode: value
    }
  })
  .on(onCloseGenerator, (state, value) => {
    return {
      ...state,
      generatorMode: GeneratorMode.default
    }
  })

export default { $app }
