import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";

import { mdxPrePlugin } from "./config/mdx-pre-plugin";
import { mdxOptions } from "./config/mdx-options";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler"
      }
    },
  },
  plugins: [
    react(),
    mdxPrePlugin(),
    mdx(mdxOptions)
  ],
});
