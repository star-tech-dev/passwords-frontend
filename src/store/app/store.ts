import * as moment from 'moment'
import 'moment/locale/ru'
import { AppState, GeneratorMode, ItemsMode } from './types'
import { AppDomain } from './domain'
import { setItemsMode, setItemToDelete, setMounted, onOpenGenerator, onCloseGenerator, onLanguageChanged } from './events'

const initialState: AppState = {
  mounted: false,
  itemsMode: ItemsMode.default,
  itemToDelete: null,
  generatorMode: GeneratorMode.default,

  moment: moment
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
  .on(onLanguageChanged, (state, lang) => {
    state.moment.locale(lang)
    return state
  })

export default { $app }
