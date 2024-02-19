How to reproduce:

```bash
pnpm install

# it works
pnpm dev

# it fails
pnpm build
```

error log:

```
  vitepress v1.0.0-rc.43

✓ building client + server bundles...
⠋ rendering pages...ReferenceError: document is not defined
    at file:///xxx/reproductions/.vitepress/.temp/index.md.js?t=1708314710875:4:13
    at ModuleJob.run (node:internal/modules/esm/module_job:192:25)
✖ rendering pages...
build error:
ReferenceError: document is not defined
    at file:///xxx/reproductions/.vitepress/.temp/index.md.js?t=1708314710886:4:13
    at ModuleJob.run (node:internal/modules/esm/module_job:192:25)
 ELIFECYCLE  Command failed with exit code 1.
```
