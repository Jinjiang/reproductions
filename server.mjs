import { createRequire } from "module";
import { readFileSync } from "fs";
import express from "express";
import compression from 'compression'
import { createServer } from "vite";
import findRoot from "find-root";
import react from "@vitejs/plugin-react";

const require = createRequire(import.meta.url);
const reactRoot = findRoot(require.resolve('react'));

// for further usage
({ reactRoot });

const devServer = await createServer({
  configFile: false,
  envFile: false,
  plugins: [react()],
  server: {
    middlewareMode: true,
  },
  appType: "custom",
  resolve: {
    alias: [
      // {
      //   find: "react",
      //   replacement: reactRoot,
      // }
    ],
  },
  optimizeDeps: {
    exclude: [
      // 'case-1-foo-cjs',
      // 'case-1-qux-esm',
    ],
  },
  ssr: {
    // external: [
    //   'react',
    //   'react-dom',
    // ],
    // noExternal: true,
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
