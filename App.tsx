import React from 'react';

// @ts-ignore
import foo from 'foo-cjs';
// @ts-ignore
import barCjs from 'bar-cjs';
// @ts-ignore
import barEsm from 'bar-esm';

console.log({ foo, barCjs, barEsm });

export function App() {
  return (
    <div>
      <h1>App</h1>
    </div>
  );
};
