import { readFileSync } from "node:fs";
import express from "express";
import compression from 'compression'
import { createServer } from "vite";

const PORT = 5173;

// create Vite dev server in middleware mode
const devServer = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
});

// create the main server with an express app
const app = express();
app.use(compression());
app.use(devServer.middlewares);

// handle all the requests with the Vite dev server
app.use("/", async (req, res, next) => {
  const url = req.originalUrl;

  try {
    // 1. get the index.html template
    // 2. transform the template with some necessary setup
    // 3. render the app into a string
    // 4. replace the final html with the rendered app string
    const template = readFileSync('./index.html', "utf-8");
    const tranformedTemplate = await devServer.transformIndexHtml(url, template);
    const { render } = await devServer.ssrLoadModule('./src/server.tsx');
    const appHtml = await render();
    const html = tranformedTemplate.replace(`<!--ssr-outlet-->`, appHtml);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(html);
  } catch (error) {
    next(error);
  }
});

// listen to the port
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});