How to reproduce:

```bash
pnpm install
pnpm build
```

Then check the `dist` folder.

- webpack will assign the module into `window["teambit.vite/my-component"]`
- Vite will assign the module into `window.teambit["vite/my-component"]`
