import React, { useEffect, useState } from 'react'
import { useRouter } from 'react-router5'
import { useTranslation } from 'react-i18next'
import { Api } from '../../react-app-env'
import {
  checkUserSecurityCode,
  register as sendRegisterRequest
} from '../../store/auth/events'
import { nextTick } from '../../helpers/next-tick'

import UIInput from '../ui/input'
import UIButton from '../ui/button'

interface RegisterFormOptions {
  onLoginShow?: () => void
}

function RegisterForm ({ onLoginShow }: RegisterFormOptions) {
  const { t } = useTranslation()
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [usernameError, setUsernameError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const passwordField = React.createRef()
  const usernameField = React.createRef()

  const register = async () => {
    setIsLoading(true)
    const successResponse = await sendRegisterRequest({
      username: username,
      password: password
    }).then(() => true)
      .catch((err: Api.Error) => {
        (usernameField.current as any).focus();
        (usernameField.current as any).select()
        const errorText = err.response?.data.message || 'server'
        setUsernameError(t(`errors.${errorText}`))
        return false
      })

    setIsLoading(false)

    if (successResponse) {
      await router.navigate('home')
      checkUserSecurityCode()
    }
  }

  const goToLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (onLoginShow) {
      onLoginShow()
    }
  }

  const validateForm = () => {
    const res = []

    if (!username.length) {
      res.push({
        field: 'username',
        message: t('errors.required')
      });
      (usernameField.current as any).focus()
      return res
    }
    if (!password.length) {
      res.push({
        field: 'password',
        message: t('errors.required')
      })
      if (username.length) {
        (passwordField.current as any).focus()
      }
    }

    return res
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errorsFound = validateForm()

    if (errorsFound.length) {
      errorsFound.forEach(error => {
        switch (error.field) {
          case 'username':
            setUsernameError(error.message)
            break
          case 'password':
            setPasswordError(error.message)
            break
        }
      })
      return
    }

    register()
  }

  useEffect(() => {
    nextTick(() => {
      (usernameField.current as any).focus()
    })
  }, [])

  return (
    <div className="component -register-form">
      <form onSubmit={onSubmit}>
        <div>
          <UIInput
            ref={usernameField}
            placeholder={t('auth.username')}
            value={username}
            error={usernameError}
            onInput={() => setUsernameError('')}
            onChange={e => setUsername(e.target.value)}
            onBlur={e => !e.target.value.length ? setUsernameError('') : null } />
        </div>
        <div>
          <UIInput
            ref={passwordField}
            type="password"
            placeholder={t('auth.password')}
            value={password}
            error={passwordError}
            onInput={() => setPasswordError('')}
            onChange={e => setPassword(e.target.value)}
            onBlur={e => !e.target.value.length ? setPasswordError('') : null } />
        </div>

        <div className="button-block">
          <UIButton type="submit" loading={isLoading} fullWidth={true}>
            {t('global.actions.sign_up')}
          </UIButton>
        </div>
        <div>
          <span>{t('global.or')} </span>
          <a href="#" onClick={goToLogin}>{t('auth.return_to_login')}</a>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm
