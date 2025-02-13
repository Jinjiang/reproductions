import React from 'react';
import ReactDOMServer from "react-dom/server";
// import { ReactSsrApp } from "./main.tsx";

interface IRenderProps {
  path: string;
}

export const render = async ({ path }: IRenderProps) => {
  console.log('\n[render]', path);
  return ReactDOMServer.renderToString(
    (<div>Hello World!</div>)
  );
};

/**
 * use `loadScripts` to inject scripts to the head
 * during SSR.
 */
// export const loadScripts = async () => {
//   return '<script></script>';
// }