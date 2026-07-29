import { createRootRoute } from "@tanstack/react-router";

import RootLayout from "@/features/core/layouts/RootLayout";

export const Route = createRootRoute({
  component: RootLayout,
});
