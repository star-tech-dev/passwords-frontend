import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useRouter } from 'react-router5'
import { useStore } from 'effector-react'
import { $groups } from '../../store/groups/store'

import IconFolder from '../icons/folder'

import './_index.scss'

function MobileBarComponent () {
  const { t } = useTranslation()

  const groupList = useStore($groups)
  const $router = useRouter()

  const [currentGroup, setCurrentGroup] = useState('')

  const groups = () => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return groupList.map(item => <option value={item._id} key={item._id}>{item.name}</option>)
  }

  const showMenu = (e: any) => {
    e.preventDefault()
    document.body.classList.add('-show-menu')
  }

  const checkRoute = () => {
    const route = $router.getState()
    if (route.name === 'group' && route.params.id) {
      setCurrentGroup(route.params.id)
      return
    }
    setCurrentGroup('')
  }

  const onGroupChange = (e: any) => {
    setCurrentGroup(e.target.value)
    if (e.target.value && e.target.value !== 'null') {
      $router.navigate('group', {
        id: e.target.value
      })
    } else {
      $router.navigate('home')
    }
  }

  $router.subscribe(() => {
    checkRoute()

    // closing menu if opened
    document.body.classList.remove('-show-menu')
  })

  useEffect(() => {
    checkRoute()
    return () => {}
  })

  return (
    <div className="component -mobile-bar flex column j-center">
      <div className="flex a-center j-between">
        <div className="nav flex a-center grow">
          <div>
            <Link routeName="home">{t('mobile_bar.home')}</Link>
          </div>

          <div className="flex a-center">
            <div className="icon-container -folder">
              <IconFolder/>
            </div>
            <select value={currentGroup} onChange={onGroupChange}>
              <option value="">All groups</option>
              {groups()}
            </select>
          </div>
        </div>

        <div>
          <a href="#" onClick={showMenu}>Menu</a>
        </div>
      </div>
    </div>
  )
}

export default MobileBarComponent
