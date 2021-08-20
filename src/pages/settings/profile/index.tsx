import React, { useEffect, useState } from 'react'
import { useRouter } from 'react-router5'
import { useTranslation } from 'react-i18next'
import { $auth } from '../../../store/auth/store'
import { logout as sendLogoutRequest, updateProfile } from '../../../store/auth/events'

import { useStore } from 'effector-react'

import ActionBar from '../../../components/settings/action-bar/action-bar'
import UIInput from '../../../components/ui/input'
import UIButton from '../../../components/ui/button'
import IconCheck from '../../../components/icons/check'
import IconAngle from '../../../components/icons/angle'
import PasswordDropdown from '../../../components/settings/password-dropdown'
import SecurityCodeDropdown from '../../../components/settings/security-code-dropdown'

import './_index.scss'

function SettingsProfilePage () {
  const { t } = useTranslation()
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
          <span>{t('global.actions.back')}</span>
        </UIButton>
      } right={
        <UIButton size="small" theme="ghost" disabled={!hasChanged} onClick={save}>
            <span className="icon-container -check">
              <IconCheck />
            </span>
          <span>{t('global.actions.save')}</span>
        </UIButton>
      } />

      <section>
        <UIInput
          value={username}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}>
          {t('settings.profile.username')}
        </UIInput>
      </section>

      <section className="security">
        <PasswordDropdown />
        <SecurityCodeDropdown />
      </section>

      <section>
        <UIButton theme="danger" onClick={logout}>{t('global.actions.logout')}</UIButton>
      </section>
    </div>
  )
}

export default SettingsProfilePage
