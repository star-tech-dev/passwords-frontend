import React, { useEffect } from 'react'
import { useStore } from 'effector-react'
import { $items } from '../../store/items/store'
import { getItems } from '../../store/items/events'
import { ItemsMode } from '../../store/app/types'

import Item from '../item'
import UIButton from '../ui/button'

import './_index.scss'

interface ItemsProps {
  searchQuery?: string,
  mode?: ItemsMode
}

function Items (props: ItemsProps) {
  const items = useStore($items)

  const list = () => {
    let arr = items

    if (props.mode === ItemsMode.favourites) {
      arr = items.filter(item => item.isFavourite)
    }

    if (props.searchQuery) {
      arr = items.filter(item => {
        const str = `${item.name} ${item.url} ${item.username} ${item.note}`
        return str.includes(props.searchQuery as string)
      })
    }
    return arr.map(item => {
      return <Item data={item} key={item._id} />
    })
  }

  useEffect(() => {
    getItems()
  }, [])

  return (
    <div className={`component -item-list ${!items.length ? '-empty' : ''}`}>
      {items.length
        ? <div>
        {list()}
      </div>
        : <div className="flex column center">
        <div>You have no items yet</div>
        <div className="button-parent">
          <UIButton routeName="add" theme="ghost">Create one</UIButton>
        </div>
      </div>}
    </div>
  )
}

export default Items
