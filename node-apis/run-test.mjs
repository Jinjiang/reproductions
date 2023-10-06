import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url';

import { startVitest } from 'vitest/node'
import vue from '@vitejs/plugin-vue'

import MyReporter from './reporter.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url));

const myReporter = new MyReporter()

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
    plugins: [
      vue(),
    ],
    test: {
      root: resolve(__dirname, '../src'),
      config: false,
      globals: true,
      environment: 'jsdom',
      watch: false,
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
