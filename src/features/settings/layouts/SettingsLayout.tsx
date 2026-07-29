import { useTranslation } from "react-i18next";

import { Outlet, useLocation } from "@tanstack/react-router";

import PageHeader from "@/components/layout/PageHeader";

import SettingsSidebar from "../components/SettingsSidebar";

export default function SettingsLayout() {
  const { t } = useTranslation(["settings", "navigation"]);
  const pathname = useLocation({ select: (location) => location.pathname });
  const atRootSettingsRoute = pathname === "/settings";

  return (
    <>
      <PageHeader
        className={`${atRootSettingsRoute ? "flex" : "hidden"} md:flex md:border-b md:border-base-content/10`}
      >
        <PageHeader.Title>{t("navigation:settings")}</PageHeader.Title>
      </PageHeader>

      <div className={`flex flex-1`}>
        <SettingsSidebar isHiddenOnMobile={!atRootSettingsRoute} />

        <div
          className={`${atRootSettingsRoute ? "hidden" : "flex"} md:flex flex-1 flex-col`}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
}
