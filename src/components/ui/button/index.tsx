import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router5'

import LoaderRound from '../../loader/round'

import './_index.scss'

interface ButtonOptions extends React.ButtonHTMLAttributes<any> {
  fullWidth?: boolean,
  loading?: boolean,
  size?: 'default' | 'small' | 'square',
  theme?: 'default' | 'ghost' | 'danger',
  routeName?: string
}

const Button = forwardRef((props: ButtonOptions, ref) => {
  if (!ref) {
    ref = useRef()
  }

  const [buttonProps, setButtonProps] = useState({})
  const classList = `button -component -theme-${props.theme || 'default'} -size-${props.size || 'default'} ${props.fullWidth ? '-full-width' : ''} ${props.loading ? '-loading' : ''}`

  const update = () => {
    (ref as any).current = {}

    // eslint-disable-next-line no-new-object
    const fieldProps = { ...props } as ButtonOptions
    delete fieldProps.fullWidth
    delete fieldProps.loading
    delete fieldProps.size
    delete fieldProps.theme
    delete fieldProps.routeName
    setButtonProps(fieldProps)
  }

  useEffect(() => {
    update()
  }, [props])

  return (
    <div className={classList}>
      {props.routeName
        ? <Link {...buttonProps} routeName={props.routeName}>
          { props.loading
            ? <div className="loader">
              <LoaderRound />
            </div>
            : props.children }
      </Link>
        : <button {...buttonProps}>
        { props.loading && <div className="loader">
            <LoaderRound />
          </div> }
          {props.children}
      </button>}
    </div>
  )
})

export default Button
