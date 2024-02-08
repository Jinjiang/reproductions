/// browser runtime

import * as header from "./header";
import * as people from "./people";

// platform

// import * as header from "./header";
// import * as people from "./people";

const routes = [];

const layout = {};

function registerRoute(action) {
  routes.push(action);
}

header.platformLayout.forEach(registerLayout);

function registerLayout(name, content) {
  layout[name] = content;
}

people.platformRoute.forEach(registerRoute);

// header

// import * as people from "./people"

const actions = [];

function registerAction(action) {
  actions.push(action);
}

people.headerAction.forEach(registerAction);

const headerLayout = {
  header: "header content"
};

export {
  platformLayout: [headerLayout],
}

// people

const peopleAction = "people";
const peopleRoute = "people";

export {
  headerAction: [peopleAction],
  platformRoute: [peopleRoute],
}

/// node runtime

// ...
