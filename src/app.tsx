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
import ProfilePage from './pages/profile'
import AuthPage from './pages/auth'
import UnlockPage from './pages/unlock'
import AddItemPage from './pages/add-item'
import ItemPage from './pages/item'
import NotFound from './pages/not-found'

// Layout components
import Loader from './components/loader/page-loader'
import ModalController from './components/modals/controller'

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

  function Switch () {
    switch (route.name) {
      case 'home':
        return <DefaultLayout><HomePage /></DefaultLayout>
      case 'auth':
        return <SimpleLayout><AuthPage /></SimpleLayout>
      case 'unlock':
        return <SimpleLayout><UnlockPage /></SimpleLayout>
      case 'profile':
        return <DefaultLayout><ProfilePage /></DefaultLayout>
      case 'add':
        return <DefaultLayout><AddItemPage /></DefaultLayout>
      case 'item':
        return <DefaultLayout><ItemPage /></DefaultLayout>
      default:
        return <SimpleLayout><NotFound /></SimpleLayout>
    }
  }

  if (route) {
    return (
      <div className="app">
        <Switch />
        <ModalController />
      </div>
    )
  } else {
    return (
      <Loader />
    )
  }
}

export default App
