import React from 'react';
import { UserProfile } from '@bitdev/harmony.examples.people/dist/user-profile.js';

console.log(UserProfile);

import {
  hydrateRoot,
  // createRoot,
} from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import { ReactSsrApp } from './app.js';

const domNode = document.getElementById('root');

if (domNode)
  hydrateRoot(
    domNode,
    // <BrowserRouter>
    //   <ReactSsrApp />
    // </BrowserRouter>
    (<div>Hello World!</div>)
  );
