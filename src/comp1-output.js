"use client";

import Counter from "./counter.js";
import Wrapper from "./wrapper.js";

export default function ({ greetingPromise }) {
  return (
    <>
      <div>
        <Wrapper>{greetingPromise}</Wrapper>
      </div>
      <Counter />
    </>
  );
}