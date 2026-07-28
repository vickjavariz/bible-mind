import type { ComponentType, SVGProps } from "react";

import { BookOpenIcon, CogIcon, PlusIcon } from "@/components/icons";

export interface NavigationItem {
  to: string;
  labelKey: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  placement: ("dock" | "sidebar")[];
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    to: "/verses",
    labelKey: "navigation:myVerses",
    icon: BookOpenIcon,
    placement: ["dock", "sidebar"],
  },
  {
    to: "/verses/new",
    labelKey: "navigation:addVerse",
    icon: PlusIcon,
    placement: ["dock"],
  },
  {
    to: "/settings",
    labelKey: "navigation:settings",
    icon: CogIcon,
    placement: ["dock", "sidebar"],
  },
];
