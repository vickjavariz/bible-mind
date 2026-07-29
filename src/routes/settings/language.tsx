import { createFileRoute } from "@tanstack/react-router";

import LanguageView from "@/features/settings/views/LanguageView";

export const Route = createFileRoute("/settings/language")({
  component: LanguageView,
});
