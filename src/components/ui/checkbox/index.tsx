import React from 'react'

import IconCheck from '../../icons/check'

import './_index.scss'

interface UICheckboxProps extends React.ComponentProps<any> {}

function UICheckbox (props: UICheckboxProps) {
  const inputProps = () => {
    const _props = { ...props }
    delete _props.children
    return _props
  }
  return (
    <div className="component -ui-checkbox">
      <label className="flex a-center">
        <input type="checkbox" {...inputProps()} />
        <div className="box flex center">
          <IconCheck />
        </div>
        <div className="label">{props.children}</div>
      </label>
    </div>
  )
}

export default UICheckbox
