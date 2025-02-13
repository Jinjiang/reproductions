How to reproduce:

1. Open `server.mjs` and add below into `resolve.alias` config:

    ```js
    const devServer = await createServer({
      ...
      resolve: {
        alias: [
          {
            find: "react",
            replacement: reactRoot,
          }
        ],
      },
      ...
    });
    ```

2. Then:

    ```bash
    pnpm install
    pnpm dev
    ```
