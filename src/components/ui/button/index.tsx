import React, { forwardRef, useEffect, useRef, useState } from 'react'

import LoaderRound from '../../loader/round'

import './_index.scss'

interface ButtonOptions extends React.ButtonHTMLAttributes<any> {
  fullWidth?: boolean,
  loading?: boolean,
  size?: 'default' | 'small',
  theme?: 'default' | 'ghost'
}

const Button = forwardRef((props: ButtonOptions, ref) => {
  if (!ref) {
    ref = useRef()
  }

  const [buttonProps, setButtonProps] = useState({})
  const classList = `button -component -theme-${props.theme || 'default'} -size-${props.size || 'default'} ${props.fullWidth ? '-full-width' : ''} ${props.loading ? '-loading' : ''}`
  const innerRef = useRef(null)

  const update = () => {
    // @ts-ignore
    ref.current = {}

    // eslint-disable-next-line no-new-object
    const fieldProps = { ...props } as ButtonOptions
    delete fieldProps.fullWidth
    delete fieldProps.loading
    delete fieldProps.size
    delete fieldProps.theme
    setButtonProps(fieldProps)
  }

  useEffect(() => {
    update()
  }, [props])

  return (
    <div className={classList}>
      <button {...buttonProps} ref={innerRef}>
        { props.loading
          ? <div className="loader">
            <LoaderRound />
          </div>
          : props.children }
      </button>
    </div>
  )
})

Button.displayName = 'Button'

export default Button
