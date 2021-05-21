import React from 'react'
import { Link } from 'react-router5'
import { useStore } from 'effector-react'
import { $auth as authStore } from '../../store/auth/store'
import { lock } from '../../store/locker/events'

import './_index.scss'

function Header () {
  const $auth = useStore(authStore)
  const user = $auth.user

  const lockApp = e => {
    e.preventDefault()
    lock()
  }

  return (
    <header className="Header Component flex a-center j-between">
      <nav>
        <Link routeName="home">Home</Link>
        <Link routeName="auth">Auth</Link>
        <Link routeName="profile">Profile</Link>
      </nav>
      <div className="flex a-center">
        <div>
          <a href="#" onClick={lockApp}>lock</a>
        </div>
        <div>user: {user ? user.username : 'null'}</div>
      </div>
    </header>
  )
}

export default Header
