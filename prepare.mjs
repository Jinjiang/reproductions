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

const vite8Globals = {
  react: 'React',
};

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
        globals: vite8Globals,
        intro: function() {
          return `if (typeof require === 'undefined') {
  var require = function(id) {
    var globals = ${JSON.stringify(vite8Globals)};
    if (!(id in globals)) {
      throw new Error('External dependency "' + id + '" is not configured in globals mapping');
    }
    return (typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : global)[globals[id]];
  };
}`
        }
      },
    },
    minify: false
  }
})
