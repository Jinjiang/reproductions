import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "app";
import "header";
import "people";

export const render = () => {
  const rootElement = document.getElementById("app");
  if (rootElement) {
    createRoot(rootElement).render(<App />);
  }
}

render();
