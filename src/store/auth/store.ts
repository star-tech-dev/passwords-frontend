import { AuthState } from './types'
import { AuthDomain } from './domain'
import { checkIsAppLocked, setIsAppLocked } from '../locker/events'
import { closeModal, openModal } from '../modals/events'
import { register, login, logout, checkAuth, checkUserSecurityCode, setUserSecurityCode } from './events'

const initialState: AuthState = {
  user: null
}

export const $auth = AuthDomain.store<AuthState>(initialState)
  .on(register.done, (state, { result }) => {
    state = {
      ...state,
      user: result
    }
    return state
  })
  .on(login.done, (state, { result }) => {
    state = {
      ...state,
      user: result.user
    }
    checkIsAppLocked()
    return state
  })
  .on(logout.done, (state) => {
    state = {
      ...state,
      user: null
    }
    return state
  })
  .on(checkAuth.done, (state, { result }) => {
    state = {
      ...state,
      user: result.user
    }
    setIsAppLocked(result.isAppLocked)
    return state
  })
  .on(checkUserSecurityCode, (state) => {
    if (!state.user) {
      return state
    }
    if (!state.user.hasSecurityCode) {
      openModal('set_security_code')
    }
    return state
  })
  .on(setUserSecurityCode, (state) => {
    closeModal('set_security_code')
    return state
  })

export default { $auth }
