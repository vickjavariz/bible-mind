import { initReactI18next } from "react-i18next";

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { DEFAULT_LANGUAGE } from "@/config/languages";

import en from "./locales/en";
import es from "./locales/es";

export const resources = {
  en,
  es,
} as const;

const i18nInstance = i18n.use(LanguageDetector).use(initReactI18next);

i18nInstance.init({
  resources,
  debug: true,
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: {
    escapeValue: false,
  },
});

export default i18nInstance;
