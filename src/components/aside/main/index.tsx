import React from 'react'
import { useTranslation } from 'react-i18next'
import { openModal } from '../../../store/modals/events'
import { lock as lockApp } from '../../../store/locker/events'

import UserBar from '../../user-bar'
import NavItem from './nav-item'
import IconShield from '../../icons/shield'
import IconStar from '../../icons/star'
import IconKey from '../../icons/key'
import IconLock from '../../icons/lock'

import './_index.scss'

function MainAside () {
  const { t } = useTranslation()

  return (
    <aside className="component -main-aside">
      <div className="scroll-parent">
        <section>
          <nav>
            <NavItem className="-all" routeName="home">
              <div className="icon-container -shield">
                <IconShield />
              </div>
              <span>{t('aside.main.nav.all_items')}</span>
            </NavItem>

            <NavItem className="-favourites" routeName="favourites">
              <div className="icon-container -star">
                <IconStar />
              </div>
              <span>{t('aside.main.nav.favourites')}</span>
            </NavItem>
          </nav>
        </section>

        <section>
          <div className="title">{t('aside.main.features.title')}</div>
          <NavItem className="-generator" onClick={() => openModal('password_generator')}>
            <div className="icon-container -key">
              <IconKey />
            </div>
            <span>{t('aside.main.features.password_generator')}</span>
          </NavItem>

          <NavItem className="-locker" onClick={lockApp}>
            <div className="icon-container -lock">
              <IconLock />
            </div>
            <span>{t('aside.main.features.app_locker')}</span>
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
