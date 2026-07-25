import { useTranslation } from "react-i18next";

import { createFileRoute } from "@tanstack/react-router";

import PageContent from "@/components/ui/PageContent";
import PageHeader from "@/components/ui/PageHeader";
import {
  DEFAULT_LANGUAGE,
  LANGUAGES,
  type SupportedLanguage,
} from "@/config/languages";

export const Route = createFileRoute("/settings/language")({
  component: RouteComponent,
});

function RouteComponent() {
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
          <h2 className="font-bold">{t("language.selectedLanguage")}</h2>
          <p className="rounded-xl bg-base-300 h-fit w-full mt-3 p-4 font-bold shadow-sm">
            {selectedLanguage}
          </p>
        </section>

        <section>
          <h2 className="font-bold pt-4">{t("language.languages")}</h2>
          <ul className="menu rounded-xl bg-base-300 h-fit w-full py-2 mt-3 shadow-sm">
            {Object.entries(LANGUAGES).map(([code, config]) => (
              <li key={code}>
                <button
                  className="py-2"
                  type="button"
                  onClick={() => {
                    if (code !== languageKey) i18n.changeLanguage(code);
                  }}
                >
                  {config.nativeName}
                </button>
              </li>
            ))}
          </ul>
        </section>
      </PageContent>
    </>
  );
}
