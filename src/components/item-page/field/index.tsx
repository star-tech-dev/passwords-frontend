import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import tippy from 'tippy.js'

import UIInput from '../../ui/input'
import UITextarea from '../../ui/textarea'
import IconCopy from '../../icons/copy'
import IconEye from '../../icons/eye'
import IconEyeCrossed from '../../icons/eye-crossed'

import './_index.scss'

interface ItemFieldProps extends React.ComponentProps<any> {
  value?: any,
  textarea?: boolean,
  interactive?: boolean
}

function ItemField (props: ItemFieldProps) {
  const { t } = useTranslation()
  const [fieldType, setFieldType] = useState<'text' | 'password'>(props.type === 'password' ? 'password' : props.type || 'text')
  const id = Math.random().toFixed(10).slice(2)

  const fieldProps = () => {
    const _props = { ...props }
    delete _props.children
    delete _props.textarea
    delete _props.interactive
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

  const onClick = () => {
    if (props.interactive === false) {
      return false
    }

    copyValue()
  }

  useEffect(() => {
    tippy(`#item_field_${id}`, {
      trigger: 'manual',
      content: t('global.copied'),
      placement: 'left',
      animation: 'perspective-subtle',
      theme: 'small',
      duration: 200
    })
  }, [])

  return (
    <div className={`component -item-field ${props.interactive === false ? '-non-interactive' : ''}`}>
      <div className="intro" onClick={onClick}>
        <div className="grow">
          <div className="label">{props.children}</div>
          {props.textarea
            ? <UITextarea theme="clean" {...fieldProps()} type={fieldType} readOnly={true} />
            : <UIInput theme="clean" {...fieldProps()} type={fieldType} readOnly={true} />}
        </div>
      </div>

      <div className="icons flex a-center">
        {props.type === 'password' && <div className={`icon-container -eye${fieldType === 'text' ? '-crossed' : ''}`} onClick={toggleFieldType}>
          {fieldType === 'text' ? <IconEyeCrossed/> : <IconEye/>}
        </div>}
        <div id={`item_field_${id}`} className="icon-container -copy" onClick={copyValue}>
          <IconCopy />
        </div>
      </div>
    </div>
  )
}

export default ItemField
