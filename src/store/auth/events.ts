import { AuthDomain } from './domain'
import { sendRequest } from '../../api'
import { RegisterPayload, User, LoginPayload, LoginResponse, AuthCheckResponse, SecurityCode } from './types'

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
  }).catch(() => null)
})

export const checkAuth = AuthDomain.effect<void, AuthCheckResponse>().use(() => {
  return sendRequest({
    url: '/auth'
  }).catch(() => ({ user: null }))
})

export const checkUserSecurityCode = AuthDomain.event()

export const setUserSecurityCode = AuthDomain.effect<SecurityCode, void>().use((securityCode) => {
  return sendRequest({
    method: 'post',
    url: '/security-code',
    data: { securityCode }
  })
})
