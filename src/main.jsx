import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider, createRouter } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { routeTree } from "@/routeTree.gen";

import "./i18n/i18n";
import "./index.css";

const router = createRouter({ routeTree });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <TanStackRouterDevtools
      router={router}
      toggleButtonProps={{ class: "!hidden md:!flex" }}
    />
  </StrictMode>,
);
