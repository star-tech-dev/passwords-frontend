import React from 'react'
import { useRouter } from 'react-router5'
import { Item as ItemInterface } from '../../store/items/types'

import ItemField from '../ui/item-field'

import './_index.scss'

interface ItemProps {
  data: ItemInterface,
  mode?: string
}

function Index ({ data, mode }: ItemProps) {
  const subtitle = data.username || data.url || data.note || ''
  const title = data.name || subtitle
  const router = useRouter()

  const onClick = () => {
    router.navigate('item', { id: data._id })
  }

  return (
    <div className={`component -item -mode-${mode}`}>
      <div className="head flex a-start" onClick={onClick}>
        <div className="image">
          <img src="" alt=""/>
        </div>
        <div className="content">
          <div className="title">{title}</div>
          <div className="subtitle">
            {data.url && mode === 'large'
              ? <a href={data.url} target="_blank" rel="noreferrer">{data.url}</a>
              : <div>{subtitle}</div>}
          </div>
        </div>
      </div>

      { mode === 'large' && <div className="fields">
        {data.username && <ItemField name="username" value={data.username} readOnly={true}/>}
        {data.password && <ItemField name="password" type="password" value={data.password} readOnly={true}/>}
        {data.note && <ItemField name="note" value={data.note} readOnly={true}/>}
      </div>}
    </div>
  )
}

export default Index
