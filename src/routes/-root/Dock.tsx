import { Link } from "@tanstack/react-router";

import { NAVIGATION_ITEMS } from "./navigation";

export default function Dock() {
  const dockItems = NAVIGATION_ITEMS.filter((item) =>
    item.placement.includes("dock"),
  );

  return (
    <nav className="dock dock-xs md:hidden">
      {dockItems.map(({ to, icon: Icon }) => (
        <Link to={to} key={to} activeProps={{ className: "dock-active" }}>
          <Icon className="text-3xl" />
        </Link>
      ))}
    </nav>
  );
}
