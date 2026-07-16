import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/verses/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <h1 className="text-xl font-bold">My Verses</h1>
      <p className="my-auto text-center">Add a verse to start memorizing!</p>
    </>
  );
}
