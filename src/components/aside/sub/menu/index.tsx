import React from 'react'
import { useStore } from 'effector-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router5'
import { $auth as authStore } from '../../../../store/auth/store'

import IconUser from '../../../icons/user'
import IconSettings from '../../../icons/settings'
import IconAbout from '../../../icons/about'

import './_index.scss'

function SubAsideProfileMenu () {
  const { t } = useTranslation()
  const user = useStore(authStore).user

  const username = () => {
    return user?.username
  }

  return (
    <nav className="component -sub-aside-profile-menu flex column">
      <section className="profile">
        <Link className="item -profile" routeName="settings.profile">
          <span className="icon-container -user">
            <IconUser />
          </span>
          <span className="flex column">
            <span>{username()}</span>
            <span className="subtext">{t('settings.nav.profile')}</span>
          </span>
        </Link>
      </section>

      <section className="items">
        <Link className="item" routeName="settings.general">
        <span className="icon-container -settings">
          <IconSettings />
        </span>
          <span>{t('settings.nav.general')}</span>
        </Link>

        <Link className="item" routeName="settings.about">
          <span className="icon-container -about">
            <IconAbout />
          </span>
          <span>{t('settings.nav.about')}</span>
        </Link>
      </section>
    </nav>
  )
}

export default SubAsideProfileMenu
