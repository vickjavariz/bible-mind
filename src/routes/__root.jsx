import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <header className='w-full max-w-4xl mx-auto p-4'>
          <h1 className='text-3xl'>Bible Mind</h1>
        </header>

        <main className='flex-1 flex flex-col w-full max-w-4xl mx-auto p-4'>
          <Outlet />
        </main>
      </div>

      <TanStackRouterDevtools />
    </>
  );
}
