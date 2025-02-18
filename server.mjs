import { createRequire } from "module";
import { readFileSync } from "fs";
import express from "express";
import compression from 'compression'
import { createServer } from "vite";
import findRoot from "find-root";
import react from "@vitejs/plugin-react";

const require = createRequire(import.meta.url);
const reactRoot = findRoot(require.resolve('react'));

console.log({ reactRoot });

const envVars = {
  BROWSER_RUNTIME_URL: "http://localhost:3000",
  BROWSER_RUNTIME_PORT: "3000",
  NODE_RUNTIME_URL: "http://localhost:5001",
  NODE_RUNTIME_PORT: "5001",
  VITE_CJS_TRACE: "true",
  VITE_CJS_IGNORE_WARNING: "1"
};

const devServer = await createServer({
  configFile: false,
  envFile: false,
  plugins: [react()],
  server: {
    middlewareMode: true,
  },
  appType: "custom",
  define: {
    'process.env': JSON.stringify(envVars),
  },
  resolve: {
    alias: [
      // {
      //   find: "react",
      //   replacement: reactRoot,
      // }
    ],
  },
  // // for other debugging purposes
  // optimizeDeps: {
  //   include: [
  //     "react > rehackt",
  //   ],
  //   exclude: ["@bitdev/harmony.examples.people"],
  // },
  // ssr: {
  //   external: [
  //     'react',
  //     'react-dom',
  //   ],
  //   noExternal: true,
  // },
  environments: {
    client: {
      optimizeDeps: {
        include: [
          // // all sub deps in @bitdev/harmony.aspects.platform-aspect
          // "react",
          // '@apollo/client',
          // '@apollo/client/react/ssr/index.js',
          // "react-dom/client",
          // "react-dom/server",
          // 'react-router-dom',
          // 'react-router-dom/server.js',
          // '@bitdesign/sparks.layout.app-layout',
        ],
        exclude: [
          // // packages that needs hmr
          // '@bitdev/harmony.aspects.platform-aspect',
          // '@bitdev/harmony.examples.people',
        ],
      },
      resolve: {
        // dedupe: [
        //   // all singletons
        //   'react',
        //   'react-dom',
        //   'graphql',
        //   'react-router',
        //   'react-router-dom',
        //   '@apollo/client',
        // ],
      },
    },
    ssr: {
      resolve: {
        // dedupe: [
        //   // all singletons
        //   'react',
        //   'react-dom',
        //   'graphql',
        //   'react-router',
        //   'react-router-dom',
        //   '@apollo/client',
        // ],
        // cjs code, should be listed explicitly
        external: [
          // 'react',
          // 'react/jsx-runtime.js',
          // 'react-dom',
          // 'react-router-dom',
          // 'rehackt',
          // 'classnames',
          // '@teambit/base-react.navigation.link',
          // '@teambit/ui-foundation.ui.navigation.react-router-adapter',
          
          // '@bitdev/harmony.harmony',
          // '@bitdev/harmony.examples.people',
          // '@bitdev/harmony.aspects.platform-aspect',
          // '@bitdev/harmony.runtimes.browser-runtime',

          // '@bitdesign/sparks.layout.app-layout',
          // '@teambit/base-react.navigation.link',
        ],
        // has non-js code like css, should set true by default
        noExternal: [
          '@bitdev/harmony.harmony',
          '@bitdev/harmony.examples.people',
          '@bitdev/harmony.aspects.platform-aspect',
          '@bitdev/harmony.runtimes.browser-runtime',
          '@bitdesign/sparks.layout.app-layout',
          '@bitdesign/sparks.navigation.link',
        ],
      },
    },
  },
});

const app = express();

app.use(compression());
app.use(devServer.middlewares);

app.use("*", async (req, res) => {
  const url = req.originalUrl;

  try {
    const template = readFileSync('./index.html', "utf-8");
    const tranformedTemplate = await devServer.transformIndexHtml(url, template);
    const serverModule = await devServer.ssrLoadModule('./testing-root.js');
    const render = serverModule?.render || serverModule?.default;
    const loadScripts = serverModule?.loadScripts;

    if (!render) throw new Error('implement a `render` method for the dev server to run, or turn `ssr: false` in your `bit-app` file')
    const renderResult = await render({ path: url });

    // be compatible with existing ssr interface
    let appHtml = '';
    let scripts = '';
    if (typeof renderResult === 'string') {
      appHtml = renderResult;
      scripts = loadScripts ? await loadScripts() : undefined;
    } else if (typeof renderResult === 'object') {
      appHtml = renderResult.html;
      scripts = renderResult.script;
    }
    // console.log('\n[request]', url);
    // console.log(appHtml);
    // console.log("-----------------");
    // console.log(scripts);
    // console.log("-----------------");

    const htmlWithBody = tranformedTemplate.replace(`<!--ssr-outlet-->`, appHtml);
    const html = scripts
      ? htmlWithBody.replace('<!--ssr-head-outlet-->', scripts)
      : htmlWithBody.replace('<!--ssr-head-outlet-->', '');

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(html);
  } catch {
    // if (devServer) devServer.ssrFixStacktrace(error);
    // // eslint-disable-next-line no-console
    // console.error(error);
    // next(error);
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
