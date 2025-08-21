import { createFileRoute } from "@tanstack/react-router";
import ComingSoon from "../pages/ComingSoon.tsx";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="p-2">
      <ComingSoon />
    </div>
  );
}
