import { useTranslation } from "react-i18next";

import { createFileRoute } from "@tanstack/react-router";

import Hero from "@/components/ui/Hero";
import PageContent from "@/components/ui/PageContent";

export const Route = createFileRoute("/settings/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useTranslation("settings");

  return (
    <PageContent className="hidden md:flex">
      <Hero>
        <Hero.Title className="text-neutral">{t("emptyState")}</Hero.Title>
      </Hero>
    </PageContent>
  );
}
