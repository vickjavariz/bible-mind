import { useTranslation } from "react-i18next";

import PageHeader from "@/components/layout/PageHeader";

export default function AddVerseView() {
  const { t } = useTranslation(["verses", "navigation"]);

  return (
    <>
      <PageHeader>
        <PageHeader.BackButton />
        <PageHeader.Title>{t("navigation:addVerse")}</PageHeader.Title>
      </PageHeader>
    </>
  );
}
