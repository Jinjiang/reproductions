import { createRequire } from "module";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";

import { mdxPrePlugin } from "./config/mdx-pre-plugin";
import { mdxOptions } from "./config/mdx-options";

const require = createRequire(import.meta.url);
const mdxJsReactPath = require.resolve("@mdx-js/react");
console.log({ mdxJsReactPath });

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler"
      }
    },
  },
  resolve: {
    alias: [
      {
        find: '@mdx-js/react',
        replacement: mdxJsReactPath,
      },
    ],
  },
  plugins: [
    react(),
    mdxPrePlugin(),
    mdx(mdxOptions)
  ],
});
