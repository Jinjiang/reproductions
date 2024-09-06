import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'try-stencil',
  outputTargets: [
    { type: 'dist-custom-elements', customElementsExportBehavior: 'auto-define-custom-elements' },
    // {
    //   type: 'dist',
    //   esmLoaderPath: '../loader',
    // },
    // {
    //   type: 'dist-custom-elements',
    //   customElementsExportBehavior: 'auto-define-custom-elements',
    //   externalRuntime: false,
    // },
    // {
    //   type: 'docs-readme',
    // },
    // {
    //   type: 'www',
    //   serviceWorker: null, // disable service workers
    // },
  ],
  testing: {
    browserHeadless: "new",
  },
};
