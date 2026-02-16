import { build as build8 } from 'vite';
import { build as build7 } from 'vite7';
import mdx from '@mdx-js/rollup';

await build7({
  configFile: false,
  envFile: false,
  build: {
    outDir: 'output/vendor',
    lib: {
      name: 'vendor',
      entry: 'vendor.js',
      formats: [ 'umd' ],
      fileName: 'vendor'
    },
  }
})

await build7({
  configFile: false,
  envFile: false,
  plugins: [
    mdx(),
  ],
  build: {
    outDir: 'output/vite7',
    lib: {
      name: 'foo7',
      entry: 'hello-world.md',
      formats: [ 'umd' ],
      fileName: 'foo7'
    },
    rollupOptions: {
      external: [
        'react',
      ],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
    minify: false
  }
})

await build8({
  configFile: false,
  envFile: false,
  plugins: [
    mdx(),
  ],
  build: {
    outDir: 'output/vite8',
    lib: {
      name: 'foo8',
      entry: 'hello-world.md',
      formats: [ 'umd' ],
      fileName: 'foo8'
    },
    rollupOptions: {
      external: [
        'react',
      ],
      output: {
        globals: {
          react: 'React',
        },
        intro: function() {
          return `if (typeof require === 'undefined') {\n  var require = function(id) {\n    var globals = ${JSON.stringify({ react: 'React' })};\n    return (typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : global)[globals[id]];\n  };\n}`
        }
      },
    },
    minify: false
  }
})
