import React from "react";
import { actions } from "../header/header";
import { routes } from "../app/app";

actions.add(() => {
  console.log('Refreshed');
})

routes.add({
  path: "/",
  element: (
    <div>
      <h1>Home</h1>
    </div>
  ),
});

routes.add({
  path: "/people",
  element: (
    <div>
      <h1>People</h1>
    </div>
  ),
});
