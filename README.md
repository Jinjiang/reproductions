How to reproduce:

```bash
pnpm install

# use `vue-tsc`
pnpm dev:tsc

# use `vue-component-meta`
pnpm dev:meta
```

Then check the output `dist/foo.vue.d.ts` and `dist/foo.vue.meta.json`.
