import { createFileRoute } from "@tanstack/react-router";
import { VillageApp } from "@/components/village/app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <VillageApp />;
}
