import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: [
      {
        find: "/C:/Users/zhaoj/code/reproductions/node_modules/foo",
        replacement: "foo",
      },
      {
        find: "/@fs/C:/Users/zhaoj/code/reproductions/node_modules/foo",
        replacement: "foo",
      },
      {
        find: "C:\\Users\\zhaoj\\code\\reproductions\\node_modules\\foo",
        replacement: "foo",
      },
      {
        find: "/@fs/C:\\Users\\zhaoj\\code\\reproductions\\node_modules\\foo",
        replacement: "foo",
      },
    ]
  },
});
