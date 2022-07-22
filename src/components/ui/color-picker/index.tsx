import React, { forwardRef } from 'react'
import { getColors } from '../../../helpers/colors'

import Color from '../color'

import './_index.scss'
import { GroupColor } from '../../../store/groups/types'

interface ColorPickerProps extends React.InputHTMLAttributes<any> {
  value?: any,
  length?: number,
  onChange?: any
}

const ColorPicker = forwardRef((props: ColorPickerProps, ref: any) => {
  const colors = [null, ...getColors()]

  const onClick = (color: GroupColor) => {
    props.onChange && props.onChange(color)
  }

  const items = () => colors.map((item, i) =>
    <Color
      color={colors[i] as GroupColor | null}
      active={props.value === colors[i]}
      onClick={(e: GroupColor) => onClick(e)}
      random={false}
      key={i}
    ></Color>)

  return (
    <div className="component -color-picker">
      <div className="label">{props.children}</div>
      <div className="list flex a-center">
        {items()}
      </div>
    </div>
  )
})

ColorPicker.displayName = 'ColorPicker'

export default ColorPicker
