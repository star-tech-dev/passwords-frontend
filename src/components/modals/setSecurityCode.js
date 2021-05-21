import React, { createRef, useEffect, useState } from 'react'
import ModalWrapper from './wrapper'
import { logout, setUserSecurityCode } from '../../store/auth/events'
import { closeModal } from '../../store/modals/events'
import nextTick from '../../helpers/nextTick'

function SetSecurityCodeModal () {
  const id = 'set_security_code'
  const [code, setCode] = useState('')
  const fieldRef = createRef()

  const _logout = async e => {
    e.preventDefault()
    await logout()
    closeModal(id)
  }

  const onSubmit = async e => {
    e.preventDefault()
    // console.log('onSubmit', code)
    await setUserSecurityCode(code)
    // console.log('setUserSecurityCode', res)
  }

  const onCodeInput = e => {
    setCode(e.target.value)
  }

  useEffect(() => {
    nextTick(() => {
      fieldRef.current?.focus()
    })
  }, [fieldRef])

  return (
    <ModalWrapper id={id} closable={false}>
      <form onSubmit={onSubmit}>
        <div>Set your security code:</div>
        <div>
          <input type="text" ref={fieldRef} value={code} onInput={onCodeInput} />
        </div>
        <div>
          <button type="submit">Set</button>
        </div>
        <div>Do not forget your secret code!</div>
      </form>

      <div>
        <a href="#" onClick={_logout}>logout</a>
      </div>
    </ModalWrapper>
  )
}

export default SetSecurityCodeModal
