import transitionPath from 'router5-transition-path'
import { $auth } from '../../store/auth/store'
import { checkAuth } from '../../store/auth/events'
import { State } from 'router5/dist/types/base'
import { Router } from 'router5/dist/types/router'

async function _checkAuth (data: any) {
  const user = $auth.getState().user
  if (!user) {
    await checkAuth()
  }
  return data
}

export const sessionMiddleware = (routes: any) => (router: Router) => (toState: State, fromState: State) => {
  const { toActivate } = transitionPath(toState, fromState)
  const onActivateHandlers =
    toActivate
      .map(segment => routes.find((r: State) => r.name === segment).onActivate)
      .filter(Boolean)

  return Promise
    .all(onActivateHandlers.map(callback => callback()))
    .then(data => {
      // actions before app mounting
      return _checkAuth(data)
    })
    .then(data => {
      const routeData = data.reduce((accData: any, rData: any) => Object.assign(accData, rData), {})
      return { ...toState, data: routeData }
    })
}

export default { sessionMiddleware }
