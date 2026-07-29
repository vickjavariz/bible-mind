import { Outlet, useLocation } from "@tanstack/react-router";

import Dock from "../components/Dock";
import Sidebar from "../components/Sidebar";

export default function RootComponent() {
  const pathname = useLocation({ select: (location) => location.pathname });
  const displayDock = pathname !== "/verses/new";

  return (
    <Sidebar>
      <main className="flex flex-col min-h-dvh">
        <Outlet />
      </main>
      {displayDock && <Dock />}
    </Sidebar>
  );
}
