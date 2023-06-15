import { nodePolyfills } from 'vite-plugin-node-polyfills';
import react from '@vitejs/plugin-react';
import mdx from 'vite-plugin-mdx';

export default {
  resolve: {
    alias: [
      {
        // this is required for the SCSS modules
        find: /^~(.*)$/,
        replacement: '$1'
      }
    ],
  },
  plugins: [
    (nodePolyfills as any)(),
    react(),
    mdx(),
  ],
};
