import React from "react";
import { layout } from "../app/app";

export const actions = new Set<() => void>();

layout.set("header", (
  <div>
    <h1>Header</h1>
    <button onClick={() => actions.forEach(action => action())}>
      Refresh
    </button>
  </div>
));
