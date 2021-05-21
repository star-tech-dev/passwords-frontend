import React from 'react'
import { useRouter } from 'react-router5'
import { Item as ItemInterface } from '../../store/items/types'

interface ItemProps {
  data: ItemInterface
}

function Item ({ data }: ItemProps) {
  const title = `${data.name} (${data._id})` || data.url || `Item ${data._id}`
  const router = useRouter()

  const onClick = () => {
    router.navigate('item', { id: data._id })
  }

  return (
    <div className="Item Component" onClick={onClick}>
      <div>{title}</div>
    </div>
  )
}

export default Item
