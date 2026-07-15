import DockItem from './DockItem';
import { BookOpenTextIcon, PlusIcon } from './icons';

export default function Dock() {
  const dockItems = [
    {
      to: '/verses',
      icon: BookOpenTextIcon,
    },
    {
      to: '/verses/new',
      icon: PlusIcon,
    },
  ];

  return (
    <nav className='dock'>
      <div class='hidden flex-none md:block pointer-events-none'></div>
      {dockItems.map(item => (
        <DockItem item={item} />
      ))}
      <div class='hidden flex-none md:block pointer-events-none'></div>
    </nav>
  );
}
