import Sneakers from "@/pages/Sneakers";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <Sneakers />
    </div>
  );
}
