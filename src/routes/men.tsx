import ComingSoon from "@/pages/ComingSoon";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/men")({
  component: Men,
});

function Men() {
  return (
    <div className="p-2">
      <ComingSoon />
    </div>
  );
}
