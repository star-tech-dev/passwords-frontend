import React from 'react'

import LoginForm from '../../components/auth/loginForm'
import RegisterForm from '../../components/auth/registerForm'

import './_index.scss'

function AuthPage () {
  return (
    <div className="page -auth">
      <h1>Hi, I&apos;m your password manager.</h1>
      <LoginForm />
      <RegisterForm />
    </div>
  )
}

export default AuthPage
