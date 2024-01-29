/// browser runtime

// package platform

const routes = [];

const layout = {};

export function registerRoute(action) {
  routes.push(action);
}

export function registerLayout(name, content) {
  layout[name] = content;
}

// package header

import { registerAction } from "platform";

const actions = [];

export function registerAction(action) {
  actions.push(action);
}

registerLayout("header", "header content");

// package people

import { registerAction } from "header";
import { registerRoute } from "platform";

registerAction("people");
registerRoute("people");

/// node runtime

// ...
