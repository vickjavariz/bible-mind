import { createFileRoute } from "@tanstack/react-router";

import SettingsLayout from "@/features/settings/layouts/SettingsLayout";

export const Route = createFileRoute("/settings")({
  component: SettingsLayout,
});
