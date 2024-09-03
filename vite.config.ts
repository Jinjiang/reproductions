/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss, { Config } from 'tailwindcss';
import { globSync } from 'glob';

const content = globSync(['**/*.{vue,html}'], {
  ignore: ['**/node_modules/**'],
});

const tailwindConfig: Config = {
  content: content,
  theme: {
    extend: {},
  },
  plugins: [],
};

export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(tailwindConfig),
      ],
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  }
})
