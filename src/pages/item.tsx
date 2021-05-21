import React, { useEffect, useState } from 'react'
import { useRoute } from 'react-router5'
import { getItem } from '../store/items/events'
import { Item } from '../store/items/types'

function ItemPage () {
  // @ts-ignore // null as initial state
  const [data, setData] = useState<Item>(null)
  const { route, router } = useRoute()

  useEffect(() => {
    async function _getData () {
      getItem(route.params.id).then(res => {
        setData(res)
      }).catch(() => router.navigate('home'))
    }
    _getData()
    return () => {}
  }, [route.params.id])

  return (
    <div className="Page Profile">
      <div>ItemPage</div>
      { data
        ? <div>
          <div>
            <div>name</div>
            <input type="text" value={data.name} readOnly />
          </div>
          <div>
            <div>url</div>
            <input type="text" value={data.url} readOnly />
          </div>
          <div>
            <div>username</div>
            <input type="text" value={data.username} readOnly />
          </div>
          <div>
            <div>password</div>
            <input type="text" value={data.password} readOnly />
          </div>
          <div>
            <div>note</div>
            <textarea value={data.note} readOnly />
          </div>
        </div>
        : null }
    </div>
  )
}

export default ItemPage
