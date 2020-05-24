import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import XHR from 'i18next-xhr-backend'
import languageEN from './locales/en/translate.json'
import languageFR from './locales/fr/translate.json'

// lib
import browserLanguage from './lib/language'

const language = browserLanguage().split('-')[0]

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: languageEN,
      fr: languageFR,
    },
    /* default language when load the website in browser */
    lng: language,
    /* When react i18next not finding any language to as default in borwser */
    fallbackLng: 'en',
    /* debugger For Development environment */
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    react: {
      wait: true,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      // nsMode: "default",
    },
  })

export default i18n
