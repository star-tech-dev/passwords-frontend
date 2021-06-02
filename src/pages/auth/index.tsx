import React, { useState } from 'react'

import LoginForm from '../../components/auth/login-form'
import RegisterForm from '../../components/auth/register-form'

import './_index.scss'

function AuthPage () {
  const [mode, setMode] = useState('login')

  return (
    <div className="page -auth">
      <h1>
        {mode === 'register'
          ? <span>Let&apos;s create a new account:</span>
          : <span>Hi, I&apos;m your password manager.</span> }
      </h1>

      <div className="container -narrow">
        {mode === 'register'
          ? <RegisterForm onLoginShow={() => setMode('login')} />
          : <LoginForm onRegisterShow={() => setMode('register')} /> }
      </div>
    </div>
  )
}

export default AuthPage
