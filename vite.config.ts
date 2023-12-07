import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';

export default defineConfig({
  // root: '',
  server: { fs: { strict: false } },
  plugins: [
    react(), mdx(),
  ],
  test: {
    // root: '',
    globals: true,
    environment: 'jsdom',
    watch: false,
    // exclude: [
    //   '**/node_modules/**',
    //   '**/cypress/**',
    //   '**/.{idea,git,cache,output,temp}/**',
    //   '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*'
    // ],
    include: [
      './beer-shop/blocks/top-beers/**/*.spec.*',
      './beer-shop/blocks/top-beers/**/*.test.*',
    ],
  },
})
