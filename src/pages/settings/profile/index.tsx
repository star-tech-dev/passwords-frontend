import React, { useEffect, useState } from 'react'
import { useRouter } from 'react-router5'
import { $auth } from '../../../store/auth/store'
import { logout as sendLogoutRequest, updateProfile } from '../../../store/auth/events'

import { useStore } from 'effector-react'

import ActionBar from '../../../components/settings/action-bar/action-bar'
import UIInput from '../../../components/ui/input'
import UIButton from '../../../components/ui/button'
import UIDropdown from '../../../components/ui/dropdown'
import IconCheck from '../../../components/icons/check'
import IconAngle from '../../../components/icons/angle'
import PasswordDropdown from '../../../components/settings/password-dropdown'

import './_index.scss'

function SettingsProfilePage () {
  const router = useRouter()
  const user = useStore($auth).user
  const [hasChanged, setHasChanged] = useState(false)
  const [username, setUsername] = useState('')

  const save = async () => {
    updateProfile({
      username
    }).catch(() => null)
  }

  const logout = async () => {
    await sendLogoutRequest()
    router.navigate('auth')
  }

  const updateFields = () => {
    user && setUsername(user.username)
  }

  useEffect(() => {
    user && setHasChanged(username !== user.username)
  }, [username])

  useEffect(() => {
    updateFields()
  }, [user])

  return (
    <div className="page -settings-profile">
      <ActionBar left={
        <UIButton routeName="settings" size="small" theme="ghost">
            <span className="icon-container -angle">
              <IconAngle />
            </span>
          <span>Back</span>
        </UIButton>
      } right={
        <UIButton size="small" theme="ghost" disabled={!hasChanged} onClick={save}>
            <span className="icon-container -check">
              <IconCheck />
            </span>
          <span>Save</span>
        </UIButton>
      } />

      <section>
        <UIInput
          value={username}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}>
          Username
        </UIInput>
      </section>

      <section className="security">
        <PasswordDropdown />

        <UIDropdown left="Security code" right={<span className="text-security-strong">strong</span>}>
          <div>content</div>
        </UIDropdown>
      </section>

      <section>
        <UIButton theme="danger" onClick={logout}>Logout</UIButton>
      </section>
    </div>
  )
}

export default SettingsProfilePage
