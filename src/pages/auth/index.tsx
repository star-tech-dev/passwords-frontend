import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import LoginForm from '../../components/auth/login-form'
import RegisterForm from '../../components/auth/register-form'

import './_index.scss'

function AuthPage () {
  const { t } = useTranslation()
  const [mode, setMode] = useState('login')

  return (
    <div className="page -auth">
      <h1>
        {mode === 'register'
          ? <span>{t('auth.register_heading')}</span>
          : <span>{t('auth.heading')}</span> }
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
