import React, { createContext, useContext } from 'react';

const MyContext = createContext<string>('Hello World');

export function Foo({ a }: { a: string }) {
  if (a) {
    useContext<string>(MyContext);
  }
  return <>{a}</>
}

export default ({ a }: { a: string }) => {
  if (a) {
    useContext<string>(MyContext);
  }
  return <>{a}</>
}
