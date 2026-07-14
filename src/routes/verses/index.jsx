import { createFileRoute } from '@tanstack/react-router';

import { PlusIcon } from '@/components/icons';

export const Route = createFileRoute('/verses/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className='flex-1 flex flex-col justify-between pt-6 text-center'>
      <div>
        <p className='mb-5'>Add a verse to start memorizing!</p>
      </div>

      <button className='btn btn-primary btn-circle btn-xl text-3xl mx-auto mt-auto' type='button'>
        <PlusIcon />
      </button>
    </div>
  );
}
