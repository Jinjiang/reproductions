import React from 'react';
import {
  hydrateRoot,
} from 'react-dom/client';
// // for other debugging purposes
// import { UserProfile } from '@bitdev/harmony.examples.people/dist/user-profile.js';
import harmonyAspectsPlatformAspectRuntime from '@bitdev/harmony.aspects.platform-aspect/dist/platform-aspect.browser.runtime.js';

const domNode = document.getElementById('root');

if (domNode)
  hydrateRoot(
    domNode,
    (<div>Hello World!</div>)
  );

// // for other debugging purposes
// console.log(UserProfile);
console.log(harmonyAspectsPlatformAspectRuntime);
