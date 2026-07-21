import { useTranslation } from "react-i18next";

import { createFileRoute } from "@tanstack/react-router";

import PageHeader from "@/components/ui/PageHeader";

export const Route = createFileRoute("/settings/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useTranslation("navigation");

  return (
    <>
      <PageHeader>
        <PageHeader.Title>{t("settings")}</PageHeader.Title>
      </PageHeader>
    </>
  );
}
