import { Link } from "@tanstack/react-router";

import type { NavigationItem } from "@/config/navigation";

interface DockItemProps {
  item: NavigationItem;
}

export default function DockItem({ item }: DockItemProps) {
  const { to, icon: Icon } = item;

  return (
    <Link
      to={to}
      activeProps={{ className: "dock-active" }}
      activeOptions={{ exact: true }}
    >
      <Icon className="text-3xl" />
    </Link>
  );
}
