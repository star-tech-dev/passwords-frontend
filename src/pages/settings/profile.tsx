import React from 'react'
import { useRouter } from 'react-router5'
// import { $auth } from '../../store/auth/store'
import { logout as sendLogoutRequest } from '../../store/auth/events'
// import { useStore } from 'effector-react'

function SettingsProfilePage () {
  const router = useRouter()
  // const user = useStore($auth).user

  const logout = async () => {
    await sendLogoutRequest()
    router.navigate('auth')
  }

  return (
    <div className="page -profile">
      <div>ProfilePage</div>
      <div className="flex a-center">
        <div>name</div>
        {/* <input type="text" value={user?.username} readOnly /> */}
      </div>
      <div>
        <button onClick={logout}>logout</button>
      </div>
    </div>
  )
}

export default SettingsProfilePage
