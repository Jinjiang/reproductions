"use client";

import Comp1 from "./comp1.js";

// export default function () {
//   return <Comp1 name="Albert" />;
// }

export function foo() {
  return <Comp1 name="Albert" />;
}

export function bar() {
  return <div>bar</div>;
}