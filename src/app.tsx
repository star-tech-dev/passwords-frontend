import React, { useEffect } from 'react'
import { useRoute } from 'react-router5'
import { useStore } from 'effector-react'
import { setMounted } from './store/app/events'
import { checkUserSecurityCode, ping } from './store/auth/events'
import { $locker } from './store/locker/store'
import { checkIsAppLocked } from './store/locker/events'
import { useTranslation } from 'react-i18next'

// layouts
import DefaultLayout from './layouts/default'
import SimpleLayout from './layouts/simple'
import CleanLayout from './layouts/clean'

// App pages
import LandingPage from './pages/landing'
import HomePage from './pages/home'
import AuthPage from './pages/auth'
import UnlockPage from './pages/unlock'
import AddItemPage from './pages/item/add'
import GroupPage from './pages/group'
import GroupEditPage from './pages/group/edit'
import ItemPage from './pages/item'
import ItemEditPage from './pages/item/edit'
import SettingsPage from './pages/settings'
import SettingsProfilePage from './pages/settings/profile'
import SettingsGeneralPage from './pages/settings/general'
import SettingsSecurityPage from './pages/settings/security'
import SettingsAboutPage from './pages/settings/about'
import NotFound from './pages/not-found'

// Layout components
import Loader from './components/loader/page-loader'
import ModalController from './components/modals/controller'

const CLEAN_LAYOUT_PAGES = ['landing']
const SIMPLE_LAYOUT_PAGES = ['auth', 'unlock', '@@router5/UNKNOWN_ROUTE']

function App () {
  const { i18n } = useTranslation()
  const { route } = useRoute()
  const locker = useStore($locker)

  const setLocaleIntoHTML = () => {
    const html = document.querySelector('html')
    html && html.setAttribute('lang', i18n.language)
  }

  useEffect(() => {
    setLocaleIntoHTML()
    const unwatchMounted = setMounted.watch(mounted => {
      /**
       * app mounted after loader
       */
      if (mounted) {
        checkUserSecurityCode()

        // pinging server every time when browser tab focused
        // checking decryption key cookie
        window.onfocus = () => {
          ping()
        }
      }
    })
    return () => {
      unwatchMounted()
    }
  }, [])

  useEffect(() => {
    setLocaleIntoHTML()
  }, [i18n.language])

  useEffect(() => {
    checkIsAppLocked()
  }, [locker])

  function PageSwitcher () {
    switch (route.name) {
      case 'landing':
        return <LandingPage />
      case 'auth':
        return <AuthPage />
      case 'home':
        return <HomePage />
      case 'favourites':
        return <HomePage />
      case 'group':
        return <GroupPage />
      case 'group.edit':
        return <GroupEditPage />
      case 'item':
        return <ItemPage />
      case 'item.edit':
        return <ItemEditPage />
      case 'add':
        return <AddItemPage />
      case 'unlock':
        return <UnlockPage />
      case 'settings':
        return <SettingsPage />
      case 'settings.profile':
        return <SettingsProfilePage />
      case 'settings.general':
        return <SettingsGeneralPage />
      case 'settings.security':
        return <SettingsSecurityPage />
      case 'settings.about':
        return <SettingsAboutPage />
      default:
        return <NotFound />
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
            : CLEAN_LAYOUT_PAGES.includes(route.name)
              ? <CleanLayout>
                <PageSwitcher/>
              </CleanLayout>
              : <DefaultLayout>
                <PageSwitcher/>
              </DefaultLayout> }
        </div>
        : <Loader /> }
    </div>
  )
}

export default App
