How to reproduce:

```bash
pnpm install
pnpm dev
```

log:

```
5:44:27 PM [vite] (client) ✨ new dependencies optimized: foo/foo1.mjs, foo/foo-a.cjs, foo/foo-b.cjs, foo/foo-c.mjs, @mdx-js/react, bar
5:44:27 PM [vite] (client) ✨ optimized dependencies changed. reloading
The file does not exist at "/<project-root>/node_modules/.vite/deps/chunk-E6KUT42S.js?v=05fb22f8" which is in the optimize deps directory. The dependency might be incompatible with the dep optimizer. Try adding it to `optimizeDeps.exclude`.
```

with Vite 5 there is no warnings:

```bash
pnpm dev:5
```
