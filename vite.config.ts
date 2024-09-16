import { defineConfig } from 'vite'
import { createRequire } from 'module'

const require = createRequire(import.meta.url);

const packages = ['foo']

const { default: react } = await import('@teambit/vite.plugins.vite-plugin-react')

const generateExcludeRegExp = (packages: string[]): RegExp => {
  const packageRegExp = packages.join('|');
  return new RegExp(`node_modules(?!.*node_modules/(${packageRegExp}))(?!.*/(${packageRegExp}))`);
};

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    watch: {
      ignored: packages.map((p) => `!**/node_modules/${p}/**`)
    }
  },
  optimizeDeps: {
    entries: packages.map((p) => require.resolve(p)),
    exclude: packages
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  plugins: [react.default({
    exclude: [generateExcludeRegExp(packages)]
  })],
})
