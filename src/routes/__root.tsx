import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div>
        <Link>Collection</Link>
        <Link>Men</Link>
        <Link>Women</Link>
        <Link>About</Link>
        <Link>Contact</Link>
      </div>
      <Outlet />
    </React.Fragment>
  );
}
