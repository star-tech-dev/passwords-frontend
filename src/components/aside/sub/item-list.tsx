import React, { useState } from 'react'
import { useStore } from 'effector-react'
import { $items } from '../../../store/items/store'

import UIButton from '../../ui/button'
import SearchBar from '../../search-bar'
import Items, { ItemsMode } from '../../items'

// import IconAdd from '../../icons/add'

interface SubAsideItemListProps {
  mode?: ItemsMode
}

function SubAsideItemList ({ mode }: SubAsideItemListProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const items = useStore($items)
  const searchField = React.createRef()

  return (
    <div className="component -sub-aside-item-list flex column">
      {items.length
        ? <div className="aside-head flex a-center j-between">
        <SearchBar ref={searchField} onChange={(query: string) => setSearchQuery(query)}/>
        <UIButton routeName="add" size="small">+</UIButton>
      </div>
        : null}

      <div className="scroll-parent grow">
        <Items mode={mode} searchQuery={searchQuery} />
      </div>
    </div>
  )
}

export default SubAsideItemList
