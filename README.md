How to reproduce:

```bash
pnpm install
pnpm dev
```

NOTE:

- `foo` (including css imports) must be in `noExternal`
- `baz` (commonjs) must be in `external`
