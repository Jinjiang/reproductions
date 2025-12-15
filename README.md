How to reproduce:

```bash
pnpm install
pnpm dev
```

```
❯ pnpm dev

> reproduce@ dev /<project-root>Volumes
> vite

1:17:57 PM [vite] warning: `esbuild` option was specified by "vite-plugin-node-polyfills" plugin. This option is deprecated, please use `oxc` instead.
`optimizeDeps.rollupOptions` / `ssr.optimizeDeps.rollupOptions` is deprecated. Use `optimizeDeps.rolldownOptions` instead. Note that this option may be set by a plugin. Set VITE_DEPRECATION_TRACE=1 to see where it is called.
`esbuild.banner` option was specified. But this option is deprecated and will be removed in future versions. This option can be achieved by using a plugin with transform hook, please use that instead.

  VITE v8.0.0-beta.2  ready in 303 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
Warning: Invalid input options (1 issue found)
- For the "define". Invalid key: Expected never but received "define".
```
