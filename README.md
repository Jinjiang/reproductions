How to reproduce:

```bash
pnpm install
# revert mocked files in node_modules/.pnpm
git checkout node_modules
pnpm dev
```

error message:

```
Uncaught TypeError: Failed to resolve module specifier "react/jsx-runtime". Relative references must start with either "/", "./", or "../".
```
