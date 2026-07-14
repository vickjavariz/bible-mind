import { createFileRoute, Link } from '@tanstack/react-router';

import { PlusIcon } from '@/components/icons';

export const Route = createFileRoute('/verses/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className='flex-1 flex flex-col'>
      <h1 className='text-2xl'>My Verses</h1>
      <p className='my-auto text-center'>Add a verse to start memorizing!</p>
    </div>
  );
}
