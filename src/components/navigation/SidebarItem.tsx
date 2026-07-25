import { useTranslation } from "react-i18next";

import { Link } from "@tanstack/react-router";

import type { NavigationItem } from "@/config/navigation";

interface SidebarItemProps {
  item: NavigationItem;
}

export default function SidebarItem({ item }: SidebarItemProps) {
  const { to, labelKey, icon: Icon } = item;
  const { t } = useTranslation();

  return (
    <li className="mb-1">
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
  );
}
