import Dock from '@/components/Dock';
import { createRootRoute, Outlet, useLocation } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const pathname = useLocation({ select: location => location.pathname });
  const displayDock = !pathname.includes('/verses/new');

  return (
    <>
      <div className='flex flex-col min-h-dvh'>
        <main className='flex-1 flex flex-col w-full max-w-4xl mx-auto p-4'>
          <Outlet />
        </main>

        {displayDock && <Dock />}
      </div>

      <TanStackRouterDevtools />
    </>
  );
}
