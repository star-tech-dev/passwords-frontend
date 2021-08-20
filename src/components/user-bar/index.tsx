import React, { useEffect, useState } from 'react'
import { useStore } from 'effector-react'
import { useTranslation } from 'react-i18next'
import { Link, useRouter } from 'react-router5'
import { Unsubscribe as UnsubscribeRouter } from 'router5/dist/types/base'
import { State as RouterState } from 'router5'
import { $auth as authStore } from '../../store/auth/store'
import { User } from '../../store/auth/types'

import './_index.scss'

import IconUser from '../icons/user'

function UserBar () {
  const { t } = useTranslation()
  const [isActive, setIsActive] = useState(false)
  const user = useStore(authStore).user as User
  const router = useRouter()

  const checkRoute = (route: RouterState) => {
    setIsActive(route.name.includes('settings'))
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

  if (user) {
    return (
      <Link routeName="settings" className={`component -user-bar flex a-center ${isActive && 'active'}`}>
        <div className="photo flex center">
          <div className="icon-container -user">
            <IconUser />
          </div>
        </div>
        <div>
          <div className="name">{user.username}</div>
          <div>{t('aside.main.account.subtitle')}</div>
        </div>
      </Link>
    )
  } else {
    return null
  }
}

export default UserBar
