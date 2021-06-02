import React, { forwardRef, useEffect, useRef } from 'react'

import LoaderRound from '../../loader/round'

import './_index.scss'

interface ButtonOptions extends React.ButtonHTMLAttributes<any> {
  fullWidth?: boolean,
  loading?: boolean
}

const Button = forwardRef((props: ButtonOptions, ref) => {
  if (!ref) {
    ref = useRef()
  }

  const classList = `button -component ${props.fullWidth ? '-full-width' : ''} ${props.loading ? '-loading' : ''}`
  const innerRef = useRef(null)
  let buttonProps = {} as ButtonOptions

  useEffect(() => {
    // @ts-ignore
    ref.current = {}

    buttonProps = { ...props }
    delete buttonProps.fullWidth
    delete buttonProps.loading
  }, [props])

  return (
    <div className={classList}>
      <button {...buttonProps} ref={innerRef}>
        { props.loading
          ? <div className="loader">
            <LoaderRound theme="dark" />
          </div>
          : props.children }
      </button>
    </div>
  )
})

Button.displayName = 'Button'

export default Button
