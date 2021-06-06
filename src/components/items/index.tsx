import React, { useEffect } from 'react'
import { useStore } from 'effector-react'
import { $items } from '../../store/items/store'
import { getItems } from '../../store/items/events'

import Item from '../item'

import './_index.scss'

function Items () {
  const items = useStore($items)

  const list = () => items.map(item => {
    return <Item data={item} key={item._id} />
  })

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
