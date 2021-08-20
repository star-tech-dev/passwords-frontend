import React from 'react'
import { useTranslation } from 'react-i18next'

import './_index.scss'

function HomePage () {
  const { t } = useTranslation()

  return (
    <div className="page -home flex column center">
      <div>
        <div dangerouslySetInnerHTML={{ __html: t('item.index_page_placeholder') }}></div>
      </div>
    </div>
  )
}

export default HomePage
