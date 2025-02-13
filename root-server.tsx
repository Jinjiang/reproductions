import React from 'react';
import ReactDOMServer from "react-dom/server";

export const render = async () => {
  return ReactDOMServer.renderToString(
    (<div>Hello World!</div>)
  );
};
