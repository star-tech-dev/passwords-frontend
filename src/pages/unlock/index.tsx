import React, { useEffect, useState } from 'react'
import { useStore } from 'effector-react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'react-router5'
import { nextTick } from '../../helpers/next-tick'
import { unlock } from '../../store/locker/events'
import { logout as _logout } from '../../store/auth/events'
import { $auth } from '../../store/auth/store'

import UIInput from '../../components/ui/input'
import UIButton from '../../components/ui/button'

import './_index.scss'

function UnlockPage () {
  const { t } = useTranslation()
  const [_loading, _setLoading] = useState(false)
  const [code, setCode] = useState('')
  const [codeFieldError, setCodeFieldError] = useState('')
  const user = useStore($auth).user
  const router = useRouter()
  const codeField = React.createRef()

  const logout = async (e: React.FormEvent) => {
    e.preventDefault()
    await _logout()
    router.navigate('auth')
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!code.length) {
      setCodeFieldError(t('errors.required'))
      nextTick(() => {
        (codeField.current as any)?.focus()
      })
      return
    }

    _setLoading(true)
    await unlock(code).catch(e => {
      setCodeFieldError('')
      const errorText = e.response.data.message || 'server'
      setCodeFieldError(t(`errors.${errorText}`))
      nextTick(() => {
        (codeField.current as any)?.focus();
        (codeField.current as any)?.select()
      })
    })

    _setLoading(false)
  }

  useEffect(() => {
    nextTick(() => {
      (codeField.current as any)?.focus()
    })
    return () => {}
  }, [])

  return (
    <div className="page -unlock">
      <h1>{t('locker.heading')}</h1>

      <div className="flex column center">
        <div>{t('locker.description')}</div>

        <form className="flex column" onSubmit={onSubmit}>
          <div>
            <UIInput
              ref={codeField}
              type="password"
              error={codeFieldError}
              placeholder={t('locker.field_placeholder')}
              value={code}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => setCode(e.target.value)} />
          </div>
          <div>
            <UIButton type="submit" loading={_loading} fullWidth={true}>
              {t('global.actions.unlock')}
            </UIButton>
          </div>
        </form>

        <div className="bottom flex a-center">
          <div>
            <span>{t('locker.signed_as')}</span>
            <span>&nbsp;</span>
          </div>
          <div className="name">{user?.username}</div>
          <div>.&nbsp;</div>
          <a href="#" onClick={logout}>{t('global.actions.logout')}</a>
          <div>.</div>
        </div>
      </div>
    </div>
  )
}

export default UnlockPage
