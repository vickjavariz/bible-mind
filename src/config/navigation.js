import { BookOpenIcon, PlusIcon } from "@/components/icons";

export const NAVIGATION_ITEMS = [
  {
    to: "/verses",
    label: "My Verses",
    icon: BookOpenIcon,
    placement: ["dock", "sidebar"],
  },
  {
    to: "/verses/new",
    label: "Add Verse",
    icon: PlusIcon,
    placement: ["dock"],
  },
];
