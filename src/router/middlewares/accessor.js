import { $auth } from '../../store/auth/store'
import routes from '../routes'

function showOnlyForGuests () {
  const user = $auth.getState().user
  return !user
}

function showOnlyForAuthed () {
  const user = $auth.getState().user
  return !!user
}

const canActivate = routeName => {
  const foundRoute = routes.find(i => i.name === routeName)
  const isRouterOnlyForGuests = foundRoute ? !!foundRoute.forGuests : false
  const isRouterOnlyForAuthed = foundRoute ? !!foundRoute.private : false

  if (isRouterOnlyForGuests) {
    // console.log('!!! only for guests')
    return showOnlyForGuests()
  } else if (isRouterOnlyForAuthed) {
    // console.log('!!! only for authed')
    return showOnlyForAuthed()
  } else {
    // console.log('!!! public route')
    return true
  }
}

export const accessor = router => (toState, fromState, done) => {
  if (!canActivate(toState.name)) {
    return router.cancel('reason')
  }
  done()
}

export default { accessor }
