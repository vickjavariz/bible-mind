import { BookOpenIcon, PlusIcon } from "@/components/icons";
import i18n from "@/i18n/i18n";

export const NAVIGATION_ITEMS = [
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
