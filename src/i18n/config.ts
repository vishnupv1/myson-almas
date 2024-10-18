import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false
  },
  resources: {
    en: {
      translation: {
        hello_world: 'Hello, World!'
      }
    },
    hindi: {
      translation: {
        hello_world: 'مرحباً بالعالم!'
      }
    }
  }
});

export default i18n;
