import React, { useEffect, useState } from 'react'
import tippy from 'tippy.js'
import { State as RouterState, Unsubscribe as UnsubscribeRouter } from 'router5/dist/types/base'
import { useTranslation } from 'react-i18next'
import { nextTick } from '../../../helpers/next-tick'
import { useRouter } from 'react-router5'
import { useStore } from 'effector-react'
import { $items } from '../../../store/items/store'
import { $app } from '../../../store/app/store'
import { ItemsMode } from '../../../store/app/types'

import SearchBar from '../../search-bar'
import Items from '../../items'
import IconAdd from '../../icons/add'
import UIButton from '../../ui/button'

function SubAsideItemList () {
  const { t } = useTranslation()
  const [mode, setMode] = useState<ItemsMode>(ItemsMode.default)
  const [searchQuery, setSearchQuery] = useState('')
  const items = useStore($items)
  const router = useRouter()
  const searchField = React.createRef()

  const isConditionToClearQuery = (route: RouterState) => {
    const routes = ['item', 'item.edit', 'group.edit']
    return !routes.includes(route.name)
  }

  const checkRoute = (route: RouterState) => {
    if (isConditionToClearQuery(route)) {
      // clear search
      setSearchQuery('')
    }

    // TODO: route has old value here
    const _mode = $app.getState().itemsMode
    setMode(_mode)
  }

  const initTooltip = () => {
    nextTick(() => {
      tippy('#main_button_add_item', {
        trigger: 'mouseenter focus',
        content: t('aside.sub.plus_button_tooltip'),
        placement: 'bottom',
        animation: 'perspective-subtle',
        theme: 'small'
      })
    }, 200)
  }

  useEffect(() => {
    checkRoute(router.getState())
    initTooltip()

    const unsubscribe = router.subscribe(({ route }) => {
      checkRoute(route)
    }) as UnsubscribeRouter

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <div className="component -sub-aside-item-list flex column">
      {items.length
        ? <div className="aside-head flex a-center j-between">
        <SearchBar ref={searchField} value={searchQuery} onChange={(query: string) => setSearchQuery(query)}/>
        <UIButton id="main_button_add_item" routeName="add" size="square">
          <div className="icon-container -add">
            <IconAdd />
          </div>
        </UIButton>
      </div>
        : null}

      <div className="scroll-parent grow">
        <Items mode={mode} searchQuery={searchQuery} />
      </div>
    </div>
  )
}

export default SubAsideItemList
