import React, { forwardRef, useRef } from 'react'
import { nextTick } from '../../../helpers/nextTick'

import './_index.scss'

interface InputOptions extends React.InputHTMLAttributes<any> {}

const Input = forwardRef((props: InputOptions, ref) => {
  if (!ref) {
    ref = useRef()
  }

  const innerRef = useRef(null)
  function focus () {
    nextTick(() => {
      innerRef.current && (innerRef.current as HTMLInputElement | null)?.focus()
    })
  }

  // @ts-ignore
  ref.current = { focus }

  return (
    <div className="input -component">
      <input {...props} ref={innerRef} type={props.type || 'text'} />
    </div>
  )
})

Input.displayName = 'Input'

export default Input
