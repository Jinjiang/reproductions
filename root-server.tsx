import React from 'react';
import ReactDOMServer from "react-dom/server";
import { App } from './App.tsx';

export const render = async () => {
  return ReactDOMServer.renderToString(
    (<App />)
  );
};
