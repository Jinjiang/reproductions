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

3. Open `http://localhost:3000` in browser.

    error log:

    ```bash
    Server running on http://localhost:3000
    4:43:15 PM [vite] (ssr) Error when evaluating SSR module ./root-server.tsx: module is not defined
          at eval (/<repo>/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-dev-runtime.js:8:3)
          at ESModulesEvaluator.runInlinedModule (file:///<repo>/node_modules/.pnpm/vite@6.1.0_@types+node@22.13.2/node_modules/vite/dist/node/module-runner.js:1057:6)
          at SSRCompatModuleRunner.directRequest (file:///<repo>/node_modules/.pnpm/vite@6.1.0_@types+node@22.13.2/node_modules/vite/dist/node/module-runner.js:1271:82)
          at SSRCompatModuleRunner.directRequest (file:///<repo>/node_modules/.pnpm/vite@6.1.0_@types+node@22.13.2/node_modules/vite/dist/node/chunks/dep-CfG9u7Cn.js:30895:35)
          at SSRCompatModuleRunner.cachedRequest (file:///<repo>/node_modules/.pnpm/vite@6.1.0_@types+node@22.13.2/node_modules/vite/dist/node/module-runner.js:1166:28)
          at request (file:///<repo>/node_modules/.pnpm/vite@6.1.0_@types+node@22.13.2/node_modules/vite/dist/node/module-runner.js:1215:79)
          at async eval (/<repo>/root-server.tsx:3:44)
          at async ESModulesEvaluator.runInlinedModule (file:///<repo>/node_modules/.pnpm/vite@6.1.0_@types+node@22.13.2/node_modules/vite/dist/node/module-runner.js:1049:5)
          at async SSRCompatModuleRunner.directRequest (file:///<repo>/node_modules/.pnpm/vite@6.1.0_@types+node@22.13.2/node_modules/vite/dist/node/module-runner.js:1271:61)
          at async SSRCompatModuleRunner.directRequest (file:///<repo>/node_modules/.pnpm/vite@6.1.0_@types+node@22.13.2/node_modules/vite/dist/node/chunks/dep-CfG9u7Cn.js:30895:23)
          at async SSRCompatModuleRunner.cachedRequest (file:///<repo>/node_modules/.pnpm/vite@6.1.0_@types+node@22.13.2/node_modules/vite/dist/node/module-runner.js:1167:76)
          at async SSRCompatModuleRunner.import (file:///<repo>/node_modules/.pnpm/vite@6.1.0_@types+node@22.13.2/node_modules/vite/dist/node/module-runner.js:1104:12)
          at async instantiateModule (file:///<repo>/node_modules/.pnpm/vite@6.1.0_@types+node@22.13.2/node_modules/vite/dist/node/chunks/dep-CfG9u7Cn.js:30852:12)
          at async file:///<repo>/server.mjs:55:26
    ```
