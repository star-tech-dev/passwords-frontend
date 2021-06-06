import React, { InputHTMLAttributes, useState } from 'react'
import UIInput from '../../ui/input'
import IconEye from '../../icons/eye'

import './_index.scss'

interface ItemFieldProps extends InputHTMLAttributes<any> {
  name?: string,
  value?: any
}

function ItemField (props: ItemFieldProps) {
  const [fieldType, setFieldType] = useState(props.type)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const fieldRef = React.useRef()

  const select = () => {
    (fieldRef.current as any).focus();
    (fieldRef.current as any).select()
  }

  const togglePasswordVisibility = () => {
    if (isPasswordVisible) {
      setIsPasswordVisible(false)
      setFieldType('password')
    } else {
      setIsPasswordVisible(true)
      setFieldType('text')
    }
  }

  return (
    <div className="component -item-field">
      <div className="flex column a-start">
        <div className="label" onClick={select}>
          {props.name}
        </div>

        <div className="field">
          <div className="icons">
            {props.name === 'password' && <div onClick={togglePasswordVisibility}>
              <IconEye />
            </div>}
          </div>
          <UIInput ref={fieldRef} {...props} type={fieldType} theme="clean" onClick={select} />
        </div>
      </div>
    </div>
  )
}

export default ItemField
