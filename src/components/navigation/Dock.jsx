import { NAVIGATION_ITEMS } from '../../config/navigation';
import DockItem from './DockItem';

export default function Dock() {
  const dockItems = NAVIGATION_ITEMS.filter(item =>
    item.placement.includes('dock'),
  );

  return (
    <nav className='dock dock-xs md:hidden'>
      <div className='hidden flex-none md:block pointer-events-none'></div>
      {dockItems.map(item => (
        <DockItem item={item} />
      ))}
      <div className='hidden flex-none md:block pointer-events-none'></div>
    </nav>
  );
}
