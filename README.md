How to reproduce:

```bash
pnpm install
pnpm list --depth 1
```

You will see `@testing-library/vue` is in the tree as a peer which is incorrect.

