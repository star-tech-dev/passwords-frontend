import React, { useEffect, useState } from 'react'
import { useRouter } from 'react-router5'
import { checkUserSecurityCode, register as sendRegisterRequest } from '../../store/auth/events'
import { nextTick } from '../../helpers/next-tick'

import UIInput from '../ui/input'
import UIButton from '../ui/button'

interface RegisterFormOptions {
  onLoginShow?: () => void
}

function RegisterForm ({ onLoginShow }: RegisterFormOptions) {
  const [registerUsername, setRegisterUsername] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [registerEmail, setRegisterEmail] = useState('')

  const router = useRouter()
  const usernameField = React.createRef()

  const register = async (e: React.FormEvent) => {
    e.preventDefault()
    await sendRegisterRequest({
      username: registerUsername,
      email: registerEmail,
      password: registerPassword
    }).then(async () => {
      await router.navigate('home')
      checkUserSecurityCode()
    })
  }

  const goToLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (onLoginShow) {
      onLoginShow()
    }
  }

  useEffect(() => {
    nextTick(() => {
      (usernameField.current as any).focus()
    })
  }, [])

  return (
    <div className="component -register-form">
      <form onSubmit={register}>
        <div>
          <UIInput ref={usernameField} placeholder="Username" onChange={e => setRegisterUsername(e.target.value)} />
        </div>
        <div>
          <UIInput type="email" placeholder="Email" onChange={e => setRegisterEmail(e.target.value)} />
        </div>
        <div>
          <UIInput placeholder="Password" onChange={e => setRegisterPassword(e.target.value)} />
        </div>
        <div className="button-block">
          <UIButton type="submit" fullWidth={true}>Sign up</UIButton>
        </div>
        <div>
          <span>or </span>
          <a href="#" onClick={goToLogin}>return to login</a>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm
