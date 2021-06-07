import React, { InputHTMLAttributes, useEffect, useState } from 'react'
import tippy from 'tippy.js'
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
  const id = Math.random().toFixed(10).slice(2)
  const fieldRef = React.useRef()
  let tooltip = null as any

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

  const copy = () => {
    navigator.clipboard.writeText(props.value)
    setTimeout(() => {
      tooltip.show()
    }, 100)
    setTimeout(() => {
      tooltip.hide()
    }, 1600)
  }

  const onClick = (e: React.MouseEvent) => {
    e.preventDefault()
    select()
    copy()
  }

  useEffect(() => {
    tooltip = tippy(`#item_field_${id}`, {
      trigger: 'manual',
      content: 'Copied',
      placement: 'left',
      animation: 'perspective-subtle',
      theme: 'small',
      duration: 200
    })
    tooltip = tooltip[0]
  }, [])

  return (
    <div className="component -item-field">
      <div className="flex column a-start">
        <div className="label" onClick={onClick}>
          {props.name}
        </div>

        <div className="field">
          <div className="icons">
            {props.name === 'password' && <div onClick={togglePasswordVisibility}>
              <IconEye />
            </div>}
          </div>
          <div id={`item_field_${id}`}>
            <UIInput ref={fieldRef} {...props} type={fieldType} theme="clean" onClick={onClick} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemField
