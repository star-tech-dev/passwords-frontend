import React from 'react'
import { useTranslation } from 'react-i18next'
import { openModal } from '../../../store/modals/events'
import { lock as lockApp } from '../../../store/locker/events'

import GroupSection from '../group-section'
import UserBar from '../../user-bar'
import Index from '../nav-item'
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
        <div className="spacer -large" />

        <div className="sections">
          <section>
            <nav>
              <Index className="-all" routeName="home">
                <div className="icon-container -shield">
                  <IconShield />
                </div>
                <span>{t('aside.main.nav.all_items')}</span>
              </Index>

              <Index className="-favourites" routeName="favourites">
                <div className="icon-container -star">
                  <IconStar />
                </div>
                <span>{t('aside.main.nav.favourites')}</span>
              </Index>
            </nav>
          </section>

          <section>
            <header>
              <div className="title">{t('aside.main.features.title')}</div>
            </header>
            <Index className="-generator" onClick={() => openModal('password_generator')}>
              <div className="icon-container -key">
                <IconKey />
              </div>
              <span>{t('aside.main.features.password_generator')}</span>
            </Index>

            <Index className="-locker" onClick={lockApp}>
              <div className="icon-container -lock">
                <IconLock />
              </div>
              <span>{t('aside.main.features.app_locker')}</span>
            </Index>
          </section>

          <GroupSection />
        </div>

        <div className="spacer" />
      </div>

      <UserBar />
    </aside>
  )
}

export default MainAside
