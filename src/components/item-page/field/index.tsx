import React, { useEffect, useState } from 'react'
import tippy from 'tippy.js'

import UIInput from '../../ui/input'
import IconCopy from '../../icons/copy'
import IconEye from '../../icons/eye'

import './_index.scss'

interface ItemFieldProps extends React.ComponentProps<any> {
  value?: any,
  textarea?: boolean
}

function ItemField (props: ItemFieldProps) {
  const [fieldType, setFieldType] = useState<'text' | 'password'>(props.type === 'password' ? 'password' : props.type || 'text')
  const id = Math.random().toFixed(10).slice(2)

  const fieldProps = () => {
    const _props = { ...props }
    delete _props.children
    delete _props.textarea
    return _props
  }

  const copyValue = () => {
    const _tooltip = document.querySelector(`#item_field_${id}`)
    navigator.clipboard.writeText(props.value)
    setTimeout(() => {
      (_tooltip as any)._tippy?.show()
    }, 100)
    setTimeout(() => {
      (_tooltip as any)._tippy?.hide()
    }, 1600)
  }

  const toggleFieldType = () => {
    setFieldType(fieldType === 'password' ? 'text' : 'password')
  }

  useEffect(() => {
    tippy(`#item_field_${id}`, {
      trigger: 'manual',
      content: 'Copied',
      placement: 'left',
      animation: 'perspective-subtle',
      theme: 'small',
      duration: 200
    })
  }, [])

  return (
    <div className="component -item-field">
      <div className="intro" onClick={copyValue}>
        <div className="grow">
          <div className="label">{props.children}</div>
          <UIInput theme="clean" {...fieldProps()} type={fieldType} readOnly={true} />
        </div>
      </div>

      <div className="icons flex a-center">
        {props.type === 'password' && <div className="icon-container -eye" onClick={toggleFieldType}>
          <IconEye/>
        </div>}
        <div id={`item_field_${id}`} className="icon-container -copy" onClick={copyValue}>
          <IconCopy />
        </div>
      </div>
    </div>
  )
}

export default ItemField
