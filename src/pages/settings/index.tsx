// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { useRouter } from 'react-router5'

function SettingsPage () {
  const router = useRouter()

  useEffect(() => {
    router.navigate('settings.general')
  }, [])

  return null
}

export default SettingsPage
