import React, { useEffect } from 'react'
import { useStore } from 'effector-react'
import { $items } from '../../store/items/store'
import { getItems } from '../../store/items/events'

import Item from '../item'

import './_index.scss'

interface ItemsProps {
  searchQuery?: string
}

function Items (props: ItemsProps) {
  const items = useStore($items)

  const list = () => {
    let arr = items
    if (props.searchQuery) {
      arr = items.filter(item => {
        const str = `${item.name} ${item.url} ${item.username} ${item.note}`
        return str.includes(props.searchQuery as string)
      })
    }
    return arr.map(item => {
      return <Item data={item} mode={arr.length < 3 ? 'large' : 'compact'} key={item._id} />
    })
  }

  const onMounted = async () => {
    await getItems()
  }

  useEffect(() => {
    onMounted()
  }, [])

  return (
    <div className="component -item-list">
      <div className="grid">
        {list()}
      </div>
    </div>
  )
}

export default Items
