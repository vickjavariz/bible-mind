import { useTranslation } from "react-i18next";

import { createFileRoute } from "@tanstack/react-router";

import EmptyState from "@/components/ui/EmptyState";
import PageContent from "@/components/ui/PageContent";

export const Route = createFileRoute("/settings/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useTranslation("settings");

  return (
    <PageContent className="hidden md:flex">
      <EmptyState>
        <EmptyState.Title className="text-neutral">
          {t("emptyState")}
        </EmptyState.Title>
      </EmptyState>
    </PageContent>
  );
}
