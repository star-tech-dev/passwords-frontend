import React from 'react'
import { useRouter } from 'react-router5'
import PropTypes from 'prop-types'

function Item ({ data }) {
  const title = `${data.name} (${data._id})` || data.url || `Item ${data._id}`
  const router = useRouter()

  const onClick = () => {
    // console.log('click')
    router.navigate('item', { id: data._id })
  }

  return (
    <div className="Item Component" onClick={onClick}>
      <div>{title}</div>
    </div>
  )
}

Item.propTypes = {
  data: PropTypes.object
}

export default Item
