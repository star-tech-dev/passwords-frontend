import { AppState } from './types'
import { AppDomain } from './domain'
import { setMounted } from './events'

const initialState: AppState = {
  mounted: false
}

export const $app = AppDomain.store<AppState>(initialState)
  .on(setMounted, (state, value) => {
    state.mounted = value
    return state
  })
