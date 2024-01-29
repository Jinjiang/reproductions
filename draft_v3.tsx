/// browser runtime

// platform

const routes = [];

const layout = {};

function registerRoute(action) {
  routes.push(action);
}

function registerLayout(name, content) {
  layout[name] = content;
}

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
