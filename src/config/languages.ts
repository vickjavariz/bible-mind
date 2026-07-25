export type SupportedLanguage = "en" | "es";

export interface LanguageConfig {
  nativeName: string;
}

export const DEFAULT_LANGUAGE: SupportedLanguage = "en";

export const LANGUAGES: Record<SupportedLanguage, LanguageConfig> = {
  en: { nativeName: "English" },
  es: { nativeName: "Español" },
};
