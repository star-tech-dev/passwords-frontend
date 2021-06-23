import React, { useEffect, useState } from 'react'
import { getImageRGB, rgbToHex, getRandomColor } from '../../../helpers/image'

import IconStar from '../../icons/star'

import './_index.scss'
import ItemImage from '../../item/image'

interface ItemPageHeadProps extends React.ComponentProps<any> {
  itemUrl?: string,
  itemName?: string,
  imageSrc?: string,
  color?: string,
  isFavourite?: boolean,
  favouritesButtonId?: string,
  toggleFavourites?: Function,
  onImageChange?: Function,
  onColorChange?: Function
}

function ItemPageHead (props: ItemPageHeadProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [localSrc, setLocalSrc] = useState(props.imageSrc)
  const [localColor, setLocalColor] = useState(props.color)
  const [randomColor, setRandomColor] = useState('')

  const onImageLoad = (e: any) => {
    setIsLoading(false)
    const rgbColor = getImageRGB(e.target as HTMLImageElement) as number[]
    const hexColor = rgbToHex(rgbColor)
    setLocalColor(hexColor)

    props.onImageLoad && props.onImageLoad(e)
  }

  const onImageError = () => {
    setIsLoading(false)
    setLocalSrc('')
    props.onImageChange && props.onImageChange('')
  }

  const onToggleFavourites = () => {
    props.toggleFavourites && props.toggleFavourites()
  }

  useEffect(() => {
    setLocalSrc('')
    setLocalColor('')
    setLocalSrc(props.itemUrl
      ? `${process.env.REACT_APP_API_BASE_URL}/item-image?url=${encodeURIComponent(props.itemUrl)}`
      : '')
  }, [props.itemUrl])

  useEffect(() => {
    setLocalSrc(props.imageSrc)
  }, [props.imageSrc])

  useEffect(() => {
    if (localSrc) {
      props.itemUrl && !props.imageSrc && setIsLoading(true)
      props.onImageChange && props.onImageChange(localSrc)
    }
  }, [localSrc])

  useEffect(() => {
    props.onColorChange && props.onColorChange(localColor)
  }, [localColor])

  useEffect(() => {
    setLocalColor(props.color)
  }, [props.color])

  useEffect(() => {
    const _randomColor = getRandomColor()
    setRandomColor(_randomColor)
    props.onColorChange && props.onColorChange(_randomColor)
  }, [])

  return (
    <section className="component -item-page-head flex a-center">
      <div className="flex a-center grow">
        <div className="image" style={{ backgroundColor: localColor || randomColor }}>
          <ItemImage
            image={localSrc}
            color={localColor || randomColor}
            itemName={props.itemName}
            isLoading={isLoading}
            onImageLoad={onImageLoad}
            onImageError={onImageError} />
        </div>
        <div>{props.children}</div>
      </div>

      {props.favouritesButtonId && <div
        id={props.favouritesButtonId}
        className={`icon-container -star ${props.isFavourite ? '-active' : ''} flex center`}
        onClick={onToggleFavourites}>
        <IconStar/>
      </div>}
    </section>
  )
}

export default ItemPageHead
