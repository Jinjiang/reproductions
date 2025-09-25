import { use } from "react";
import { createFromFetch } from "react-server-dom-webpack/client";
import { createRoot } from "react-dom/client";

const cache = new Map();

function Root() {
  // let content = cache.get("home");
  // if (!content) {
  //   content = createFromFetch(fetch("/bit-custom-react"));
  //   cache.set("home", content);
  // }
  const { hash } = location;
  const api = hash === "#2" ? "bit-custom-react2" : "bit-custom-react";
  let content = cache.get(api);
  if (!content) {
    content = createFromFetch(fetch(`/${api}`));
    cache.set(api, content);
  }

  return <>{use(content)}</>;
}

export function mount() {
  const root = createRoot(document.getElementById("root"));
  root.render(<Root />);
}
