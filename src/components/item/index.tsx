import React, { useEffect, useState } from 'react'
// import { useRouter } from 'react-router5'
import { toggleMasonryItem } from '../../store/app/events'

import { Item as ItemInterface } from '../../store/items/types'

import ItemField from '../ui/item-field'

import './_index.scss'

interface ItemProps {
  data: ItemInterface,
  mode?: 'compact' | 'full'
}

function Index ({ data, mode }: ItemProps) {
  const [localMode, setLocalMode] = useState('compact')
  const subtitle = data.username || data.url || data.note || ''
  const title = data.name || subtitle
  // const router = useRouter()

  // const compactIfFull = () => {
  //   if (localMode === 'full') {
  //     console.log('compact')
  //     setLocalMode('compact')
  //   }
  // }

  const onClick = () => {
    // router.navigate('item', { id: data._id })
    localMode === 'full'
      ? setLocalMode('compact')
      : setLocalMode('full')

    toggleMasonryItem()
  }

  useEffect(() => {
    setLocalMode(mode as string)
  }, [mode])

  if (localMode === 'full') {
    return (
      <div className={`component -item -mode-${localMode}`}>
        <div className="head flex a-start" onClick={onClick}>
          <div className="image">
            <img src="" alt=""/>
          </div>
          <div className="content">
            <div className="title">{title}</div>
            <div className="subtitle">
              {data.url
                ? <a href={data.url} target="_blank" rel="noreferrer">{data.url}</a>
                : <div>{subtitle}</div>}
            </div>
          </div>
        </div>

        <div className="fields">
          {data.username && <ItemField name="username" value={data.username} readOnly={true}/>}
          {data.password && <ItemField name="password" type="password" value={data.password} readOnly={true}/>}
          {data.note && <ItemField name="note" value={data.note} readOnly={true}/>}
        </div>
      </div>
    )
  } else {
    return (
      <div className={`component -item -mode-${localMode}`} onClick={onClick}>
        <div className="head flex a-start">
          <div className="image">
            <img src="" alt=""/>
          </div>
          <div className="content">
            <div className="title">{title}</div>
            <div className="subtitle">{subtitle}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Index
