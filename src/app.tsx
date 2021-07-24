import React, { useEffect } from 'react'
import { useRoute } from 'react-router5'
import { useStore } from 'effector-react'
import { setMounted } from './store/app/events'
import { checkUserSecurityCode } from './store/auth/events'
import { $locker } from './store/locker/store'
import { checkIsAppLocked } from './store/locker/events'

// layouts
import DefaultLayout from './layouts/default'
import SimpleLayout from './layouts/simple'

// App pages
import HomePage from './pages/home'
import AuthPage from './pages/auth'
import UnlockPage from './pages/unlock'
import AddItemPage from './pages/item/add'
import ItemPage from './pages/item'
import ItemEditPage from './pages/item/edit'
import SettingsPage from './pages/settings'
import SettingsProfilePage from './pages/settings/profile'
import SettingsGeneralPage from './pages/settings/general'
import SettingsAboutPage from './pages/settings/about'
import Index from './pages/not-found'

// Layout components
import Loader from './components/loader/page-loader'
import ModalController from './components/modals/controller'

const SIMPLE_LAYOUT_PAGES = ['auth', 'unlock', '@@router5/UNKNOWN_ROUTE']

function App () {
  const { route } = useRoute()
  const locker = useStore($locker)

  useEffect(() => {
    const unwatchMounted = setMounted.watch(mounted => {
      if (mounted) {
        /**
         * app mounted after loader
         */
        checkUserSecurityCode()
      }
    })
    return () => {
      unwatchMounted()
    }
  }, [])

  useEffect(() => {
    checkIsAppLocked()
  }, [locker])

  function PageSwitcher () {
    switch (route.name) {
      case 'home':
        return <HomePage />
      case 'favourites':
        return <HomePage />

      case 'item':
        return <ItemPage />
      case 'item.edit':
        return <ItemEditPage />
      case 'add':
        return <AddItemPage />

      case 'auth':
        return <AuthPage />
      case 'unlock':
        return <UnlockPage />

      case 'settings':
        return <SettingsPage />
      case 'settings.profile':
        return <SettingsProfilePage />
      case 'settings.general':
        return <SettingsGeneralPage />
      case 'settings.about':
        return <SettingsAboutPage />
      default:
        return <Index />
    }
  }

  /**
   * Комментарий по layouts:
   * Если выбор layout вынести в функцию LayoutSwitcher,
   * то при каждой смене роута layout будет монтироваться в dom
   * TODO: research that
   */
  return (
    <div>
      {route
        ? <div className="app">
          <ModalController/>

          {SIMPLE_LAYOUT_PAGES.includes(route.name)
            ? <SimpleLayout>
            <PageSwitcher/>
          </SimpleLayout>
            : <DefaultLayout>
            <PageSwitcher/>
          </DefaultLayout>}
        </div>
        : <Loader /> }
    </div>
  )
}

export default App
