import { LockerDomain } from './domain'
import { sendRequest } from '../../api'

export const lock = LockerDomain.createEffect().use(() => {
  return sendRequest({
    method: 'post',
    url: '/lock'
  })
})

export const unlock = LockerDomain.createEffect().use(securityCode => {
  return sendRequest({
    method: 'post',
    url: '/unlock',
    data: { securityCode }
  })
})

export const checkIsAppLocked = LockerDomain.createEvent()

export const setIsAppLocked = LockerDomain.createEvent<boolean>()
