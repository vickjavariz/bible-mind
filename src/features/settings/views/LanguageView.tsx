import { useTranslation } from "react-i18next";

import { CheckIcon } from "@/components/icons";
import PageContent from "@/components/layout/PageContent";
import PageHeader from "@/components/layout/PageHeader";
import {
  DEFAULT_LANGUAGE,
  LANGUAGES,
  type SupportedLanguage,
} from "@/i18n/languages";

export default function LanguageView() {
  const { t, i18n } = useTranslation("settings");

  const languageKey = (i18n.resolvedLanguage ||
    DEFAULT_LANGUAGE) as SupportedLanguage;
  const selectedLanguage = LANGUAGES[languageKey].nativeName;

  return (
    <>
      <PageHeader className="md:hidden">
        <PageHeader.BackButton />
        <PageHeader.Title>{t("language.title")}</PageHeader.Title>
      </PageHeader>

      <PageContent className="md:pt-6">
        <section>
          <h2 className="font-bold text-sm text-base-content/60">
            {t("language.selectedLanguage").toUpperCase()}
          </h2>
          <p className="rounded-xl bg-base-300 h-fit w-full mt-3 p-4 font-bold shadow-sm">
            {selectedLanguage}
          </p>
        </section>

        <section>
          <h2 className="font-bold text-sm text-base-content/60 pt-6">
            {t("language.languages").toUpperCase()}
          </h2>
          <ul className="menu rounded-xl bg-base-300 h-fit w-full py-2 mt-3 shadow-sm">
            {Object.entries(LANGUAGES).map(([code, config]) => (
              <li key={code}>
                <button
                  className="py-2 flex items-end"
                  type="button"
                  onClick={() => {
                    if (code !== languageKey) i18n.changeLanguage(code);
                  }}
                >
                  {config.nativeName}
                  <CheckIcon
                    className={`text-primary text-2xl ml-1 ${languageKey !== code ? "invisible" : ""}`}
                  />
                </button>
              </li>
            ))}
          </ul>
        </section>
      </PageContent>
    </>
  );
}
