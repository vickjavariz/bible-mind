import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";

import SidebarItem from "@/components/navigation/SidebarItem";
import { NAVIGATION_ITEMS } from "@/config/navigation";

import { BibleIcon } from "../icons";

interface SidebarProps {
  children: ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
  const { t } = useTranslation("navigation");

  const sidebarItems = NAVIGATION_ITEMS.filter((item) =>
    item.placement.includes("sidebar"),
  );

  return (
    <div className="drawer md:drawer-open">
      <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">{children}</div>

      <nav className="drawer-side bg-base-200 border-r-base-300 border-r-2">
        <div className="flex flex-col items-start min-h-dvh">
          <div className="hidden lg:flex lg:items-center w-full p-6 border-b-base-300 border-b-2">
            <div className="p-2 bg-blue-500 text-white rounded-xl text-3xl">
              <BibleIcon />
            </div>
            <div className="flex flex-col pl-3">
              <p className="text-xl font-bold">BibleMind</p>
              <p className="text-sm text-neutral-500">{t("logo.subtitle")}</p>
            </div>
          </div>

          <ul className="menu w-full grow md:p-0 md:pt-4 lg:p-4 lg:w-72">
            {sidebarItems.map((item) => (
              <SidebarItem key={item.to} item={item} />
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
