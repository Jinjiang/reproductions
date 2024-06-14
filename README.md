How to reproduce:

```bash
pnpm install
node debug/prepare.mjs
```

Error log:

```bash
Error: Context conflict
    at checkConflict (file:///xxx/node_modules/.pnpm/unctx@2.3.1/node_modules/unctx/dist/index.mjs:6:13)
    at Object.set (file:///xxx/node_modules/.pnpm/unctx@2.3.1/node_modules/unctx/dist/index.mjs:40:9)
    at initNuxt (file:///xxx/node_modules/.pnpm/nuxt@3.12.1_@opentelemetry+api@1.9.0_@parcel+watcher@2.4.1_@types+node@20.14.2_@unocss+reset@_hj4sotmsrf5nukyidvs4ut3w2i/node_modules/nuxt/dist/index.mjs:4051:11)
    at Object.ready (file:///xxx/node_modules/.pnpm/nuxt@3.12.1_@opentelemetry+api@1.9.0_@parcel+watcher@2.4.1_@types+node@20.14.2_@unocss+reset@_hj4sotmsrf5nukyidvs4ut3w2i/node_modules/nuxt/dist/index.mjs:4017:18)
    at loadNuxt (file:///xxx/node_modules/.pnpm/nuxt@3.12.1_@opentelemetry+api@1.9.0_@parcel+watcher@2.4.1_@types+node@20.14.2_@unocss+reset@_hj4sotmsrf5nukyidvs4ut3w2i/node_modules/nuxt/dist/index.mjs:4488:16)
    at async loadNuxt (file:///xxx/node_modules/.pnpm/@nuxt+kit@3.12.1_magicast@0.3.4_rollup@4.18.0/node_modules/@nuxt/kit/dist/index.mjs:2633:19)
    at async file:///xxx/debug/prepare.mjs:19:18
    at async Promise.all (index 1)
```
