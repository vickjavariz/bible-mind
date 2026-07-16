import { BookOpenTextIcon, PlusIcon } from '../components/icons';

export const NAVIGATION_ITEMS = [
  {
    to: '/verses',
    label: 'My Verses',
    icon: BookOpenTextIcon,
    placement: ['dock', 'sidebar'],
  },
  {
    to: '/verses/new',
    label: 'Add Verse',
    icon: PlusIcon,
    placement: ['dock'],
  },
];
