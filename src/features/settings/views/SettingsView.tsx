import { useTranslation } from "react-i18next";

import EmptyState from "@/components/layout/EmptyState";
import PageContent from "@/components/layout/PageContent";

export default function SettingsView() {
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
