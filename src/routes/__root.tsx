// import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import NavBar from "@/pages/NavBar";

export const Route = createRootRoute({
  component: () => (
    <>
      <div>
        <NavBar />
      </div>
      <hr className="hidden md:block" />
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});
