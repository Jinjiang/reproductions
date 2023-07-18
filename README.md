How to reproduce:

```bash
pnpm install
pnpm dev # it works
pnpm build # it doesn't
```

Error log:

```
$ pnpm build

> reproduce@ build /Users/jinjiang/Developer/personal/reproductions
> vite build

vite v4.4.3 building for production...
✓ 6 modules transformed.
✓ built in 181ms
[vite]: Rollup failed to resolve import "/Users/jinjiang/Developer/personal/reproductions/node_modules/foo/style.module.scss?used&commonjs-proxy" from "/Users/jinjiang/Developer/personal/reproductions/node_modules/foo/import.js".
This is most likely unintended because it can break your application at runtime.
If you do want to externalize this module explicitly add it to
`build.rollupOptions.external`
error during build:
Error: [vite]: Rollup failed to resolve import "/Users/jinjiang/Developer/personal/reproductions/node_modules/foo/style.module.scss?used&commonjs-proxy" from "/Users/jinjiang/Developer/personal/reproductions/node_modules/foo/import.js".
This is most likely unintended because it can break your application at runtime.
If you do want to externalize this module explicitly add it to
`build.rollupOptions.external`
    at viteWarn (file:///Users/jinjiang/Developer/personal/reproductions/node_modules/.pnpm/vite@4.4.3_sass@1.63.6/node_modules/vite/dist/node/chunks/dep-210e5610.js:48034:27)
    at onRollupWarning (file:///Users/jinjiang/Developer/personal/reproductions/node_modules/.pnpm/vite@4.4.3_sass@1.63.6/node_modules/vite/dist/node/chunks/dep-210e5610.js:48066:9)
    at onwarn (file:///Users/jinjiang/Developer/personal/reproductions/node_modules/.pnpm/vite@4.4.3_sass@1.63.6/node_modules/vite/dist/node/chunks/dep-210e5610.js:47797:13)
    at file:///Users/jinjiang/Developer/personal/reproductions/node_modules/.pnpm/rollup@3.26.2/node_modules/rollup/dist/es/shared/node-entry.js:24066:13
    at Object.logger [as onLog] (file:///Users/jinjiang/Developer/personal/reproductions/node_modules/.pnpm/rollup@3.26.2/node_modules/rollup/dist/es/shared/node-entry.js:25738:9)
    at ModuleLoader.handleInvalidResolvedId (file:///Users/jinjiang/Developer/personal/reproductions/node_modules/.pnpm/rollup@3.26.2/node_modules/rollup/dist/es/shared/node-entry.js:24652:26)
    at file:///Users/jinjiang/Developer/personal/reproductions/node_modules/.pnpm/rollup@3.26.2/node_modules/rollup/dist/es/shared/node-entry.js:24612:26
    at async Promise.all (index 2)
 ELIFECYCLE  Command failed with exit code 1.
```
