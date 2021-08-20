import React from 'react'
import { useTranslation } from 'react-i18next'
import UIButton from '../../components/ui/button'
import IconAngle from '../../components/icons/angle'
import ActionBar from '../../components/settings/action-bar/action-bar'

function SettingsAboutPage () {
  const { t } = useTranslation()

  return (
    <div className="page -settings-about">
      <ActionBar left={
        <UIButton routeName="settings" size="small" theme="ghost">
            <span className="icon-container -angle">
              <IconAngle />
            </span>
          <span>{t('global.actions.back')}</span>
        </UIButton>
      } right={null} />

      <section>
        <span>{t('settings.about.see_more')}</span>
        <span>&nbsp;</span>
        <a href="https://github.com/star-tech-dev/passwords-frontend" target="_blank" rel="noreferrer">
          {t('settings.about.github_repo')}
        </a>.
      </section>
    </div>
  )
}

export default SettingsAboutPage
