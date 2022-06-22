import type { State } from './types'
import { createStore } from 'effector'
import { getGroups, createGroup, deleteGroup, updateGroup } from './events'
import { onGroupDelete } from '../items/events'

const initialState: State = []

export const $groups = createStore(initialState)
  .on(getGroups.done, (state, { result }) => {
    state = result
    return state
  })
  .on(createGroup.done, (state, { result }) => {
    if (result) {
      state.unshift(result)
    }
    return state
  })
  .on(updateGroup.done, (state, { result }) => {
    return state.map(i => {
      if (i._id === result._id) {
        return { ...i, ...result }
      }
      return i
    })
  })
  .on(deleteGroup.done, (state, { params }) => {
    onGroupDelete(params.id as string)
    state = state.filter(i => i._id !== params.id)
    return state
  })

export default $groups
