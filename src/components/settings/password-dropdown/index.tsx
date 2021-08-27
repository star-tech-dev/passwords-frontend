import React, { useEffect, useState } from 'react'
import { useStore } from 'effector-react'
import { useTranslation } from 'react-i18next'
import { changePassword } from '../../../store/auth/events'
import { $auth } from '../../../store/auth/store'
import { $app } from '../../../store/app/store'

import PasswordField from '../../ui/password-field'
import UIButton from '../../ui/button'
import UIDropdown from '../../ui/dropdown'

import './_index.scss'

function SettingsPasswordDropdown () {
  const { t } = useTranslation()
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [currentPasswordError, setCurrentPasswordError] = useState('')
  const [newPasswordError, setNewPasswordError] = useState('')
  const [repeatPasswordError, setRepeatPasswordError] = useState('')
  const [passwordUpdatedDate, setPasswordUpdatedDate] = useState('')

  const user = useStore($auth).user
  const moment = useStore($app).moment

  const currentPasswordField = React.createRef()
  const newPasswordField = React.createRef()
  const repeatPasswordField = React.createRef()
  const dropdown = React.createRef()

  const updatePasswordDate = (date?: Date) => {
    if (!user?.passwordUpdated) {
      return
    }
    const lastUpdated = moment(date || user?.passwordUpdated).fromNow()
    setPasswordUpdatedDate(lastUpdated)
  }

  const close = () => {
    (dropdown.current as any)?.close()
  }

  const save = (e: React.FormEvent) => {
    e.preventDefault()

    if (newPassword !== repeatPassword) {
      setRepeatPassword('')
      setRepeatPasswordError(t('errors.passwords_do_not_match'));
      (repeatPasswordField.current as any)?.focus()
      return
    }

    changePassword({
      currentPassword,
      newPassword,
      repeatPassword
    }).then(() => {
      updatePasswordDate(new Date())
      close()
    }).catch((err: any) => {
      const errorText = err.response.data.message || 'server'
      if (errorText === 'the_same_password') {
        setNewPasswordError(t(`errors.${errorText}`))
        setRepeatPassword('');
        (newPasswordField.current as any)?.focus();
        (newPasswordField.current as any)?.select()
      } else {
        setCurrentPasswordError(t(`errors.${errorText}`));
        (currentPasswordField.current as any)?.focus();
        (currentPasswordField.current as any)?.select()
      }
    })
  }

  const clear = () => {
    setCurrentPassword('')
    setNewPassword('')
    setRepeatPassword('')

    setCurrentPasswordError('')
    setNewPasswordError('')
    setRepeatPasswordError('')
  }

  const onOpen = () => {
    (currentPasswordField.current as any)?.focus()
  }

  const onClose = () => {
    clear()
  }

  useEffect(() => {
    updatePasswordDate()
  }, [])

  return (
    <div className="component -settings-password-dropdown">
      <UIDropdown
        ref={dropdown}
        left={t('global.account_password')}
        right={<span className="text-security-strong">{t('global.updated')} {passwordUpdatedDate}</span>}
        onOpen={onOpen}
        onClose={onClose}>
        <form onSubmit={save}>
          <div className="row">
            <PasswordField
              ref={currentPasswordField}
              value={currentPassword}
              type="password"
              placeholder={t('settings.profile.password.current')}
              error={currentPasswordError}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => setCurrentPassword(e.target.value)} />
          </div>
          <div className="row">
            <PasswordField
              ref={newPasswordField}
              value={newPassword}
              error={newPasswordError}
              placeholder={t('settings.profile.password.new')}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value)} />
          </div>
          <div className="row">
            <PasswordField
              ref={repeatPasswordField}
              value={repeatPassword}
              type="password"
              placeholder={t('settings.profile.password.confirm')}
              error={repeatPasswordError}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => setRepeatPassword(e.target.value)} />
          </div>

          <div className="form-buttons buttons">
            <UIButton size="small" type="submit" disabled={!currentPassword || !newPassword || !repeatPassword}>
              {t('global.actions.change')}
            </UIButton>
            <UIButton size="small" theme="ghost" onClick={close}>
              {t('global.actions.cancel')}
            </UIButton>
          </div>
        </form>
      </UIDropdown>
    </div>
  )
}

export default SettingsPasswordDropdown
