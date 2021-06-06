import { PluginFactory } from 'router5/dist/types/router'
// import { State } from 'router5/dist/types/base'

export const transitionLogger: PluginFactory = (router, dependencies) => {
  return {
    onTransitionStart: () => {
      // console.log('*** onTransitionStart')
    },
    onTransitionCancel: () => {
      // console.log('*** onTransitionCancel')
    },
    onTransitionError: (toState, fromState, err) => {
      // console.log('*** onTransitionError', toState, fromState, err)
    },
    onTransitionSuccess: (toState, fromState, opts) => {
      // console.log('*** onTransitionSuccess', toState, fromState, opts)
    }
  }
}

export default { transitionLogger }
