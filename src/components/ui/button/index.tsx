import React, { forwardRef, useRef } from 'react'
import { nextTick } from '../../../helpers/nextTick'

import './_index.scss'

interface ButtonOptions extends React.ButtonHTMLAttributes<any> {}

const Button = forwardRef((props: ButtonOptions, ref) => {
  if (!ref) {
    ref = useRef()
  }

  const innerRef = useRef(null)

  // @ts-ignore
  ref.current = {}

  return (
    <div className="button -component">
      <button {...props} ref={innerRef}>{props.children}</button>
    </div>
  )
})

Button.displayName = 'Button'

export default Button
