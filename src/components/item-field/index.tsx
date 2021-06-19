import React, { useEffect } from 'react'
import tippy from 'tippy.js'

import UIInput from '../ui/input'
import IconCopy from '../icons/copy'

import './_index.scss'

interface ItemFieldProps extends React.ComponentProps<any> {
  value?: any,
  textarea?: boolean
}

function ItemField (props: ItemFieldProps) {
  const id = Math.random().toFixed(10).slice(2)
  let tooltip = null as any

  const fieldProps = () => {
    const _props = { ...props }
    delete _props.children
    delete _props.textarea
    return _props
  }

  // let fieldRef = null as HTMLInputElement | null
  // const setFieldRef = (element: HTMLInputElement) => {
  //   fieldRef = element
  // }

  const copyValue = () => {
    navigator.clipboard.writeText(props.value)
    setTimeout(() => {
      tooltip?.show()
    }, 100)
    setTimeout(() => {
      tooltip?.hide()
    }, 1600)
  }

  const onClick = () => {
    // fieldRef?.focus()
    // fieldRef?.select()
    copyValue()
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
    <div className="component -item-field flex a-center" onClick={onClick}>
      <div className="grow">
        <div className="label">{props.children}</div>
        <UIInput theme="clean" {...fieldProps()} readOnly={true} />
      </div>

      <div className="icons">
        <div id={`item_field_${id}`} className="copy">
          <IconCopy />
        </div>
      </div>
    </div>
  )
}

export default ItemField
