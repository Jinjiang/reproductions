How to reproduce:

```js
{
  // ...
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    // ...
    coverage: {
      enabled: true,
      provider: 'istanbul',
      reporter: [ 'text', 'json-summary' ],
    },
  }
};
```

```bash
pnpm install
pnpm test # works
pnpm test2 # doesn't
```

Error log:

```
❯ pnpm test2

> reproduce@ test2 <project-root>
> node debug/run.mjs


 RUN  v3.2.4 <project-root>
      Coverage enabled with istanbul


⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Unhandled Error ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
SyntaxError: <project-root>/src/foo.vue?cache=1755756317040: Support for the experimental syntax 'jsx' isn't currently enabled (1:1):

> 1 | <template>
    | ^
  2 |   <h1>Hello World</h1>
  3 | </template>
  4 |

Add @babel/preset-react (https://github.com/babel/babel/tree/main/packages/babel-preset-react) to the 'presets' section of your Babel config to enable transformation.
If you want to leave it as-is, add @babel/plugin-syntax-jsx (https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-jsx) to the 'plugins' section to enable parsing.

If you already added the plugin for this syntax to your config, it's possible that your config isn't being loaded.
You can re-run Babel with the BABEL_SHOW_CONFIG_FOR environment variable to show the loaded configuration:
        npx cross-env BABEL_SHOW_CONFIG_FOR=<project-root>/src/foo.vue?cache=1755756317040 <your build command>
See https://babeljs.io/docs/configuration#print-effective-configs for more info.

1  |  <template>
   |  ^
2  |    <h1>Hello World</h1>
3  |  </template>




 ❯ src/foo.spec.ts [queued]

 Test Files 0 passed (1)
      Tests 0 passed (0)
   Start at 14:05:15
   Duration 1.62s
[
  <ref *1> {
    id: '1409237183',
    name: 'src/foo.spec.ts',
    type: 'suite',
    mode: 'run',
    filepath: '<project-root>/src/foo.spec.ts',
    tasks: [],
    meta: {},
    projectName: '',
    file: [Circular *1],
    pool: 'forks',
    shuffle: undefined,
    setupDuration: 0,
    result: { state: 'fail', errors: [Array] },
    importDurations: {
      '/@vite/env': [Object],
      '<project-root>/src/foo.spec.ts': [Object]
    },
    prepareDuration: 86.77404200000001,
    environmentLoad: 381.777583,
    logs: undefined
  }
]
[]
 ELIFECYCLE  Command failed with exit code 1.
```
