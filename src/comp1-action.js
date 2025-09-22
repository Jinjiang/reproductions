"use server";

import Output from "./comp1-output.js";

export default function ({ name }) {
  const messagePromise = new Promise((res) =>
    setTimeout(() => res("hello x " + name), 2000)
  );

  return <Output greetingPromise={messagePromise} />;
}