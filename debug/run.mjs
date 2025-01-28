import { readFileSync } from "fs";
import { resolve } from "path";
import express from 'express'
import compression from 'compression'
import { createServer } from 'vite'

const port = 3000;
const root = process.cwd() + '/debug/project';

const envVars = {
  BROWSER_RUNTIME_URL: "http://localhost:3000",
  BROWSER_RUNTIME_PORT: "3000",
  NODE_RUNTIME_URL: "http://localhost:5001",
  NODE_RUNTIME_PORT: "5001",
  VITE_CJS_TRACE: "true",
  VITE_CJS_IGNORE_WARNING: "1"
};

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
  }
}

const devServer = await createServer(config);
const indexHtmlPath = resolve(root, 'index.html');
const serverEntryFile = resolve(root, 'wayne-com.browser.root.js');

const app = express();

/**
 * set middlewares.
 */
app.use(compression());
app.use(devServer.middlewares);

app.use("*", async (req, res, next) => {
  const url = req.originalUrl;
  console.log('\n[createSsrServer] template:', url);

  try {
    const template = readFileSync(resolve(indexHtmlPath), "utf-8");
    console.log('- transformIndexHtml:', url);
    const tranformedTemplate = await devServer.transformIndexHtml(url, template);
    console.log('- ssrLoadModule:', serverEntryFile);
    const serverModule = await devServer.ssrLoadModule(serverEntryFile);
    console.log('- serverModule:', serverModule);
    const render = serverModule?.render || serverModule?.default;
    const loadScripts = serverModule?.loadScripts;

    if (!render) throw new Error('implement a `render` method for the dev server to run, or turn `ssr: false` in your `bit-app` file')
    const appHtml = await render({ path: url });
    const scripts = loadScripts ? await loadScripts() : undefined;
    const htmlWithBody = tranformedTemplate.replace(`<!--ssr-outlet-->`, appHtml);
    const html = scripts
      ? htmlWithBody.replace('<!--ssr-head-outlet-->', scripts)
      : htmlWithBody.replace('<!--ssr-head-outlet-->', '');

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(html);
  } catch (error) {
    console.log('\n[createSsrServer] error:', error);
    // if (vite) vite.ssrFixStacktrace(error);
    // // eslint-disable-next-line no-console
    // console.error(error);
    next(error);
  }
});

app.listen(port);
console.log(`🚀 the app is listening on port ${port}`)
