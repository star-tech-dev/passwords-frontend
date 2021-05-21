import React, { createRef, useEffect, useState } from 'react'
import { nextTick } from '../../helpers/nextTick'
import { logout } from '../../store/auth/events'
import { closeModal } from '../../store/modals/events'
import { unlock } from '../../store/locker/events'
import ModalWrapper from './wrapper'

function LockerModal () {
  const id = 'locker'
  const [code, setCode] = useState('')

  const fieldRef = createRef()

  const _logout = async e => {
    e.preventDefault()
    await logout()
    closeModal(id)
  }

  const onSubmit = async e => {
    e.preventDefault()
    await unlock(code)
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
        <div>App was locked.</div>
        <div>Enter your security code to unlock:</div>
        <div>
          <input type="text" ref={fieldRef} value={code} onInput={onCodeInput} />
        </div>
        <div>
          <button type="submit">Unlock</button>
        </div>
      </form>

      <div>
        <a href="#" onClick={_logout}>logout</a>
      </div>
    </ModalWrapper>
  )
}

export default LockerModal
