import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: process.env.NODE_ENV !== 'production',
    supportedLngs: ['en', 'ru'],

    resources: {
      en: {
        translation: require('./locales/en.json')
      },
      ru: {
        translation: require('./locales/ru.json')
      }
    },

    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  })

export default i18n
