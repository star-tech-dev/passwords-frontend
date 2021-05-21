import React, { useEffect } from 'react'
import { $auth } from '../store/auth/store'
import { logout as sendLogoutRequest } from '../store/auth/events'
import { useRouter } from 'react-router5'
import { useStore } from 'effector-react'

function ProfilePage () {
  const router = useRouter()
  const user = useStore($auth).user

  const redirect = () => {
    router.navigate('home')
  }

  const logout = async () => {
    await sendLogoutRequest()
    redirect()
  }

  useEffect(() => {
    if (!user) {
      redirect()
    }
  }, [user])

  if (user) {
    return (
      <div className="page -profile">
        <div>ProfilePage</div>
        <div className="flex a-center">
          <div>name</div>
          <input type="text" value={user.username} readOnly />
        </div>
        <div className="flex a-center">
          <div>hasSecurityCode</div>
          <input type="checkbox" checked={user.hasSecurityCode} readOnly />
        </div>
        <div>
          <button onClick={logout}>logout</button>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default ProfilePage
