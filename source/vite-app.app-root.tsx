import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ViteAppApp } from './app';

ReactDOM.render((
  <BrowserRouter>
    <ViteAppApp />
  </BrowserRouter>
), document.getElementById('root'));
