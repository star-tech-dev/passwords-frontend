import { createStore } from 'effector'
import { closeAllModals, closeLastModal, closeModal, openModal } from './events'
import { State } from './types'

const initialState: State = []

export const $modals = createStore<State>(initialState)
  .on(openModal, (state, id) => {
    const set = new Set([...state, ...[id]])
    state = Array.from(set) as State
    return state
  })
  .on(closeModal, (state, id) => {
    state = state.filter((i) => i !== id)
    return state
  })
  .on(closeLastModal, state => {
    state = state.slice(0, 1)
    return state
  })
  .on(closeAllModals, () => [])
