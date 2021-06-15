import React, { useEffect, useState } from 'react'
import { useStore } from 'effector-react'
import { useRouter } from 'react-router5'
import { nextTick } from '../../helpers/next-tick'
import { unlock } from '../../store/locker/events'
import { logout as _logout } from '../../store/auth/events'
import { $auth } from '../../store/auth/store'

import UIInput from '../../components/ui/input'
import UIButton from '../../components/ui/button'

import './_index.scss'

function UnlockPage () {
  const [_loading, _setLoading] = useState(false)
  const [code, setCode] = useState('')
  const [codeFieldError, setCodeFieldError] = useState('')
  const user = useStore($auth).user
  const router = useRouter()
  const codeField = React.createRef()

  const logout = async (e: React.FormEvent) => {
    e.preventDefault()
    await _logout()
    router.navigate('auth')
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!code.length) {
      setCodeFieldError('This field is required')
      nextTick(() => {
        (codeField.current as any)?.focus()
      })
      return
    }

    _setLoading(true)
    await unlock(code).catch(e => {
      setCodeFieldError('')
      setCodeFieldError(e.response.data.message)
      nextTick(() => {
        (codeField.current as any)?.focus();
        (codeField.current as any)?.select()
      })
    })

    _setLoading(false)
  }

  useEffect(() => {
    nextTick(() => {
      (codeField.current as any)?.focus()
    })
    return () => {}
  }, [])

  return (
    <div className="page -unlock">
      <h1>App is locked!</h1>

      <div className="flex column center">
        <div>Enter your security code to unlock the app:</div>

        <form className="flex column" onSubmit={onSubmit}>
          <div>
            <UIInput ref={codeField} type="password" error={codeFieldError} placeholder="your_security_code" value={code} onInput={(e: React.ChangeEvent<HTMLInputElement>) => setCode(e.target.value)} />
          </div>
          <div>
            <UIButton type="submit" loading={_loading} fullWidth={true}>Unlock</UIButton>
          </div>
        </form>

        <div className="bottom flex a-center">
          <div>You signed as&nbsp;</div>
          <div className="name">{user?.username}</div>
          <div>.&nbsp;</div>
          <a href="#" onClick={logout}>logout</a>
          <div>.</div>
        </div>
      </div>
    </div>
  )
}

export default UnlockPage
