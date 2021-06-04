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

  const onTooltipClick = (e: React.FormEvent) => {
    e.preventDefault()
    focus()
  }

  const onInput = (e: React.FormEvent) => {
    console.log('[ui input] onInput event')
    if (props.onInput) {
      props.onInput(e)
    }
    setLocalError('')
  }

  useEffect(() => {
    console.log('local error changed to', localError)
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
    // @ts-ignore
    ref.current = { focus, select }
    setLocalError(props.error)
  }, [])

  useEffect(() => {
    console.log('< incoming props. error:', props.error)
  }, [props])

  useEffect(() => {
    console.log('< incoming error:', props.error)
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
        {...props}
        ref={innerRef}
        type={props.type || 'text'}
        onInput={(e) => onInput(e)} />
    </div>
  )
})

Input.displayName = 'Input'

export default Input
