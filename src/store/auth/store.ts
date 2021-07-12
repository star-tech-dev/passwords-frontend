import { AuthState, User } from './types'
import { AuthDomain } from './domain'
import { checkIsAppLocked, setIsAppLocked } from '../locker/events'
import { closeModal, openModal } from '../modals/events'
import {
  register,
  login,
  logout,
  checkAuth,
  checkUserSecurityCode,
  onSuccessSetSecurityCode,
  onProfileUpdate
} from './events'

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
    state.user && !state.user.hasSecurityCode && openModal('set_security_code')
    return state
  })
  .on(onSuccessSetSecurityCode, (state) => {
    closeModal('set_security_code')
    return state
  })
  .on(onProfileUpdate, (state, data) => {
    const updatedUser = { ...state.user, ...data } as User
    return {
      ...state,
      user: updatedUser
    }
  })

export default { $auth }
