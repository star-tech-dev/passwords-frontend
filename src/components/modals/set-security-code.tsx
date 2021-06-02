import React, { useEffect, useState } from 'react'
import ModalWrapper from './wrapper'
import { logout, setUserSecurityCode } from '../../store/auth/events'
import { closeModal } from '../../store/modals/events'
import { nextTick } from '../../helpers/next-tick'

function SetSecurityCodeModal () {
  const id = 'set_security_code'
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
    await setUserSecurityCode(code)
  }

  useEffect(() => {
    nextTick(() => {
      codeField?.focus()
    })
  }, [codeField])

  return (
    <ModalWrapper id={id} closable={false}>
      <form onSubmit={onSubmit}>
        <div>Set your security code:</div>
        <div>
          <input type="text" ref={setCodeFieldRef} value={code} onInput={(e: React.ChangeEvent<HTMLInputElement>) => setCode(e.target.value)} />
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
