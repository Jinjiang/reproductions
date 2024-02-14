How to reproduce:

```bash
pnpm install
pnpm build
```

error log:

```
error during build:
RollupError: "existsSync" is not exported by "node_modules/.pnpm/node-stdlib-browser@1.2.0/node_modules/node-stdlib-browser/esm/mock/empty.js", imported by "src/index.ts".
...
```

if would work if you remove `"type": "module"` from `package.json`