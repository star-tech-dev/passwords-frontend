import React, { useState } from 'react'

import LoginForm from '../../components/auth/loginForm'
import RegisterForm from '../../components/auth/registerForm'

import './_index.scss'

function AuthPage () {
  const [mode, setMode] = useState('login')

  return (
    <div className="page -auth">
      <h1>Hi, I&apos;m your password manager.</h1>
      {mode === 'register'
        ? <RegisterForm onLoginShow={() => setMode('login')} />
        : <LoginForm onRegisterShow={() => setMode('register')} /> }
    </div>
  )
}

export default AuthPage
