import { useTranslation } from "react-i18next";

import { createFileRoute } from "@tanstack/react-router";

import Hero from "@/components/common/Hero";
import { PlusIcon } from "@/components/icons";

export const Route = createFileRoute("/verses/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useTranslation(["verses", "navigation"]);

  return (
    <>
      <h1 className="text-xl font-bold">{t("navigation:myVerses")}</h1>

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
