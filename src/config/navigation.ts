import type { ElementType } from "react";

import { BookOpenIcon, PlusIcon } from "@/components/icons";
import i18n from "@/i18n/i18n";

export interface NavigationItem {
  to: string;
  label: string;
  icon: ElementType;
  placement: ("dock" | "sidebar")[];
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    to: "/verses",
    label: i18n.t("navigation:myVerses"),
    icon: BookOpenIcon,
    placement: ["dock", "sidebar"],
  },
  {
    to: "/verses/new",
    label: i18n.t("navigation:addVerse"),
    icon: PlusIcon,
    placement: ["dock"],
  },
];
