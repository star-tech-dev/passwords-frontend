import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useOutside } from '../../../helpers/outside'

import IconCross from '../../icons/cross'
import IconAngle from '../../icons/angle'

import './_index.scss'

interface Option {
  value: any,
  text?: string
}

export interface SelectOptions {
  theme?: 'default',
  id?: string,
  value?: any,
  options: any[],
  boxShadow?: boolean,
  emptyText?: string,
  onChange?: Function,
  children?: any
}

const Select = forwardRef((props: SelectOptions, ref: any) => {
  if (!ref) {
    ref = useRef()
  }

  const { t } = useTranslation()
  const localId = props.id || Math.random().toFixed(10).slice(2)
  const [localValue, setLocalValue] = useState<any>(null)
  const selectBox = useRef(null)
  const classList = `select -component -theme-${props.theme || 'default'} ${props.boxShadow === false ? '-no-box-shadow' : ''}`
  const [isOpened, setIsOpened] = useState(false)

  const emptyValue = null
  const emptyText = () => {
    return props.emptyText || t('global.not_chosen')
  }

  const selectedValue = () => {
    return localValue ? props.options.find(i => i.value === localValue).text : emptyText()
  }

  const toggle = (e: React.MouseEvent<HTMLElement>) => {
    if ((e.target as HTMLElement).closest('.clear')) {
      return
    }
    setIsOpened(!isOpened)
  }

  const close = () => {
    setIsOpened(false)
  }

  const select = (newValue: any) => {
    if (props.onChange) {
      props.onChange(newValue)
    }
    close()
  }

  const options = () => {
    return props.options.map((option: Option) => {
      return <div
        className="option"
        data-value={option.value}
        onClick={() => select(option.value)} key={option.value}>
        {option.text || option.value}
      </div>
    })
  }

  const clear = () => {
    if (props.onChange) {
      props.onChange(emptyValue as any)
    }
    close()
  }

  useOutside(selectBox, () => {
    close()
  })

  useEffect(() => {
    setLocalValue(props.value)
  }, [props])

  return (
    <div className={classList}>
      {props.children && <label htmlFor={localId} className="label">{props.children}</label>}

      <div ref={selectBox} className={`select-box ${isOpened ? '-opened' : ''}`}>
        <div className="intro flex a-center j-between" onClick={toggle}>
          <div>{selectedValue()}</div>
          <div className="icons flex a-center">
            {props.value
              ? <div className="clear" onClick={clear}>
              <IconCross/>
            </div>
              : null}
            <div className="angle">
              <IconAngle />
            </div>
          </div>
        </div>

        <div className="options">
          <div className="option" data-value={emptyValue} onClick={() => select(emptyValue)}>{emptyText()}</div>
          {options()}
        </div>
      </div>
    </div>
  )
})

Select.displayName = 'UISelect'

export default Select
