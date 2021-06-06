import React from 'react'
import { useRouter } from 'react-router5'
import { Item as ItemInterface } from '../../store/items/types'

import './_index.scss'

interface ItemProps {
  data: ItemInterface
}

function Index ({ data }: ItemProps) {
  const subtitle = data.username || data.url || data.note || ''
  const title = data.name || subtitle
  const mode = 'compact'
  // const [mode, setMode] = useState('compact')
  const router = useRouter()

  // console.log('setMode', setMode)

  const onClick = () => {
    router.navigate('item', { id: data._id })
  }

  return (
    <div className={`component -item -mode-${mode}`} onClick={onClick}>
      <div className="flex a-start">
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

export default Index
