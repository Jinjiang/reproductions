How to reproduce:

```bash
pnpm install
pnpm dev
```

then modify `./node_modules/foo/index.js`:

- on macOS the fast refresh works
- on WSL the UI doesn't update at all
