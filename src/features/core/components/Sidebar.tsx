import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";

import { Link } from "@tanstack/react-router";

import { BibleIcon } from "@/components/icons";

import { NAVIGATION_ITEMS } from "../config/navigation";

interface SidebarProps {
  children: ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
  const { t } = useTranslation();

  const sidebarItems = NAVIGATION_ITEMS.filter((item) =>
    item.placement.includes("sidebar"),
  );

  return (
    <div className="drawer md:drawer-open">
      <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">{children}</div>

      <aside className="drawer-side flex flex-col items-start min-h-dvh bg-base-200 border-r-base-content/10 border-r">
        <div className="hidden lg:flex lg:items-center w-full p-6 border-b-base-content/10 border-b">
          <div className="p-2 bg-blue-500 text-white rounded-xl text-3xl">
            <BibleIcon />
          </div>
          <div className="flex flex-col pl-3">
            <p className="text-xl font-bold">BibleMind</p>
            <p className="text-sm text-neutral-500">
              {t("navigation:logo.subtitle")}
            </p>
          </div>
        </div>

        <nav>
          <ul className="menu w-full grow md:p-0 md:pt-4 lg:p-4 lg:w-72">
            {sidebarItems.map(({ to, labelKey, icon: Icon }) => (
              <li className="mb-1" key={to}>
                <Link
                  to={to}
                  className="py-3 px-4 transition duration-200 active:scale-98"
                  activeProps={{
                    className:
                      "menu-active rounded-lg font-bold active:scale-100 cursor-default",
                  }}
                >
                  <Icon className="text-xl" />
                  <span className="hidden lg:block lg:pl-1">{t(labelKey)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
