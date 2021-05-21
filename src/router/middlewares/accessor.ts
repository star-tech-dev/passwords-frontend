import { $auth } from '../../store/auth/store'
import routes from '../routes'
import { State } from 'router5/dist/types/base'

function showOnlyForGuests (): boolean {
  const user = $auth.getState().user
  return !user
}

function showOnlyForAuthed (): boolean {
  const user = $auth.getState().user
  return !!user
}

const canActivate = (routeName: string): boolean => {
  const foundRoute = routes.find(i => i.name === routeName)
  const isRouterOnlyForGuests = foundRoute ? !!foundRoute.forGuests : false
  const isRouterOnlyForAuthed = foundRoute ? !!foundRoute.private : false

  if (isRouterOnlyForGuests) {
    return showOnlyForGuests()
  } else if (isRouterOnlyForAuthed) {
    return showOnlyForAuthed()
  } else {
    return true
  }
}

export const accessor = (router: any) => (toState: State, fromState: State, done: any) => {
  if (!canActivate(toState.name)) {
    return router.cancel()
  }
  done()
}

export default { accessor }
