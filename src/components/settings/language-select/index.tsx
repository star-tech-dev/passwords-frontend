import React, { ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'

function LanguageSelectComponent () {
  const { t, i18n } = useTranslation()

  const options = () => {
    return i18n.options.supportedLngs && i18n.options.supportedLngs
      .filter(lang => lang !== 'cimode')
      .map((lang, i) => {
        return <option key={i} value={lang}>{t(`settings.general.language.value_${lang}`)}</option>
      })
  }

  const onLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <div className="component -language-select">
      <select value={i18n.language} onChange={onLanguageChange}>
        {options()}
      </select>
    </div>
  )
}

export default LanguageSelectComponent
