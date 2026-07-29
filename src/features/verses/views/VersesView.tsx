import { useTranslation } from "react-i18next";

import { PlusIcon } from "@/components/icons";
import EmptyState from "@/components/layout/EmptyState";
import PageContent from "@/components/layout/PageContent";
import PageHeader from "@/components/layout/PageHeader";

export default function VersesView() {
  const { t } = useTranslation(["verses", "navigation"]);

  return (
    <>
      <PageHeader>
        <PageHeader.Title>{t("navigation:myVerses")}</PageHeader.Title>
      </PageHeader>

      <PageContent>
        <EmptyState>
          <EmptyState.Title className="text-neutral">
            {t("emptyState.title")}
          </EmptyState.Title>
          <EmptyState.Text>{t("emptyState.description")}</EmptyState.Text>
          <EmptyState.Link to="/verses/new">
            <PlusIcon />
            {t("emptyState.action")}
          </EmptyState.Link>
        </EmptyState>
      </PageContent>
    </>
  );
}
