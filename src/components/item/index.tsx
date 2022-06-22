import React, { useEffect, useState } from 'react'
import { useRouter } from 'react-router5'
import { State as RouterState } from 'router5'
import { Unsubscribe as UnsubscribeRouter } from 'router5/dist/types/base'

import { Item as ItemInterface } from '../../store/items/types'
import ItemImage from '../item/image'

import './_index.scss'

interface ItemProps {
  data: ItemInterface
}

function Index ({ data }: ItemProps) {
  const [localActive, setLocalActive] = useState(false)
  const subtitle = data.username || data.url || data.note || ''
  const router = useRouter()

  const onClick = () => {
    setLocalActive(true)
    router.navigate('item', { id: data._id })
  }

  const checkRoute = (route: RouterState) => {
    // Если мы на странице item с тем же id, то делаем компонент активным
    const isActive = (route.name === 'item' || route.name === 'item.edit') && route.params.id === data._id
    setLocalActive(isActive)
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
    <div className={`component -item ${localActive ? '-active' : ''}`} onClick={onClick}>
      <div className="head flex a-start">
        <ItemImage
          className="image"
          image={data.image}
          color={data.color}
          itemName={data.name} />

        <div className="content">
          <div className="title">{data.name}</div>
          {subtitle && <div className="subtitle">{subtitle}</div>}
        </div>
      </div>
    </div>
  )
}

export default Index
