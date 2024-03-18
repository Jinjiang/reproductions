How to reproduce:

```bash
pnpm install

pnpm dev
# or
pnpm test
```

error log when `pnpm dev`:

```
Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/xxx/reproductions/node_modules/foo/foo.vue' imported from /xxx/reproductions/node_modules/foo/index.js
```

error log when `pnpm test`:

```
Serialized Error: { code: 'ERR_MODULE_NOT_FOUND', url: 'file:///xxx/reproductions/node_modules/foo/foo.vue' }
```

To fix it in a quick way, change the file `node_modules/foo/index.js` from:

```js
export * from './foo.vue'
```

to:

```js
export * from './foo.vue.js'
```

, however by doing this, the type inference would fail.
