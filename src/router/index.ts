import createRouter from 'router5'
import loggerPlugin from 'router5-plugin-logger'
import browserPlugin from 'router5-plugin-browser'

// middlewares and plugins
import session from './middlewares/session'
import accessor from './middlewares/accessor'
import locker from './middlewares/locker'

// routes
import routes from './routes'

export function configureRouter () {
  const router = createRouter(routes, {})

  router.usePlugin(loggerPlugin)
  router.usePlugin(browserPlugin())

  // middleware
  router.useMiddleware(session, accessor, locker)

  return router
}

export default { configureRouter }
