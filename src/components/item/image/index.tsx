import React from 'react'
import { getItemLetter } from '../../../helpers/item'

import './_index.scss'
import LoaderRound from '../../loader/round'

interface ItemImageProps extends React.ComponentProps<any> {
  data?: any,
  color?: string,
  itemName?: string,
  isLoading?: boolean,
  image?: string,
  onImageLoad?: Function,
  onImageError?: Function
}

function ItemImage (props: ItemImageProps) {
  const onImageLoad = (e: any) => {
    props.onImageLoad && props.onImageLoad(e)
  }

  const onImageError = (e: any) => {
    props.onImageError && props.onImageError(e)
  }

  return (
    <div className={`component -item-image flex center ${props.className || ''}`} style={{ backgroundColor: props.color }}>
      {props.image && <img
          id="item_image"
          crossOrigin="anonymous"
          src={props.image}
          alt=""
          className={props.isLoading ? '-not-ready' : '-ready'}
          onLoad={onImageLoad}
          onError={onImageError}/>}

      {!props.image && props.itemName && <div className="letter">
        {getItemLetter(props.itemName)}
      </div>}

      {props.isLoading && <div className="loader">
        <LoaderRound />
      </div>}
    </div>
  )
}

export default ItemImage
