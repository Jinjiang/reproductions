import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  server: {
    port: 2000,
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      config.output.uniqueName = 'federation_consumer',
      appendPlugins([
        new ModuleFederationPlugin({
          name: 'federation_consumer',
          remotes: {
            federation_provider: 'federation_provider@http://localhost:3000/mf-manifest.json',
          },
          shared: ['vue'],
        }),
      ])
    }
  },
  plugins: [pluginVue()],
});
