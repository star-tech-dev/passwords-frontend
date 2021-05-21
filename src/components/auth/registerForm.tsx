import React, { useEffect, useState } from 'react'
import { useRouter } from 'react-router5'
import { checkUserSecurityCode, register as sendRegisterRequest } from '../../store/auth/events'
import nextTick from '../../helpers/nextTick'

function RegisterForm () {
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

  useEffect(() => {
    nextTick(() => {
      usernameField?.focus()
    })
  }, [])

  return (
    <div className="component -register-form">
      <form onSubmit={register}>
        <div>
          <input ref={setUsernameFieldRef} type="text" placeholder="username" onChange={e => setRegisterUsername(e.target.value)} />
        </div>
        <div>
          <input type="text" placeholder="password" onChange={e => setRegisterPassword(e.target.value)} />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm
