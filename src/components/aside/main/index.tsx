import React, { useEffect } from 'react'
import { useRouter } from 'react-router5'
import { useStore } from 'effector-react'
import { Unsubscribe as UnsubscribeRouter } from 'router5/dist/types/base'
import { State as RouterState } from 'router5'
import { openModal } from '../../../store/modals/events'
import { setItemsMode } from '../../../store/app/events'
import { $app } from '../../../store/app/store'
import { lock as lockApp } from '../../../store/locker/events'

import UserBar from '../../user-bar'
import NavItem from './nav-item'
import IconShield from '../../icons/shield'
import IconStar from '../../icons/star'
import IconKey from '../../icons/key'

import './_index.scss'
import { ItemsMode } from '../../../store/app/types'

function MainAside () {
  const router = useRouter()
  const itemsMode = useStore($app).itemsMode

  const checkItemsMode = (route: RouterState) => {
    const _itemsMode = $app.getState().itemsMode

    if ((!['home', 'favourites'].includes(route.name) && route.name !== 'item') || route.name === 'home') {
      setItemsMode(ItemsMode.default)
      return
    }
    const mode = _itemsMode === ItemsMode.favourites || route.name === 'favourites'
      ? ItemsMode.favourites
      : ItemsMode.default
    setItemsMode(mode)
  }

  const allItemsClassList = () => {
    const routeName = router.getState().name
    if (['home', 'item'].includes(routeName)) {
      return `-all ${itemsMode === ItemsMode.default && 'active'}`
    }
    return '-all'
  }

  const favouriteItemsClassList = () => {
    return `-favourites ${itemsMode === ItemsMode.favourites && 'active'}`
  }

  useEffect(() => {
    checkItemsMode(router.getState())

    const unsubscribe = router.subscribe(({ route }) => {
      checkItemsMode(route)
    }) as UnsubscribeRouter
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <aside className="component -main-aside">
      <div className="scroll-parent">
        <section>
          <nav>
            <NavItem className={allItemsClassList()} routeName="home">
              <IconShield />
              <span>All items</span>
            </NavItem>

            <NavItem className={favouriteItemsClassList()} routeName="favourites">
              <IconStar />
              <span>Favourites</span>
            </NavItem>
          </nav>
        </section>

        <section>
          <div className="title">Features</div>
          <NavItem className="-generator" onClick={() => openModal('password_generator')}>
            <IconKey />
            <span>Password generator</span>
          </NavItem>
        </section>

        {/* <section> */}
        {/*  <div className="title">Types</div> */}
        {/* </section> */}

        {/* <section> */}
        {/*  <div className="title">Folders</div> */}
        {/* </section> */}

        <section>
          <button onClick={() => lockApp()}>lock app</button>
        </section>
      </div>

      <UserBar />
    </aside>
  )
}

export default MainAside
