import React from 'react';

import { MyComp as MyComp1 } from './MyComp.tsx';
import { MyComp as MyComp2 } from './MyComp2.js';
// @ts-ignore
import { MyComp as MyComp3 } from 'my-comp';
import { MyComp as MyComp4 } from 'my-comp/my-comp.tsx';

// // for other debugging purposes
// import harmonyAspectsPlatformAspectRuntime from '@bitdev/harmony.aspects.platform-aspect/dist/platform-aspect.browser.runtime.js';

export function App() {
  return (
    <div>
      <h1>App</h1>
      <MyComp1 />
      <MyComp2 />
      <MyComp3 />
      <MyComp4 />
    </div>
  );
};

// // for other debugging purposes
// console.log(harmonyAspectsPlatformAspectRuntime);
