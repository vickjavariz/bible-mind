import { Outlet, createRootRoute, useLocation } from "@tanstack/react-router";

import Dock from "./-root/Dock";
import Sidebar from "./-root/Sidebar";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
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
