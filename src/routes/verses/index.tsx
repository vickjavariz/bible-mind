import { createFileRoute } from "@tanstack/react-router";

import VersesView from "@/features/verses/views/VersesView";

export const Route = createFileRoute("/verses/")({
  component: VersesView,
});
