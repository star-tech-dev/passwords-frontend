import React from 'react'
import { useTranslation } from 'react-i18next'

import './_index.scss'

function SettingsPage () {
  const { t } = useTranslation()

  return (
    <div className="page -settings flex center">
      <div>
        <div>{t('settings.page_placeholder_text')}</div>
      </div>
    </div>
  )
}

export default SettingsPage
