import React, { useEffect, useState } from 'react'
import { useRouter } from 'react-router5'
import { checkUserSecurityCode, register as sendRegisterRequest } from '../../store/auth/events'
import { nextTick } from '../../helpers/nextTick'

interface RegisterFormOptions {
  onLoginShow?: () => void
}

function RegisterForm ({ onLoginShow }: RegisterFormOptions) {
  const [registerUsername, setRegisterUsername] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')

  const router = useRouter()

  let usernameField = null as HTMLInputElement | null
  const setUsernameFieldRef = (element: HTMLInputElement) => {
    usernameField = element
  }

  const register = async (e: React.FormEvent) => {
    e.preventDefault()
    await sendRegisterRequest({
      username: registerUsername,
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
      usernameField?.focus()
    })
  }, [])

  return (
    <div className="component -register-form">
      <form onSubmit={register}>
        <div>
          <input ref={setUsernameFieldRef} type="text" placeholder="Username" onChange={e => setRegisterUsername(e.target.value)} />
        </div>
        <div>
          <input type="text" placeholder="Password" onChange={e => setRegisterPassword(e.target.value)} />
        </div>
        <div>
          <button type="submit">Register</button>
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
