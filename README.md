How to reproduce:

```bash
pnpm install
pnpm build
```

vite works file, but rolldown-vite fails with the following error message:

```bash
x Build failed in 3ms
error during build:
unimplemented: output.format: umd
    at unimplemented (file:///xxx/reproductions/node_modules/.pnpm/rolldown@0.13.2-snapshot-3777bfb-20240913003043/node_modules/rolldown/dist/shared/plugin-context-data-w8vU2C6p.mjs:470:9)
    at getFormat (file:///xxx/reproductions/node_modules/.pnpm/rolldown@0.13.2-snapshot-3777bfb-20240913003043/node_modules/rolldown/dist/shared/rolldown-oxlTUFUM.mjs:959:12)
    at normalizeOutputOptions (file:///xxx/reproductions/node_modules/.pnpm/rolldown@0.13.2-snapshot-3777bfb-20240913003043/node_modules/rolldown/dist/shared/rolldown-oxlTUFUM.mjs:921:11)
    at createBundler (file:///xxx/reproductions/node_modules/.pnpm/rolldown@0.13.2-snapshot-3777bfb-20240913003043/node_modules/rolldown/dist/shared/rolldown-oxlTUFUM.mjs:1036:35)
    at async #getBundler (file:///xxx/reproductions/node_modules/.pnpm/rolldown@0.13.2-snapshot-3777bfb-20240913003043/node_modules/rolldown/dist/shared/rolldown-oxlTUFUM.mjs:1059:59)
    at async RolldownBuild.write (file:///xxx/reproductions/node_modules/.pnpm/rolldown@0.13.2-snapshot-3777bfb-20240913003043/node_modules/rolldown/dist/shared/rolldown-oxlTUFUM.mjs:1071:19)
    at async build (file:///xxx/reproductions/node_modules/.pnpm/rolldown-vite@0.3.2_sass-embedded@1.86.0/node_modules/rolldown-vite/dist/node/chunks/dep-CGISS3Nm.js:54895:16)
    at async CAC.<anonymous> (file:///xxx/reproductions/node_modules/.pnpm/rolldown-vite@0.3.2_sass-embedded@1.86.0/node_modules/rolldown-vite/dist/node/cli.js:828:5)
 ELIFECYCLE  Command failed with exit code 1.
```
