import { createFileRoute, useRouter } from "@tanstack/react-router";

import { ArrowLeftIcon } from "@/components/icons";

export const Route = createFileRoute("/verses/new")({
  component: RouteComponent,
});

function RouteComponent() {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center font-bold">
        <button
          className="btn btn-circle btn-ghost -m-2 hover:bg-neutral"
          type="button"
          onClick={() => router.history.back()}
        >
          <ArrowLeftIcon className="text-3xl" />
        </button>
        <h1 className="text-xl ml-4">New Verse</h1>
      </div>
    </>
  );
}
