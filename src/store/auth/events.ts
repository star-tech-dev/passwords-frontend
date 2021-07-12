import { AuthDomain } from './domain'
import { sendRequest } from '../../api'
import {
  RegisterPayload,
  LoginPayload,
  LoginResponse,
  AuthCheckResponse,
  SecurityCode,
  User,
  UserProps,
  ChangePasswordPayload
} from './types'

export const register = AuthDomain.effect<RegisterPayload, User>().use((payload) => {
  return sendRequest({
    method: 'post',
    data: {
      username: payload.username,
      password: payload.password
    },
    url: '/register'
  })
})

export const login = AuthDomain.effect<LoginPayload, LoginResponse>().use((payload) => {
  return sendRequest({
    method: 'post',
    data: {
      username: payload.username,
      password: payload.password
    },
    url: '/login'
  })
})

export const logout = AuthDomain.effect<void, void>().use(() => {
  return sendRequest({
    url: '/logout'
  })
})

export const checkAuth = AuthDomain.effect<void, AuthCheckResponse>().use(() => {
  return sendRequest({
    url: '/auth'
  }).catch(() => ({ user: null }))
})

export const checkUserSecurityCode = AuthDomain.event()

export const onSuccessSetSecurityCode = AuthDomain.event()

export const setUserSecurityCode = AuthDomain.effect<SecurityCode, void>().use((securityCode) => {
  return sendRequest({
    method: 'post',
    url: '/security-code',
    data: { securityCode }
  }).then(res => {
    onSuccessSetSecurityCode()
    return res
  })
})

export const onProfileUpdate = AuthDomain.event<UserProps>()

export const updateProfile = AuthDomain.effect<UserProps, User>().use(payload => {
  return sendRequest({
    method: 'put',
    url: '/user',
    data: payload
  }).then(res => {
    console.log('res', res)
    onProfileUpdate(res)
    return res
  })
})

export const changePassword = AuthDomain.effect<ChangePasswordPayload, void>().use(payload => {
  return sendRequest({
    method: 'post',
    url: '/password',
    data: payload
  })
})
