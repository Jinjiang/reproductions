import { createApp, h } from "vue";
// import App from "./App.vue";
import Foo from "./Foo.vue";
import Bar from "./Bar.vue";

const App = () => {
  return h(Bar, {
    msg: "Hello Vue 3",
    Comp: Foo,
  });
}

createApp(App).mount("#app");