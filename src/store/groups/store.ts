import { createStore } from 'effector'
import { getGroups, createGroup } from './events'
import { State } from './types'

const initialState: State = []

export const $groups = createStore(initialState)
  .on(getGroups.done, (state, { result }) => {
    state = result
    return state
  })
  .on(createGroup.done, (state, { result }) => {
    if (result) {
      state.push(result)
    }
    return state
  })

export default $groups
