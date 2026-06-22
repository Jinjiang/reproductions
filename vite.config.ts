import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';

import { extractImports } from './src/config/extract-imports';
import { wrapWithScopeContext } from './src/config/wrap-with-scope-context';

export default defineConfig({
  resolve: {
    alias: {
      'mdx-scope-context': path.resolve(__dirname, 'src/mdx-scope-context'),
    },
  },
  plugins: [
    react(),
    mdx({
      remarkPlugins: [extractImports],
      rehypePlugins: [wrapWithScopeContext],
      jsxImportSource: 'react',
      providerImportSource: '@mdx-js/react',
    }),
  ],
});
