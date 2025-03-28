import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    server: {
      deps: {
        inline: true,
        // // seems this configuration works
        // inline: [ /^(?!.*vitest\/dist\/index\.js).*$/ ],
      },
    },
  }
});
