import React, { useEffect, useState } from 'react'
import { useRouter } from 'react-router5'
import { checkUserSecurityCode, login as sendLoginRequest } from '../../store/auth/events'
import { nextTick } from '../../helpers/nextTick'

import UIInput from '../ui/input'

interface LoginFormOptions {
  onRegisterShow?: () => void
}

function LoginForm ({ onRegisterShow }: LoginFormOptions) {
  const [loginUsername, setLoginUsername] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const router = useRouter()

  const usernameField = React.createRef()

  const login = async (e: React.FormEvent) => {
    e.preventDefault()
    await sendLoginRequest({
      username: loginUsername,
      password: loginPassword
    })
    await router.navigate('home')
    checkUserSecurityCode()
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
          <UIInput type="password" placeholder="Password" onChange={e => setLoginPassword(e.target.value)} />
        </div>
        <div>
          <UIButton></UIButton>
          <button type="submit">Login</button>
        </div>
        <div>
          <span>or </span>
          <a href="#" onClick={goToRegister}>create new account</a>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
