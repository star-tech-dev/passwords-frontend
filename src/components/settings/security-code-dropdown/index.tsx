import React, { useEffect, useState } from 'react'
import { useStore } from 'effector-react'
import { useTranslation } from 'react-i18next'
import moment from 'moment'
import { changeSecurityCode } from '../../../store/auth/events'
import { $auth } from '../../../store/auth/store'

import PasswordField from '../../ui/password-field'
import UIButton from '../../ui/button'
import UIDropdown from '../../ui/dropdown'

import './_index.scss'

function SettingsSecurityCodeDropdown () {
  const { t } = useTranslation()
  const [currentCode, setCurrentCode] = useState('')
  const [newCode, setNewCode] = useState('')
  const [repeatCode, setRepeatCode] = useState('')
  const [currentCodeError, setCurrentCodeError] = useState('')
  const [newCodeError, setNewCodeError] = useState('')
  const [repeatCodeError, setRepeatCodeError] = useState('')
  const [codeUpdatedDate, setCodeUpdatedDate] = useState('')

  const user = useStore($auth).user

  const currentCodeField = React.createRef()
  const newCodeField = React.createRef()
  const repeatCodeField = React.createRef()
  const dropdown = React.createRef()

  const updateCodeDate = (date?: Date) => {
    if (!user?.securityCodeUpdated) {
      return
    }
    const lastUpdated = moment(date || user?.securityCodeUpdated).fromNow()
    setCodeUpdatedDate(lastUpdated)
  }

  const close = () => {
    (dropdown.current as any)?.close()
  }

  const save = (e: React.FormEvent) => {
    e.preventDefault()

    if (newCode !== repeatCode) {
      setRepeatCode('')
      setRepeatCodeError('Codes don\'t match');
      (repeatCodeField.current as any)?.focus()
      return
    }

    if (newCode === currentCode) {
      setRepeatCode('')
      setNewCodeError('It\'s your current Code');
      (newCodeField.current as any)?.focus()
      return
    }

    changeSecurityCode({
      currentCode,
      newCode,
      repeatCode
    }).then(() => {
      updateCodeDate(new Date())
      close()
    }).catch((err: any) => {
      if (err.response.data.status === 403) {
        setCurrentCodeError('Wrong current Code');
        (currentCodeField.current as any)?.focus();
        (currentCodeField.current as any)?.select()
      }
    })
  }

  const clear = () => {
    setCurrentCode('')
    setNewCode('')
    setRepeatCode('')
  }

  const onOpen = () => {
    (currentCodeField.current as any)?.focus()
  }

  const onClose = () => {
    clear()
  }

  useEffect(() => {
    updateCodeDate()
  }, [])

  return (
    <div className="component -settings-security-code-dropdown">
      <UIDropdown
        ref={dropdown}
        left={t('global.security_code')}
        right={<span className="text-security-strong">updated {codeUpdatedDate}</span>}
        onOpen={onOpen}
        onClose={onClose}>
        <form onSubmit={save}>
          <div className="row">
            <PasswordField
              ref={currentCodeField}
              value={currentCode}
              type="password"
              placeholder={t('settings.profile.security_code.current')}
              error={currentCodeError}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => setCurrentCode(e.target.value)} />
          </div>
          <div className="row">
            <PasswordField
              ref={newCodeField}
              value={newCode}
              error={newCodeError}
              placeholder={t('settings.profile.security_code.new')}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => setNewCode(e.target.value)} />
          </div>
          <div className="row">
            <PasswordField
              ref={repeatCodeField}
              value={repeatCode}
              type="Code"
              placeholder={t('settings.profile.security_code.confirm')}
              error={repeatCodeError}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => setRepeatCode(e.target.value)} />
          </div>
          <div className="form-buttons buttons">
            <UIButton size="small" type="submit" disabled={!currentCode || !newCode || !repeatCode}>
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

export default SettingsSecurityCodeDropdown
