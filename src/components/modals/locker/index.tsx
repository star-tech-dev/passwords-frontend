import React, { useEffect, useState } from 'react'
import { useStore } from 'effector-react'
import { logout } from '../../../store/auth/events'
import { closeModal } from '../../../store/modals/events'
import { unlock } from '../../../store/locker/events'
import { $auth } from '../../../store/auth/store'

import ModalWrapper from '../wrapper'
import UIInput from '../../ui/input'
import UIButton from '../../ui/button'

import './_index.scss'
import { nextTick } from '../../../helpers/next-tick'

function LockerModal () {
  const [_loading, _setLoading] = useState(false)
  const id = 'locker'
  const user = useStore($auth).user
  const [code, setCode] = useState('')
  const [codeFieldError, setCodeFieldError] = useState('')

  const codeField = React.createRef()

  const _logout = async (e: React.FormEvent) => {
    e.preventDefault()
    await logout()
    closeModal(id)
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('onsubmit')
    // console.log('setCodeFieldError', setCodeFieldError)
    // setCodeFieldError('')
    // console.log('current error (must be asd):', codeFieldError)

    if (!code.length) {
      console.log('set error about length')
      setCodeFieldError('This field is required')
      return
    }

    _setLoading(true)
    await unlock(code).catch(e => {
      setCodeFieldError(e.response.data.message)
    })
    _setLoading(false)
  }

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCodeFieldError('')
    setCode(e.target.value)
  }

  const onOpen = () => {
    nextTick(() => {
      (codeField.current as any)?.focus()
    })
  }

  const onClose = () => {
    setCode('')
  }

  useEffect(() => {
    console.log('codeFieldError changed to:', codeFieldError)
  }, [codeFieldError])

  return (
    <ModalWrapper
      id={id}
      size="auto"
      heading="App is locked!"
      closable={false}
      onOpen={onOpen}
      onClose={onClose}>
      <div className="flex column center">
        <div>Enter your security code to unlock the app:</div>

        <form className="flex column" onSubmit={(e) => onSubmit(e)}>
          <div>
            <UIInput ref={codeField} type="password" error={codeFieldError} placeholder="your_security_code" value={code} onInput={onInput} />
          </div>
          <div>
            <UIButton type="submit" loading={_loading} fullWidth={true}>Unlock</UIButton>
          </div>
        </form>

        <div className="bottom flex a-center">
          <div>You signed as&nbsp;</div>
          <div className="name">{user?.username}</div>
          <div>.&nbsp;</div>
          <a href="#" onClick={_logout}>logout</a>
          <div>.</div>
        </div>
      </div>
    </ModalWrapper>
  )
}

export default LockerModal
