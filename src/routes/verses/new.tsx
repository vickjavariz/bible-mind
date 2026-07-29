import { createFileRoute } from "@tanstack/react-router";

import AddVerseView from "@/features/verses/views/AddVerseView";

export const Route = createFileRoute("/verses/new")({
  component: AddVerseView,
});
