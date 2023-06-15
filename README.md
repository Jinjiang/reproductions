# README

This repo is for debugging vite dev server on Bit.

## Steps to reproduce

```bash
bit install
pnpm dev
```

## Picked from Vite ecosystem

- `vite` v4.1.0
- `vite-plugin-node-polyfills` v0.9.0
  - `node-stdlib-browser` v1.2.0
- `@vitejs/plugin-react` v4.0.0
  - `react` v17.x
  - `react-dom` v17.x
- `vite-plugin-mdx` v3.5.11
  - `@mdx-js/react` v1.6.22

## By far the known issues

1. `@teambit/vue.vue/dist/preview/docs.js` (doesn't work)
2. `render()` (haven't tried yet)
