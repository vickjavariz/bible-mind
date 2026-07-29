import { createFileRoute } from "@tanstack/react-router";

import SettingsView from "@/features/settings/views/SettingsView";

export const Route = createFileRoute("/settings/")({
  component: SettingsView,
});
