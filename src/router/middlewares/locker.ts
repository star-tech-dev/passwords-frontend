import { State } from 'router5/dist/types/base'
import { $locker } from '../../store/locker/store'

export const locker = (router: any) => (toState: State, fromState: State, done: any) => {
  const isLocked = $locker.getState().isLocked

  if (isLocked && toState.name !== 'unlock') {
    return router.navigate('unlock')
  }
  done()
}

export default locker
