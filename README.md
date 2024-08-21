How to reproduce:

```bash
pnpm install
pnpm dev
```

1. absolute path as main entry
2. the entry imports a cjs file in a package via an absolute path
3. the file in the package imports a cjs file in another deep package via an absolute path
