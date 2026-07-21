import { useTranslation } from "react-i18next";

import { createFileRoute } from "@tanstack/react-router";

import Hero from "@/components/common/Hero";
import { PlusIcon } from "@/components/icons";
import PageHeader from "@/components/ui/PageHeader";

export const Route = createFileRoute("/verses/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useTranslation(["verses", "navigation"]);

  return (
    <>
      <PageHeader>
        <PageHeader.Title>{t("navigation:myVerses")}</PageHeader.Title>
      </PageHeader>

      <Hero>
        <Hero.Title className="text-neutral">
          {t("emptyState.title")}
        </Hero.Title>
        <Hero.Text>{t("emptyState.description")}</Hero.Text>
        <Hero.Link to="/verses/new">
          <PlusIcon />
          {t("emptyState.action")}
        </Hero.Link>
      </Hero>
    </>
  );
}
