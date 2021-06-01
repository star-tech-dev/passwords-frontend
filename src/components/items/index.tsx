import React, { useEffect } from 'react'
import { useStore } from 'effector-react'
import { useRoute } from 'react-router5'
import { $items } from '../../store/items/store'
import { getItems } from '../../store/items/events'
import Item from './item'

function Items () {
  const items = useStore($items)
  const { router } = useRoute()

  const list = () => items.map(item => {
    return <Item data={item} key={item._id} />
  })

  function goToAdd () {
    router.navigate('add')
  }

  const onMounted = async () => {
    await getItems()
  }

  useEffect(() => {
    onMounted()
  }, [])

  return (
    <div className="Items Component">
      <div>
        {list()}
      </div>
      <div>
        <button onClick={goToAdd}>add</button>
      </div>
    </div>
  )
}

export default Items