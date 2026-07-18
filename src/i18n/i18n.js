import { initReactI18next } from "react-i18next";

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en";
import es from "./locales/es";

const i18nInstance = i18n.use(LanguageDetector).use(initReactI18next);

i18nInstance.init({
  resources: {
    en,
    es,
  },
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18nInstance;
