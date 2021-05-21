import createRouter from 'router5'
import loggerPlugin from 'router5-plugin-logger'
import browserPlugin from 'router5-plugin-browser'

// routes
import routes from './routes'

// middlewares
import { sessionMiddleware } from './middlewares/session'
import { accessor } from './middlewares/accessor'

export function configureRouter () {
  const router = createRouter(routes, {
    defaultRoute: 'home'
  })

  router.usePlugin(loggerPlugin)
  router.usePlugin(browserPlugin())

  // middleware
  router.useMiddleware(sessionMiddleware(routes), accessor)

  return router
}

export default { configureRouter }
