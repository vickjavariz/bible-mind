import { Link } from "@tanstack/react-router";

import type { NavigationItem } from "@/config/navigation";

interface SidebarItemProps {
  item: NavigationItem;
}

export default function SidebarItem({ item }: SidebarItemProps) {
  const { to, label, icon: Icon } = item;

  return (
    <li>
      <Link
        to={to}
        className="py-3 px-4 transition duration-200 active:scale-98 hover:bg-neutral"
        activeProps={{
          className:
            "menu-active rounded-lg font-bold active:scale-100 cursor-default",
        }}
        activeOptions={{ exact: true }}
      >
        <Icon className="text-xl" />
        <span className="hidden lg:block lg:pl-1">{label}</span>
      </Link>
    </li>
  );
}
