import React, { forwardRef, useEffect, useState } from 'react'
import { GeneratorMode } from '../../../store/app/types'
import { openModal } from '../../../store/modals/events'
import { $modals } from '../../../store/modals/store'
import { onOpenGenerator, onSaveGenerated } from '../../../store/app/events'

import UIInput, { InputOptions } from '../input'
import IconKey from '../../icons/key'
import IconEye from '../../icons/eye'

import './_index.scss'

interface PasswordFieldProps extends InputOptions {
  onGenerate?: Function,
  label?: boolean,
  generator?: boolean
}

const PasswordField = forwardRef((props: PasswordFieldProps, ref: any) => {
  const [fieldType, setFieldType] = useState<'password' | 'text'>('password')
  const [localError, setLocalError] = useState(props.error)
  const innerRef = React.createRef()

  const fieldProps = () => {
    const _props = { ...props }
    delete _props.onGenerate
    delete _props.label
    delete _props.generator
    return _props
  }

  const toggleFieldType = () => {
    setFieldType(fieldType === 'password' ? 'text' : 'password')
  }

  const openGenerator = () => {
    onOpenGenerator(GeneratorMode.field)
    openModal('password_generator')
  }

  const onInput = (e: React.ChangeEvent) => {
    props.onInput && props.onInput(e)
    setLocalError('')
  }

  const onBlur = (e: any) => {
    props.onBlur && props.onBlur(e)
    if (!props.value) {
      setLocalError('')
    }
  }

  useEffect(() => {
    try {
      ref.current = innerRef.current
    } catch (e) {}
  }, [ref])

  useEffect(() => {
    setLocalError(props.error)
  }, [props.error])

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
        {props.generator && <div className="icon-container -icon -key" onClick={openGenerator}>
          <IconKey/>
        </div>}
        {!localError && <div className="icon-container -eye" onClick={toggleFieldType}>
          <IconEye/>
        </div>}
      </div>
      <UIInput
        {...fieldProps()}
        ref={innerRef}
        type={fieldType}
        error={localError}
        name="password"
        onInput={onInput}
        onBlur={onBlur}>
        {props.label !== false && <div>Password</div>}
      </UIInput>
    </div>
  )
})

PasswordField.displayName = 'PasswordField'

export default PasswordField
