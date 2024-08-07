How to reproduce:

```bash
pnpm install

# it works
pnpm test
# it doesn't work
pnpm test:debug
```

Error log:

```bash
11:58:25 AM [vite] Pre-transform error: Failed to parse source for import analysis because the content contains invalid JS syntax. Install @vitejs/plugin-vue to handle .vue files.
11:58:25 AM [vite] Internal server error: Failed to parse source for import analysis because the content contains invalid JS syntax. Install @vitejs/plugin-vue to handle .vue files.
  Plugin: vite:import-analysis
  File: /xxx/reproductions/App.vue:2:18
  1  |  <template>
  2  |    <h1>My App</h1>
     |                   ^
  3  |  </template>
      at TransformPluginContext._formatError (file:///xxx/reproductions/node_modules/.pnpm/vite@5.3.5_@types+node@22.1.0/node_modules/vite/dist/node/chunks/dep-mCdpKltl.js:48945:41)
      at TransformPluginContext.error (file:///xxx/reproductions/node_modules/.pnpm/vite@5.3.5_@types+node@22.1.0/node_modules/vite/dist/node/chunks/dep-mCdpKltl.js:48940:16)
      at TransformPluginContext.transform (file:///xxx/reproductions/node_modules/.pnpm/vite@5.3.5_@types+node@22.1.0/node_modules/vite/dist/node/chunks/dep-mCdpKltl.js:63667:14)
      at async PluginContainer.transform (file:///xxx/reproductions/node_modules/.pnpm/vite@5.3.5_@types+node@22.1.0/node_modules/vite/dist/node/chunks/dep-mCdpKltl.js:48786:18)
      at async loadAndTransform (file:///xxx/reproductions/node_modules/.pnpm/vite@5.3.5_@types+node@22.1.0/node_modules/vite/dist/node/chunks/dep-mCdpKltl.js:51608:27)
      at async viteTransformMiddleware (file:///xxx/reproductions/node_modules/.pnpm/vite@5.3.5_@types+node@22.1.0/node_modules/vite/dist/node/chunks/dep-mCdpKltl.js:61557:24)
 ❯ App.vue.spec.ts (0)

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Suites 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  App.vue.spec.ts [ App.vue.spec.ts ]
TypeError: Failed to fetch dynamically imported module: http://localhost:5173/xxx/reproductions/App.vue.spec.ts?import&browserv=1723003105187
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯

 Test Files  1 failed (1)
      Tests  no tests
   Start at  11:58:24
   Duration  1.31s (transform 0ms, setup 0ms, collect 0ms, tests 0ms, environment 0ms, prepare 268ms)

 ELIFECYCLE  Command failed with exit code 1.
```
