import React, { forwardRef, useEffect, useRef, useState } from 'react'
import tippy from 'tippy.js'
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
  const iconError = React.useRef<HTMLInputElement>(null)
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

  const update = () => {
    // @ts-ignore
    ref.current = { focus, select }
    setLocalError(props.error)
  }

  const onTooltipClick = (e: React.FormEvent) => {
    e.preventDefault()
    focus()
  }

  useEffect(() => {
    if (localError) {
      if (iconError.current) {
        tippy(iconError.current, {
          placement: 'top-end',
          content: localError
        })
      }
    }
  }, [localError])

  useEffect(() => {
    update()
  }, [props])

  return (
    <div className={classList}>
      <div className="buttons">
        {localError
          ? <div ref={iconError} className="icon-error" onClick={e => onTooltipClick(e)}>
          <IconInfo />
        </div>
          : null}
      </div>
      <input {...props} ref={innerRef} type={props.type || 'text'} />
    </div>
  )
})

Input.displayName = 'Input'

export default Input
