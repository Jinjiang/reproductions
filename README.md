How to reproduce:

```bash
cd packages/loader
pnpm install

cd ../nuxt-app
pnpm install

cd ../..
node packages/loader/loader.cjs
```

Output:

```
Error: Cannot find matching package.json in /xxx/reproductions/@nuxt/kit or parent directories
    at findFile (file:///xxx/reproductions/packages/nuxt-app/node_modules/.pnpm/pkg-types@1.1.1/node_modules/pkg-types/dist/index.mjs:51:9)
    at async readPackageJSON (file:///xxx/reproductions/packages/nuxt-app/node_modules/.pnpm/pkg-types@1.1.1/node_modules/pkg-types/dist/index.mjs:70:24)
    at async checkDependencyVersion (file:///xxx/reproductions/packages/nuxt-app/node_modules/.pnpm/nuxt@3.12.2_@opentelemetry+api@1.8.0_@unocss+reset@0.61.0_floating-vue@5.2.2_unocss@0.61.0_vite@5.3.1/node_modules/nuxt/dist/index.mjs:4534:33)
```
