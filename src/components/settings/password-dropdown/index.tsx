import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { changePassword } from '../../../store/auth/events'
import { $auth } from '../../../store/auth/store'

import PasswordField from '../../ui/password-field'
import UIButton from '../../ui/button'
import UIDropdown from '../../ui/dropdown'

import './_index.scss'
import { useStore } from 'effector-react'

function SettingsPasswordDropdown () {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [currentPasswordError, setCurrentPasswordError] = useState('')
  const [repeatPasswordError, setRepeatPasswordError] = useState('')
  const [passwordUpdatedDate, setPasswordUpdatedDate] = useState('')

  const user = useStore($auth).user

  const currentPasswordField = React.createRef()
  const repeatPasswordField = React.createRef()
  const dropdown = React.createRef()

  const close = () => {
    (dropdown.current as any)?.close()
  }

  const save = (e: React.FormEvent) => {
    e.preventDefault()

    if (newPassword !== repeatPassword) {
      setRepeatPassword('')
      setRepeatPasswordError('Passwords don\'t match');
      (repeatPasswordField.current as any)?.focus()
      return
    }

    changePassword({
      currentPassword,
      newPassword,
      repeatPassword
    }).then(() => {
      close()
    }).catch((err: any) => {
      if (err.response.data.status === 403) {
        setCurrentPasswordError('Wrong current password');
        (currentPasswordField.current as any)?.focus();
        (currentPasswordField.current as any)?.select()
      }
    })
  }

  const clear = () => {
    setCurrentPassword('')
    setNewPassword('')
    setRepeatPassword('')
  }

  const onOpen = () => {
    (currentPasswordField.current as any)?.focus()
  }

  const onClose = () => {
    clear()
  }

  useEffect(() => {
    console.log(user)
  }, [])

  return (
    <div className="component -settings-password-dropdown">
      <UIDropdown
        ref={dropdown}
        left="Account password"
        right={<span className="text-security-strong">updated {passwordUpdatedDate}</span>}
        onOpen={onOpen}
        onClose={onClose}>
        <form onSubmit={save}>
          <div className="row">
            <PasswordField
              ref={currentPasswordField}
              value={currentPassword}
              type="password"
              placeholder="Current password"
              error={currentPasswordError}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => setCurrentPassword(e.target.value)} />
          </div>
          <div className="row">
            <PasswordField
              value={newPassword}
              placeholder="New password"
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value)} />
          </div>
          <div className="row">
            <PasswordField
              ref={repeatPasswordField}
              value={repeatPassword}
              type="password"
              placeholder="Confirm new password"
              error={repeatPasswordError}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => setRepeatPassword(e.target.value)} />
          </div>
          <div className="form-buttons buttons">
            <UIButton size="small" type="submit" disabled={!currentPassword || !newPassword || !repeatPassword}>Change</UIButton>
            <UIButton size="small" theme="ghost" onClick={close}>Cancel</UIButton>
          </div>
        </form>
      </UIDropdown>
    </div>
  )
}

export default SettingsPasswordDropdown
