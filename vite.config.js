const modules = ['foo-cjs', 'foo-esm']

module.exports = {
  resolve: {
    mainFields: ['module', 'main']
  },
  test: {
    globals: true,
    // toggle to see the difference
    environment: 'jsdom',
    server: {
      deps: {
        inline: modules
      }
    },
    // doesn't work as expected
    watchExclude: modules.map((m) => `!**/node_modules/${m}/**`)
  }
}