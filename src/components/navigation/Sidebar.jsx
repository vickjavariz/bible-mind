import { NAVIGATION_ITEMS } from '../../config/navigation';
import SidebarItem from './SidebarItem';

export default function Sidebar({ children }) {
  const sidebarItems = NAVIGATION_ITEMS.filter(item =>
    item.placement.includes('sidebar'),
  );

  return (
    <div className='drawer md:drawer-open'>
      <input id='drawer-toggle' type='checkbox' className='drawer-toggle' />

      <div className='drawer-content'>{children}</div>

      <nav className='drawer-side'>
        <div className='flex flex-col items-start min-h-dvh'>
          <p className='hidden lg:block text-3xl p-4'>Bible Mind</p>
          <ul className='menu w-full grow md:pt-4 lg:pt-2 lg:w-64'>
            {sidebarItems.map(item => (
              <SidebarItem item={item} />
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
