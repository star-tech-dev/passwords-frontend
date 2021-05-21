import transitionPath from 'router5-transition-path'
import { $auth } from '../../store/auth/store'
import { checkAuth } from '../../store/auth/events'

async function _checkAuth (data) {
  const user = $auth.getState().user
  // console.log('** _checkAuth', user)
  if (!user) {
    await checkAuth()
    // console.log('** got user', user)
  }
  return data
}

export const sessionMiddleware = routes => router => (toState, fromState) => {
  const { toActivate } = transitionPath(toState, fromState)
  const onActivateHandlers =
    toActivate
      .map(segment => routes.find(r => r.name === segment).onActivate)
      .filter(Boolean)

  return Promise
    .all(onActivateHandlers.map(callback => callback()))
    .then(data => {
      // actions before app mounting
      return _checkAuth(data)
    })
    .then(data => {
      const routeData = data.reduce((accData, rData) => Object.assign(accData, rData), {})
      return { ...toState, data: routeData }
    })
}

export default { sessionMiddleware }
