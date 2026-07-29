import type { ComponentType, SVGProps } from "react";

import { TranslateIcon } from "@/components/icons";

export interface SettingItem {
  to: string;
  labelKey: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export const SETTING_ITEMS: SettingItem[] = [
  {
    to: "/settings/language",
    labelKey: "settings:language.title",
    icon: TranslateIcon,
  },
];
