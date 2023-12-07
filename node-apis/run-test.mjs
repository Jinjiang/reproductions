import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url';

import { startVitest } from 'vitest/node'
// import vue from '@vitejs/plugin-vue'

import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';

import MyReporter from './reporter.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url));

const myReporter = new MyReporter()


// import { defineConfig } from 'vite';
// export default defineConfig({
//   plugins: [react(), mdx()],
//   test: {
//     cache: {
//       dir: '.vitest'
//     }
//   }
// });

const vitest = await startVitest(
  'test',

  undefined,
  // // or
  // [
  //   'App'
  // ],

  undefined,
  // // or
  // {
  //   root: resolve(__dirname, '../src'),
  //   config: false,
  //   globals: true,
  //   environment: 'jsdom',
  //   watch: false,
  //   reporters: [myReporter],
  // },

  {
    root: '/Volumes/jinjiang-portable-disk/Developer/teambit/temp/debug-beer-shop',
    configFile: false,
    envFile: false,
    server: { fs: { strict: false } },
    plugins: [
      // vue(),
      react(), mdx(),
    ],
    test: {
      // root: resolve(__dirname, '../src'),
      root: '/Volumes/jinjiang-portable-disk/Developer/teambit/temp/debug-beer-shop',
      config: false,
      globals: true,
      environment: 'jsdom',
      watch: false,
      exclude: [
        '**/node_modules/**',
        '**/cypress/**',
        '**/.{idea,git,cache,output,temp}/**',
        '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*'
      ],
      include: [
        '/Volumes/jinjiang-portable-disk/Developer/teambit/temp/debug-beer-shop/beer-shop/blocks/top-beers/**/*.spec.*',
        '/Volumes/jinjiang-portable-disk/Developer/teambit/temp/debug-beer-shop/beer-shop/blocks/top-beers/**/*.test.*'
      ],
      reporters: [myReporter],
    },
  }
)

// Shall we have an API for this?
// const results = await vitest.getResults()

await vitest?.close()

console.log(myReporter.results)
// myReporter.results.files.forEach(file => {
//   console.log('[tasks]', file.tasks)
//   console.log('[task result]', file.result)
// })
