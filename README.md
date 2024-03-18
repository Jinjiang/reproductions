How to reproduce:

```
pnpm install
pnpm dev
```

error log (in browser console):

```
Uncaught SyntaxError: The requested module '/@fs/xxxxxx/react-ssr/node_modules/.pnpm/@teambit+base-react.navigation.link@2.0.31_@testing-library+react@12.1.5_@types+react@18.2.47_3e37naar2ahvwmz7gtfgnromhm/node_modules/@teambit/base-react.navigation.link/dist/index.js?v=e9300b5d' does not provide an export named 'Link' (at link.js?v=e9300b5d:3:10)
```

This reproduction is based on the official react ssr example: https://github.com/bluwy/create-vite-extra/tree/master/template-ssr-react

it works if we set the root dir back to `'.'` (by changing the value in `server.js:L16` to `0`).

to reset node registry:

```
npm config delete '@bitdev:registry'
npm config delete '@bitdesign:registry'
npm config delete '@teambit:registry'
```
