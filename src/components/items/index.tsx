import React, { useEffect } from 'react'
// @ts-ignore
import Masonry from 'masonry-layout'
import { useStore } from 'effector-react'
import { $items } from '../../store/items/store'
import { $app } from '../../store/app/store'
import { toggleMasonryItem, itemsFiltered } from '../../store/app/events'
import { getItems } from '../../store/items/events'

import Item from '../item'

import './_index.scss'
import { nextTick } from '../../helpers/next-tick'

interface ItemsProps {
  searchQuery?: string
}

function Items (props: ItemsProps) {
  const items = useStore($items)
  let msnry = null as any

  const list = () => {
    let arr = items
    if (props.searchQuery) {
      arr = items.filter(item => {
        const str = `${item.name} ${item.url} ${item.username} ${item.note}`
        return str.includes(props.searchQuery as string)
      })
    }
    return arr.map(item => {
      return <Item data={item} mode={arr.length < 3 ? 'full' : 'compact'} key={item._id} />
    })
  }

  const createMasonry = () => {
    const gridElement = document.querySelector('.-item-list .grid')
    if (!gridElement) {
      return
    }
    msnry = new Masonry(gridElement, {
      itemSelector: '.-item',
      columnWidth: 330,
      gutter: 20
    })
    msnry.appended(gridElement)
    nextTick(() => {
      msnry.reloadItems()
      msnry.layout()
    })
  }

  const updateMasonry = () => {
    nextTick(() => {
      msnry && msnry.reloadItems()
      msnry && msnry.layout()
    })
  }

  const reinitMasonry = () => {
    msnry && msnry.destroy()
    createMasonry()
  }

  const onMounted = async () => {
    await getItems()
    createMasonry()
  }

  const onToggleMasonryItem = (state: any) => {
    updateMasonry()
    return state
  }

  useEffect(() => {
    onMounted()

    $app.on(itemsFiltered, reinitMasonry)
    $app.on(toggleMasonryItem, onToggleMasonryItem)
    return () => {
      $app.off(itemsFiltered)
      $app.off(toggleMasonryItem)
    }
  }, [])

  useEffect(() => {
    updateMasonry()
  }, [list, props])

  return (
    <div className="component -item-list">
      <div className="grid">
        {list()}
      </div>
    </div>
  )
}

export default Items
