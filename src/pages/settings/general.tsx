import React from 'react'
import { useTranslation } from 'react-i18next'

import UIButton from '../../components/ui/button'
import IconAngle from '../../components/icons/angle'
import ActionBar from '../../components/settings/action-bar/action-bar'
import LanguageSelect from '../../components/settings/language-select'

function SettingsGeneralPage () {
  const { t } = useTranslation()

  return (
    <div className="page -settings-general">
      <ActionBar left={
        <UIButton routeName="settings" size="small" theme="ghost">
            <span className="icon-container -angle">
              <IconAngle />
            </span>
          <span>{t('global.actions.back')}</span>
        </UIButton>
      } right={null} />

      <section>
        <div>{t('settings.general.color_theme.title')}</div>
        <select defaultValue="dark" disabled={true}>
          <option value="dark">{t('settings.general.color_theme.value_dark')}</option>
        </select>
      </section>

      <section>
        <div>{t('settings.general.language.title')}</div>
        <LanguageSelect />
      </section>
    </div>
  )
}

export default SettingsGeneralPage
