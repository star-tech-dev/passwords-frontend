import React, { useState } from 'react'
import { useRouter } from 'react-router5'
import { logout as sendLogoutRequest, setUserSecurityCode } from '../../../store/auth/events'
import { closeModal } from '../../../store/modals/events'

import ModalWrapper from '../wrapper'
import UIButton from '../../ui/button'
import PasswordField from '../../ui/password-field'

import './_index.scss'

function SetSecurityCodeModal () {
  const id = 'set_security_code'
  const router = useRouter()
  const [code, setCode] = useState('')
  const [fieldError, setFieldError] = useState('')
  const field = React.createRef() as React.RefObject<HTMLInputElement>

  const logout = async (e: React.FormEvent) => {
    e.preventDefault()
    await sendLogoutRequest()
    closeModal(id)
    router.navigate('auth')
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!code.length) {
      setFieldError('This field is required')
      return
    }
    await setUserSecurityCode(code)
      .catch(err => {
        field.current?.focus()
        setFieldError(err?.response?.data?.message || 'Server error')
      })
  }

  return (
    <ModalWrapper id={id} closable={false} heading="Set your security code:">
      <form onSubmit={onSubmit}>
        <div className="form flex a-center j-between">
          <div className="grow">
            <PasswordField
              value={code}
              ref={field}
              autoFocus={true}
              boxShadow={false}
              generator={false}
              error={fieldError}
              placeholder="security_code"
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => setCode(e.target.value)} />
          </div>
          <UIButton>Set</UIButton>
        </div>

        <div className="text">
          <div>This is&nbsp;a&nbsp;required step for advanced app security.</div>
          <div><br/></div>
          <div>Set a&nbsp;passcode that you can remember.</div>
          <div>You will be&nbsp;able to&nbsp;lock the app without session logout.</div>
          <div><br/></div>
          <div>
            <span>Also you may </span>
            <a href="" onClick={logout}>logout</a>
            <span> and process this step in&nbsp;the future.</span>
          </div>
        </div>
      </form>
    </ModalWrapper>
  )
}

export default SetSecurityCodeModal
