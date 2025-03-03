import { createRequire } from "module";
import { readFileSync } from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
import express from "express";
import compression from 'compression'
import { createServer } from "vite";
import findRoot from "find-root";
import react from "@vitejs/plugin-react";

const require = createRequire(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));

const reactRoot = findRoot(require.resolve('react'));

// for further usage
({ __dirname, reactRoot });

const devServer = await createServer({
  configFile: false,
  envFile: false,
  plugins: [react()],
  server: {
    middlewareMode: true,
  },
  appType: "custom",
  resolve: {
    dedupe: [
      // 'case-1-foo-cjs',
    ],
    alias: [
      // {
      //   find: "react",
      //   replacement: reactRoot,
      // },
      // {
      //   find: 'case-1-foo-cjs',
      //   replacement: 'case-1-foo-alias',
      // },
      // {
      //   find: 'case-1-foo-cjs',
      //   replacement: './alias/foo.cjs',
      // },
      // {
      //   find: 'case-1-foo-cjs',
      //   replacement: 'complex-foo/node_modules/foo-alias/index.cjs',
      // },
      // {
      //   find: 'case-1-foo-cjs',
      //   replacement: './node_modules/complex-foo/node_modules/foo-alias/index.cjs',
      // },
    ],
  },
  optimizeDeps: {
    exclude: [
      // 'case-1-foo-cjs',
      // 'case-1-qux-esm',
    ],
  },
  ssr: {
    resolve: {
      dedupe: [
        // 'case-1-foo-cjs',
      ],
    },
    // external: [
    //   'react',
    //   'react-dom',
    // ],
    // noExternal: true,
    noExternal: [
      // 'case-1-foo-cjs',
      // 'complex-foo',
    ],
    optimizeDeps: {
      include: [
        // 'case-1-foo-cjs',
        // 'complex-foo',
        // 'complex-foo/index.cjs',
        // 'complex-foo/index2.mjs',
        // 'case-1-bar-cjs',
        // 'case-1-baz-cjs',
        // 'case-1-foo-alias',
        // 'complex-foo > foo-alias',
        // 'complex-foo/node_modules/foo-alias/index.cjs',
        // './node_modules/complex-foo/node_modules/foo-alias/index.cjs',
      ],
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
    const serverModule = await devServer.ssrLoadModule('./root-server.tsx');
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
