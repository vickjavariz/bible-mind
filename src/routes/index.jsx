import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  beforeLoad: ({ context }) => {
    throw Route.redirect({
      to: '/verses',
    });
  },
});
