import React from 'react';
import {
  hydrateRoot,
} from 'react-dom/client';
// for other debugging purposes
import harmonyAspectsPlatformAspectRuntime from '@bitdev/harmony.aspects.platform-aspect/dist/platform-aspect.browser.runtime.js';

const domNode = document.getElementById('root');

if (domNode)
  hydrateRoot(
    domNode,
    (<div>Hello World!</div>)
  );

// for other debugging purposes
console.log(harmonyAspectsPlatformAspectRuntime);
