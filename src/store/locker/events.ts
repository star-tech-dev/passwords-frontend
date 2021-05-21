import { LockerDomain } from './domain'
import { sendRequest } from '../../api'
import { SecurityCode } from './types'

export const lock = LockerDomain.createEffect<void, void>().use(() => {
  return sendRequest({
    method: 'post',
    url: '/lock'
  })
})

export const unlock = LockerDomain.createEffect<SecurityCode, void>().use((securityCode: SecurityCode) => {
  return sendRequest({
    method: 'post',
    url: '/unlock',
    data: { securityCode }
  })
})

export const checkIsAppLocked = LockerDomain.createEvent()

export const setIsAppLocked = LockerDomain.createEvent<boolean>()
