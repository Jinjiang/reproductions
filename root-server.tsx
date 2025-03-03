import React from 'react';
import { renderToString } from "react-dom/server";
import App from './App';

export const render = async () => renderToString(<App />);
