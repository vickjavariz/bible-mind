import { useTranslation } from "react-i18next";

import {
  Link,
  Outlet,
  createFileRoute,
  useLocation,
} from "@tanstack/react-router";

import { TranslateIcon } from "@/components/icons";
import PageHeader from "@/components/ui/PageHeader";

export const Route = createFileRoute("/settings")({
  component: RouteComponent,
});

function RouteComponent() {
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
        <nav
          className={`${atRootSettingsRoute ? "flex" : "hidden"} md:flex flex-1 p-4 pt-5 md:p-2 md:max-w-64 md:border-r md:border-base-content/10`}
        >
          <ul className="menu rounded-xl flex-1 h-fit py-2 bg-base-300 md:bg-base-100 shadow-sm md:shadow-none">
            <li>
              <Link
                to="/settings/language"
                className="transition duration-200 active:scale-98 md:py-3"
                activeProps={{
                  className:
                    "menu-active rounded-lg font-bold active:scale-100 cursor-default",
                }}
              >
                <TranslateIcon className="text-xl" />
                <span className="pl-1">{t("settings:language.title")}</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div
          className={`${atRootSettingsRoute ? "hidden" : "flex"} md:flex flex-1 flex-col`}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
}
