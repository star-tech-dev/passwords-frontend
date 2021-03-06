import React, { useEffect, useState } from 'react'
import { State as RouterState } from 'router5'
import { useRouter } from 'react-router5'
import { Unsubscribe as UnsubscribeRouter } from 'router5/dist/types/base'
import { setItemsMode } from '../../../store/app/events'
import { ItemsMode } from '../../../store/app/types'

import ItemList from './item-list'
import ProfileMenu from './menu'

import './_index.scss'

function SubAsideWrapper () {
  const [mode, setMode] = useState('') // items, menu
  const router = useRouter()

  const checkRoute = (route: RouterState) => {
    const mode = route.name.includes('settings') ? 'menu' : 'items'
    setMode(mode)

    if (route.name === 'favourites') {
      setItemsMode(ItemsMode.favourites)
      return
    }
    if (route.name === 'home') {
      setItemsMode(ItemsMode.default)
      return
    }
    if (route.name.includes('group')) {
      setItemsMode(ItemsMode.group)
      return
    }
    if (route.name === 'add') {
      setItemsMode(ItemsMode.default)
    }
  }

  useEffect(() => {
    checkRoute(router.getState())

    const unsubscribe = router.subscribe(({ route }) => {
      checkRoute(route)
    }) as UnsubscribeRouter

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <aside className="component -sub-aside">
      {mode === 'items' ? <ItemList /> : <ProfileMenu />}
    </aside>
  )
}

export default SubAsideWrapper
