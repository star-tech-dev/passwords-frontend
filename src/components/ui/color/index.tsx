import React from 'react'
import type { GroupColor } from '../../../store/groups/types'
import { getColors } from '../../../helpers/colors'

import IconCheck from '../../icons/check'
import IconCross from '../../icons/cross'

import './_index.scss'

interface ColorProps {
  color?: GroupColor | null,
  active?: boolean,
  random?: boolean,
  onClick?: Function
}

function ColorComponent (props: ColorProps) {
  const allColors = getColors()
  const randomIndex = Math.floor(Math.random() * allColors.length)
  const color = props.color || (props.random ? allColors[randomIndex] : null)

  const onClick = () => {
    props.onClick && props.onClick(color)
  }

  return (
    <div className={`component -color flex center ${props.active ? '-active' : ''}`} onClick={onClick} data-color={color || 'null'}>
      {!props.color ? <IconCross/> : null}
      {props.active && props.color ? <IconCheck/> : null}
    </div>
  )
}

export default ColorComponent
