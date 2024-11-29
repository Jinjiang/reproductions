import { createRequire } from 'module';
import { defineConfig } from "vite";
import { babel } from '@rollup/plugin-babel';
import findRoot from 'find-root';

const esmRequire = createRequire(import.meta.url);

const highlighterPath = esmRequire.resolve('@teambit/react.babel.bit-react-transformer');

export default defineConfig({
  build: {
    minify: false,
  },
  optimizeDeps: {
    exclude: ['@bitdev/react.examples.button'],
  },
  plugins: [
    babel({
      filter: (id: string | unknown) => {
        if (typeof id !== 'string') {
          console.log('\n[unknown]', id);
          return false;
        }
        // console.log('filter', id);
        if (
          id.match(/^\//) &&
          id.match(/\.js$/) &&
          id.match(/node_modules/)
        ) {
          try {
            const root = findRoot(id);
            // console.log({ root });
            // console.log(`${root}/package.json`);
            const packageJson = esmRequire(`${root}/package.json`);
            if (packageJson.componentId) {
              console.log('\n[filtered]', id);
              // console.log(id);
              return true;
            }
          } catch (e) {
            // ignore error
          }
        }
        return false;
      },
      babelHelpers: 'bundled',
      plugins: [
        highlighterPath,
      ],
    }),
  ]
});
