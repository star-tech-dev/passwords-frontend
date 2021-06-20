import React, { useEffect, useState } from 'react'
import { openModal } from '../../../store/modals/events'
import { $modals } from '../../../store/modals/store'
import { onSaveGenerated } from '../../../store/app/events'

import UIInput from '../input'
import IconKey from '../../icons/key'
import IconEye from '../../icons/eye'

import './_index.scss'

interface PasswordFieldProps extends React.ComponentProps<any> {
  onGenerate?: Function
}

function PasswordField (props: PasswordFieldProps) {
  const [fieldType, setFieldType] = useState<'password' | 'text'>('password')
  const fieldProps = () => {
    const _props = { ...props }
    delete _props.onGenerate
    return _props
  }

  const toggleFieldType = () => {
    setFieldType(fieldType === 'password' ? 'text' : 'password')
  }

  useEffect(() => {
    $modals.on(onSaveGenerated, (state, value) => {
      props.onGenerate && props.onGenerate(value)
      return state
    })
    return () => {
      $modals.off(onSaveGenerated)
    }
  }, [])

  return (
    <div className="component -password-field">
      <div className="icons flex a-center">
        <div className="icon-container -icon -key" onClick={() => openModal('password_generator')}>
          <IconKey />
        </div>
        <div className="icon-container -eye" onClick={toggleFieldType}>
          <IconEye />
        </div>
      </div>
      <UIInput type={fieldType} name="password" {...fieldProps()}>
        <div>Password</div>
      </UIInput>
    </div>
  )
}

export default PasswordField
