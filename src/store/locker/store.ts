import { createStore } from 'effector'
import { checkIsAppLocked, lock, setIsAppLocked, unlock } from './events'
import { $auth } from '../auth/store'
import { router } from '../../index'
import { State } from './types'

const initialState: State = {
  isLocked: false,
  lastPath: null
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
    const routerState = router.getState()
    const isAuthed = !!$auth.getState().user

    if (isAuthed && routerState) {
      if (state.isLocked && routerState.name !== 'unlock') {
        router.navigate('unlock')
      }
      if (!state.isLocked && routerState.name === 'unlock') {
        router.navigate('home')
        // TODO: last url
      }
    }
    return state
  })
  .on(setIsAppLocked, (state, value) => {
    checkIsAppLocked()
    return {
      ...state,
      isLocked: value
    }
  })

export default $locker
