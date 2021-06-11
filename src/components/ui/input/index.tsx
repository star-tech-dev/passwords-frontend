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

  const [inputProps, setInputProps] = useState<InputOptions>({
    value: ''
  })
  const [localError, setLocalError] = useState(props.error)
  const innerRef = useRef(null)
  const iconError = React.useRef<HTMLInputElement>(null)
  const classList = `input -component -theme-${props.theme || 'default'} ${props.error ? '-error' : ''}`

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

  const update = () => {
    const obj = { ...props }
    delete obj.beforeInput
    setInputProps(obj)
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
    update()
  }, [])

  useEffect(() => {
    ref.current = { focus, select }
  }, [ref])

  useEffect(() => {
    // inputProps = { ...props }
    update()
    // inputProps = inputProps
  }, [props])

  useEffect(() => {
    setLocalError(props.error)
  }, [props.error])

  return (
    <div className={classList}>
      <div className="buttons">
        {localError
          ? <div ref={iconError} className="icon-error" onClick={e => onTooltipClick(e)}>
          <IconInfo />
        </div>
          : null}
      </div>
      <input
        {...inputProps}
        ref={innerRef}
        type={props.type || 'text'}
        onInput={(e) => onInput(e)} />
    </div>
  )
})

Input.displayName = 'Input'

export default Input
