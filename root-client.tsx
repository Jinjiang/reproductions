import React from 'react';
import {
  hydrateRoot,
} from 'react-dom/client';
// // for other debugging purposes
// import { UserProfile } from '@bitdev/harmony.examples.people/dist/user-profile.js';

const domNode = document.getElementById('root');

if (domNode)
  hydrateRoot(
    domNode,
    (<div>Hello World!</div>)
  );

// // for other debugging purposes
// console.log(UserProfile);
