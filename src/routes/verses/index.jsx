import { createFileRoute } from "@tanstack/react-router";

import Hero from "@/components/common/Hero";
import { PlusIcon } from "@/components/icons";

export const Route = createFileRoute("/verses/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <h1 className="text-xl font-bold">My Verses</h1>

      <Hero>
        <Hero.Title className="text-neutral">No Verses</Hero.Title>
        <Hero.Text>Add your first verse to start memorizing!</Hero.Text>
        <Hero.Link to="/verses/new">
          <PlusIcon />
          Add Verse
        </Hero.Link>
      </Hero>
    </>
  );
}
