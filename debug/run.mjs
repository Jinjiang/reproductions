import { createServer, defineConfig } from 'vite';

import { nodePolyfills } from 'vite-plugin-node-polyfills';
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import { mdxOptions } from '@teambit/mdx.modules.mdx-v3-options';
import { getUIHighlighter } from '@teambit/vite.utils.ui-highlighter';

const config = defineConfig({
  root: './',
  plugins: [
    react(),
    mdx(mdxOptions),
    // nodePolyfills(),
    getUIHighlighter(),
  ],
});

async function runServer() {
  const server = await createServer(config);
  await server.listen();

  server.printUrls();
}

runServer().catch((err) => {
  console.error(err);
  process.exit(1);
});
