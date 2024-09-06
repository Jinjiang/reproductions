How to reproduce:

First:

```bash
pnpm install
```

- with `transpile()`:

  ```bash
  pnpm debug
  ```

  The `@import '~foo/style.css'` is not resolved correctly.
  
- with `createCompiler()`:

  ```bash
  pnpm build
  ```

  The dist files are correct.
