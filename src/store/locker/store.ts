import { createStore } from 'effector'
import { closeModal, openModal } from '../modals/events'
import { checkIsAppLocked, lock, setIsAppLocked, unlock } from './events'
import { State } from './types'

const initialState: State = {
  isLocked: false
}

export const $locker = createStore(initialState)
  .on(lock.done, state => {
    state = {
      ...state,
      isLocked: true
    }
    return state
  })
  .on(unlock.done, state => {
    state = {
      ...state,
      isLocked: false
    }
    return state
  })
  .on(checkIsAppLocked, state => {
    state.isLocked
      ? openModal('locker')
      : closeModal('locker')
    return state
  })
  .on(setIsAppLocked, (state, value) => {
    state.isLocked = value
    checkIsAppLocked()
    return state
  })
