import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './translations/en/translation.json'
import ru from './translations/ru/translation.json'

i18next
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem('lang') || 'en',
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: { translation: en },
      ru: { translation: ru },
    },
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
    returnNull: false,
  })


i18next.on('languageChanged', (lng) => {
  localStorage.setItem('lang', lng)
})

export { i18next as i18n }
