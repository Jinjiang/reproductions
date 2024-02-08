import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

export const layout = new Map<string, JSX.Element>();

export const routes = new Set<{ path: string, element: JSX.Element }>();

export const App = () => {
  const router = createBrowserRouter(
    Array.from(routes)
  );
  
  return (
    <div>
      <div>
        {Array.from(layout, ([key, value]) => (
          <div key={key} id={key}>
            {value}
          </div>
        ))}
      </div>
      <RouterProvider router={router} />
    </div>
  )
  // return <h1>Hello, world!</h1>;
}
