How to reproduce:

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000` in browser.

Expected in both browser console and terminal:

```js
{
  foo: 'foo v1.0.0',
  barCjs: 'bar-cjs v1.0.0, requires foo v1.0.0',
  barEsm: 'bar-esm v1.0.0, requires foo v1.0.0'
}
```

Actual in terminal:

```js
{
  foo: 'foo v1.0.0',
  barCjs: 'bar-cjs v1.0.0, requires foo v2.0.0',
  barEsm: 'bar-esm v1.0.0, requires foo v1.0.0'
}
```
