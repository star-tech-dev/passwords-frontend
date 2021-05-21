import React, { useEffect } from 'react'
import { useRouter } from 'react-router5'
import { useStore } from 'effector-react'
import { $auth } from '../store/auth/store'

import Items from '../components/items'

function HomePage () {
  const user = useStore($auth).user
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.navigate('auth')
    }
  }, [user])

  return (
    <div className="page -home">
      <div>
        <div>Items</div>
        <div>
          <Items />
        </div>
      </div>
    </div>
  )
}

export default HomePage
