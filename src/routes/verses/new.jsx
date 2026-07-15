import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/verses/new')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <h1 className='text-xl font-bold'>New Verse</h1>

      <Link to='/' className='mt-5'>
        Cancel
      </Link>
    </>
  );
}
