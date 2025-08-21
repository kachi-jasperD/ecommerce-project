import ComingSoon from "@/pages/ComingSoon";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/women")({
  component: Women,
});

function Women() {
  return (
    <div className="p-2">
      <ComingSoon />
    </div>
  );
}
