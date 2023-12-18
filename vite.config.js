const modules = ['foo-cjs', 'foo-esm']

module.exports = {
  // doesn't work as expected
  server: {
    watch: {
      ignored: modules.map((m) => `!**/node_modules/${m}/**`)
    }
  },
  // doesn't work as expected
  optimizeDeps: {
    exclude: modules
  },
  test: {
    globals: true,
    server: {
      deps: {
        inline: modules
      }
    },
    // doesn't work as expected
    watchExclude: modules.map((m) => `!**/node_modules/${m}/**`)
  }
}