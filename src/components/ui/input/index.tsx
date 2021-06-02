import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { nextTick } from '../../../helpers/next-tick'

import IconInfo from '../../icons/info'

import './_index.scss'

interface InputOptions extends React.InputHTMLAttributes<any> {
  error?: any
}

const Input = forwardRef((props: InputOptions, ref) => {
  if (!ref) {
    ref = useRef()
  }

  const [localError, setLocalError] = useState(props.error)
  const innerRef = useRef(null)
  const classList = `input -component ${props.error ? '-error' : ''}`

  const focus = () => {
    nextTick(() => {
      innerRef.current && (innerRef.current as HTMLInputElement | null)?.focus()
    })
  }

  const select = () => {
    nextTick(() => {
      innerRef.current && (innerRef.current as HTMLInputElement | null)?.select()
    })
  }

  useEffect(() => {
    // @ts-ignore
    ref.current = { focus, select }
    console.log('setting by props', props.error)
    setLocalError(props.error)
  }, [props])

  return (
    <div className={classList}>
      <div className="buttons">
        {localError
          ? <div className="icon-error">
          <IconInfo title={localError} />
        </div>
          : null}
      </div>
      <input {...props} ref={innerRef} type={props.type || 'text'} />
    </div>
  )
})

Input.displayName = 'Input'

export default Input
