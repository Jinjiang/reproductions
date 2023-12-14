import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    globals: true,
    watch: false,
    include: [
      './test/**/*.spec.*'
    ],
  },
})
