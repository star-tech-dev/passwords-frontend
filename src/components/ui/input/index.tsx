import React, { forwardRef, useEffect, useRef, useState } from 'react'
import tippy from 'tippy.js'
import { nextTick } from '../../../helpers/next-tick'

import IconInfo from '../../icons/info'

import './_index.scss'

interface InputOptions extends React.InputHTMLAttributes<any> {
  theme?: 'default' | 'clean',
  model?: any,
  error?: any,
  beforeInput?: Function
}

const Input = forwardRef((props: InputOptions, ref: any) => {
  if (!ref) {
    ref = useRef()
  }

  const [localError, setLocalError] = useState(props.error)
  const localId = props.id || Math.random().toFixed(10).slice(2)
  const innerRef = useRef(null) as React.RefObject<HTMLInputElement>
  const iconError = React.useRef<HTMLInputElement>(null)
  const classList = `input -component -theme-${props.theme || 'default'} ${props.error ? '-error' : ''}`

  const inputProps = () => {
    const obj = { ...props }
    delete obj.beforeInput
    delete obj.children
    return obj
  }

  const focus = () => {
    nextTick(() => {
      innerRef.current && innerRef.current?.focus()
    })
  }

  const select = () => {
    nextTick(() => {
      innerRef.current && innerRef.current?.select()
    })
  }

  const onTooltipClick = (e: React.FormEvent) => {
    e.preventDefault()
    focus()
  }

  const onInput = (e: React.FormEvent) => {
    if (props.beforeInput) {
      props.beforeInput(e)
    }

    if (props.onInput) {
      props.onInput(e)
    }
    setLocalError('')
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
    setLocalError(props.error)
    props.autoFocus && focus()
  }, [])

  useEffect(() => {
    ref.current = { focus, select }
  }, [ref])

  useEffect(() => {
    setLocalError(props.error)
  }, [props.error])

  return (
    <div className={classList}>
      {props.children && <label htmlFor={localId} className="label">{props.children}</label>}
      <div className="relative">
        <div className="buttons">
          {localError
            ? <div ref={iconError} className="icon-container -info" onClick={e => onTooltipClick(e)}>
              <IconInfo />
            </div>
            : null}
        </div>
        <input
          {...inputProps()}
          ref={innerRef}
          type={props.type || 'text'}
          id={props.id || localId}
          onInput={(e) => onInput(e)} />
      </div>
    </div>
  )
})

Input.displayName = 'Input'

export default Input
