import React, { useEffect, useState } from 'react'
import { State as RouterState, Unsubscribe as UnsubscribeRouter } from 'router5/dist/types/base'
import { useRouter } from 'react-router5'
import { useStore } from 'effector-react'
import { $items } from '../../../store/items/store'
import { $app } from '../../../store/app/store'
import { ItemsMode } from '../../../store/app/types'

import SearchBar from '../../search-bar'
import Items from '../../items'
import IconAdd from '../../icons/add'
import UIButton from '../../ui/button'

// import IconAdd from '../../icons/add'

function SubAsideItemList () {
  const [mode, setMode] = useState<ItemsMode>(ItemsMode.default)
  const [searchQuery, setSearchQuery] = useState('')
  const items = useStore($items)
  const router = useRouter()
  const searchField = React.createRef()

  const checkRoute = (route: RouterState) => {
    const _mode = $app.getState().itemsMode
    setMode(_mode)
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
    <div className="component -sub-aside-item-list flex column">
      {items.length
        ? <div className="aside-head flex a-center j-between">
        <SearchBar ref={searchField} onChange={(query: string) => setSearchQuery(query)}/>
        <UIButton routeName="add" size="square">
          <IconAdd />
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
