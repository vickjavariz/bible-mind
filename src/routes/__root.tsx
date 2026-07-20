import { Outlet, createRootRoute, useLocation } from "@tanstack/react-router";

import Dock from "@/components/navigation/Dock";
import Sidebar from "@/components/navigation/Sidebar";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const pathname = useLocation({ select: (location) => location.pathname });
  const displayDock = !pathname.includes("/verses/new");

  return (
    <Sidebar>
      <div className="flex flex-col min-h-dvh">
        <main className="flex-1 flex flex-col w-full mx-auto p-6">
          <Outlet />
        </main>

        {displayDock && <Dock />}
      </div>
    </Sidebar>
  );
}
