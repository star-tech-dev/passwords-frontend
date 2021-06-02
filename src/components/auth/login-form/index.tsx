import React, { useEffect, useState } from 'react'
import { useRouter } from 'react-router5'
import { checkUserSecurityCode, login as sendLoginRequest } from '../../../store/auth/events'
import { nextTick } from '../../../helpers/next-tick'

import UIInput from '../../ui/input'
import UIButton from '../../ui/button'

import './_index.scss'

interface LoginFormOptions {
  onRegisterShow?: () => void
}

function Index ({ onRegisterShow }: LoginFormOptions) {
  const [loginUsername, setLoginUsername] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const router = useRouter()

  const usernameField = React.createRef()
  const passwordField = React.createRef()
  const [isLoading, setIsLoading] = useState(false)

  const login = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    const successResponse = await sendLoginRequest({
      username: loginUsername,
      password: loginPassword
    }).then(() => true)
      .catch(() => {
        console.log('passwordField.current', passwordField.current);
        (passwordField.current as any).focus();
        (passwordField.current as any).select()
        return false
      })

    setIsLoading(false)

    if (successResponse) {
      await router.navigate('home')
      checkUserSecurityCode()
    }
  }

  const goToRegister = (e: React.FormEvent) => {
    e.preventDefault()
    if (onRegisterShow) {
      onRegisterShow()
    }
  }

  useEffect(() => {
    nextTick(() => {
      (usernameField.current as any).focus()
    })
  }, [])

  return (
    <div className="component -login-form">
      <form onSubmit={login}>
        <div>
          <UIInput ref={usernameField} placeholder="Username" onChange={e => setLoginUsername(e.target.value)} />
        </div>
        <div>
          <UIInput ref={passwordField} type="password" placeholder="Password" onChange={e => setLoginPassword(e.target.value)} />
        </div>

        <div className="button-block">
          <UIButton type="submit" loading={isLoading} fullWidth={true}>Login</UIButton>
        </div>
        <div>
          <span>or </span>
          <a href="#" onClick={goToRegister}>create new account</a>
        </div>
      </form>
    </div>
  )
}

export default Index
