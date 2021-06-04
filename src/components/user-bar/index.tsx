import React from 'react'
import { Link } from 'react-router5'
import { useStore } from 'effector-react'
import { $auth as authStore } from '../../store/auth/store'

import './_index.scss'

function UserBar () {
  const $auth = useStore(authStore)
  const user = $auth.user

  if (user) {
    return (
      <Link routeName="profile" className="component -user-bar flex a-center">
        <div>Account</div>
        <div className="photo">
          <img src="" alt=""/>
        </div>
      </Link>
    )
  } else {
    return (
      <div>auth link</div>
    )
  }
}

export default UserBar
