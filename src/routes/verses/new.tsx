import { useTranslation } from "react-i18next";

import { createFileRoute } from "@tanstack/react-router";

import PageHeader from "@/components/ui/PageHeader";

export const Route = createFileRoute("/verses/new")({
  component: RouteComponent,
});

function RouteComponent() {
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
