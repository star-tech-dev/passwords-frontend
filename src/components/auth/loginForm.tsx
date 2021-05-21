import React, { useEffect, useState } from 'react'
import { useRouter } from 'react-router5'
import { checkUserSecurityCode, login as sendLoginRequest } from '../../store/auth/events'
import { nextTick } from '../../helpers/nextTick'

function LoginForm () {
  const [loginUsername, setLoginUsername] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const router = useRouter()

  let usernameField = null as HTMLInputElement | null
  const setUsernameFieldRef = (element: HTMLInputElement) => {
    usernameField = element
  }

  const login = async (e: React.FormEvent) => {
    e.preventDefault()
    await sendLoginRequest({
      username: loginUsername,
      password: loginPassword
    })
    await router.navigate('home')
    checkUserSecurityCode()
  }

  useEffect(() => {
    nextTick(() => {
      usernameField?.focus()
    })
  }, [])

  return (
    <div className="component -login-form">
      <form onSubmit={login}>
        <div>
          <input ref={setUsernameFieldRef} type="text" placeholder="Username" onChange={e => setLoginUsername(e.target.value)} />
        </div>
        <div>
          <input type="password" placeholder="Password" onChange={e => setLoginPassword(e.target.value)} />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
