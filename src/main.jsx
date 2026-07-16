import { createRouter, RouterProvider } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { routeTree } from './routeTree.gen';

const router = createRouter({ routeTree });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <TanStackRouterDevtools router={router} toggleButtonProps={{ class: '!hidden md:!flex' }} />
  </StrictMode>,
);
