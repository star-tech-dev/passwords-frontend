import React from 'react'
import { openModal } from '../../../store/modals/events'
import { lock as lockApp } from '../../../store/locker/events'

import UserBar from '../../user-bar'
import NavItem from './nav-item'
import IconShield from '../../icons/shield'
import IconStar from '../../icons/star'
import IconKey from '../../icons/key'

import './_index.scss'

function MainAside () {
  return (
    <aside className="component -main-aside">
      <div className="scroll-parent">
        <section>
          <nav>
            <NavItem className="-all" routeName="home">
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

        <section>
          <button onClick={() => lockApp()}>lock app</button>
        </section>
      </div>

      <UserBar />
    </aside>
  )
}

export default MainAside
