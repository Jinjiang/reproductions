import { readFileSync } from "fs";
import { resolve } from "path";
import express from 'express'
import compression from 'compression'
import { createServer } from 'vite'

const port = 3000;
const root = process.cwd() + '/debug/project';

const envVars = {};

// NOTE:
// foo (including css imports) must be noExternal
// baz (commonjs) must be external
const external = ['baz'];
const noExternal = ['foo', 'bar'];
// const external = undefined;
// const noExternal = true;

const config = {
  configFile: false,
  root,
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  define: {
    'process.env': JSON.stringify(envVars),
  },
  server: { host: true, middlewareMode: true },
  appType: 'custom',
  ssr: {
    external,
    noExternal,
  }
}

const devServer = await createServer(config);
const indexHtmlPath = resolve(root, 'index.html');
const serverEntryFile = resolve(root, 'root.js');

const app = express();

app.use(compression());
app.use(devServer.middlewares);

app.use("*", async (req, res) => {
  const url = req.originalUrl;

  try {
    const template = readFileSync(resolve(indexHtmlPath), "utf-8");
    const tranformedTemplate = await devServer.transformIndexHtml(url, template);
    const serverModule = await devServer.ssrLoadModule(serverEntryFile);
    const render = serverModule?.render || serverModule?.default;
    const loadScripts = serverModule?.loadScripts;

    if (!render) throw new Error('implement a `render` method for the dev server to run');
    const appHtml = await render({ path: url });
    const scripts = loadScripts ? await loadScripts() : undefined;
    const htmlWithBody = tranformedTemplate.replace(`<!--ssr-outlet-->`, appHtml);
    const html = scripts
      ? htmlWithBody.replace('<!--ssr-head-outlet-->', scripts)
      : htmlWithBody.replace('<!--ssr-head-outlet-->', '');

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(html);
  } catch {
  }
});

app.listen(port);
console.log(`🚀 the app is listening on port ${port}`)
