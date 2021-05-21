import React, { useEffect, useState } from 'react'
import { nextTick } from '../../helpers/nextTick'
import { logout } from '../../store/auth/events'
import { closeModal } from '../../store/modals/events'
import { unlock } from '../../store/locker/events'
import ModalWrapper from './wrapper'

function LockerModal () {
  const id = 'locker'
  const [code, setCode] = useState('')

  let codeField = null as HTMLInputElement | null
  const setCodeFieldRef = (element: HTMLInputElement) => {
    codeField = element
  }

  const _logout = async (e: React.FormEvent) => {
    e.preventDefault()
    await logout()
    closeModal(id)
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await unlock(code)
  }

  useEffect(() => {
    nextTick(() => {
      codeField?.focus()
    })
  }, [codeField])

  return (
    <ModalWrapper id={id} closable={false}>
      <form onSubmit={onSubmit}>
        <div>App was locked.</div>
        <div>Enter your security code to unlock:</div>
        <div>
          <input type="text" ref={setCodeFieldRef} value={code} onInput={(e: React.ChangeEvent<HTMLInputElement>) => setCode(e.target.value)} />
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
