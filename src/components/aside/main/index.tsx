import React, { useEffect, useState } from 'react'
import { useRouter } from 'react-router5'
import { Unsubscribe as UnsubscribeRouter } from 'router5/dist/types/base'
import { State as RouterState } from 'router5'
import { openModal } from '../../../store/modals/events'

import UserBar from '../../user-bar'
import NavItem from './nav-item'
import IconShield from '../../icons/shield'
import IconStar from '../../icons/star'
import IconKey from '../../icons/key'

import './_index.scss'

function MainAside () {
  const [isMainLinkActive, setIsMainLinkActive] = useState(false)
  const router = useRouter()

  const checkRoute = (route: RouterState) => {
    console.log('route.name', route)
    setIsMainLinkActive(route.name === 'item')
  }

  useEffect(() => {
    checkRoute(router.getState())
    const unsubscribe = router.subscribe(({ route }) => {
      checkRoute(route)
    }) as UnsubscribeRouter
    return () => {
      unsubscribe()
    }
  })

  return (
    <aside className="component -main-aside">
      <div className="scroll-parent">
        <section>
          <nav>
            <NavItem className={`-all ${isMainLinkActive && 'active'}`} routeName="home">
              <IconShield />
              <span>All items</span>
            </NavItem>

            <NavItem className="-favourites" routeName="favourites">
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
      </div>

      <UserBar />
    </aside>
  )
}

export default MainAside
