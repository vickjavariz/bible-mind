import { useTranslation } from "react-i18next";

import { Link } from "@tanstack/react-router";

import { SETTING_ITEMS } from "../config/navigation";

interface SettingsSidebarProps {
  isHiddenOnMobile: boolean;
}

export default function SettingsSidebar({
  isHiddenOnMobile,
}: SettingsSidebarProps) {
  const { t } = useTranslation();

  return (
    <nav
      className={`${isHiddenOnMobile ? "hidden" : "flex"} md:flex flex-1 p-4 pt-5 md:p-2 lg:pt-3 md:max-w-56 md:border-r md:border-base-content/10`}
    >
      <ul className="menu rounded-xl flex-1 h-fit py-2 md:px-0 bg-base-300 md:bg-base-100 shadow-sm md:shadow-none">
        {SETTING_ITEMS.map(({ to, labelKey, icon: Icon }) => (
          <li key={to}>
            <Link
              to={to}
              className="transition duration-200 active:scale-98 md:py-3"
              activeProps={{
                className:
                  "menu-active rounded-lg font-bold active:scale-100 cursor-default",
              }}
            >
              <Icon className="text-xl" />
              <span className="pl-1">{t(labelKey)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
