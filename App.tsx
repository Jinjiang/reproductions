import React from 'react';
import fooDefault from 'case-1-foo-cjs';
import barDefault from 'case-1-bar-cjs';
import bazDefault from 'case-1-baz-cjs';
import quxDefault from 'case-1-qux-esm';
import * as foo from 'case-1-foo-cjs';
import * as bar from 'case-1-bar-cjs';
import * as baz from 'case-1-baz-cjs';
import * as qux from 'case-1-qux-esm';

console.log({
  fooDefault,
  barDefault,
  bazDefault,
  quxDefault,
  foo,
  bar,
  baz,
  qux,
});

export default function App() {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}
