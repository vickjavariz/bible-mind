import { useTranslation } from "react-i18next";

import { createFileRoute } from "@tanstack/react-router";

import PageHeader from "@/components/ui/PageHeader";

export const Route = createFileRoute("/settings/language")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useTranslation("settings");

  return (
    <>
      <PageHeader className="md:hidden">
        <PageHeader.BackButton />
        <PageHeader.Title>{t("language.title")}</PageHeader.Title>
      </PageHeader>
    </>
  );
}
