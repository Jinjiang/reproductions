How to reproduce:

```bash
pnpm install
pnpm dev
```

vite works file, but rolldown-vite fails with the following error message:

```bash
failed to load config from /xxx/reproductions/vite.config.ts
error when starting dev server:
Error [ERR_MODULE_NOT_FOUND]: Cannot find package '@rollup/plugin-babel' imported from /xxx/reproductions/vite.config.ts.timestamp-1743723660923-82f944a976fea.mjs
    at Object.getPackageJSONURL (node:internal/modules/package_json_reader:268:9)
    at packageResolve (node:internal/modules/esm/resolve:768:81)
    at moduleResolve (node:internal/modules/esm/resolve:854:18)
    at defaultResolve (node:internal/modules/esm/resolve:984:11)
    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:685:12)
    at #cachedDefaultResolve (node:internal/modules/esm/loader:634:25)
    at ModuleLoader.resolve (node:internal/modules/esm/loader:617:38)
    at ModuleLoader.getModuleJobForImport (node:internal/modules/esm/loader:273:38)
    at ModuleJob._link (node:internal/modules/esm/module_job:135:49)
 ELIFECYCLE  Command failed with exit code 1.
```
