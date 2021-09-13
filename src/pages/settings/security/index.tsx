import React from 'react'
import { useTranslation } from 'react-i18next'

import './_index.scss'

import UIButton from '../../../components/ui/button'
import IconAngle from '../../../components/icons/angle'
import ActionBar from '../../../components/settings/action-bar/action-bar'
import PasswordDropdown from '../../../components/settings/password-dropdown'
import SecurityCodeDropdown from '../../../components/settings/security-code-dropdown'

function SettingsSecurityPage () {
  const { t } = useTranslation()

  return (
    <div className="page -settings-security">
      <ActionBar left={
        <UIButton routeName="settings" size="small" theme="ghost">
            <span className="icon-container -angle">
              <IconAngle />
            </span>
          <span>{t('global.actions.back')}</span>
        </UIButton>
      } right={null} />

      <section className="security">
        <PasswordDropdown />
        <SecurityCodeDropdown />
      </section>
    </div>
  )
}

export default SettingsSecurityPage
