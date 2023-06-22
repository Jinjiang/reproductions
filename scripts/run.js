const path = require('path')
const express = require('express')
const httpProxy = require('http-proxy');
const { createServer } = require('vite');

const runProxy = async () => {
  const app = express()
  const proxy = httpProxy.createProxyServer();

  app.use('*', (req, res) => {
    proxy.web(req, res, {
      target: `http://localhost:3000${req.originalUrl}`
    });
  })
  app.listen(4000);

  console.log('proxy server start at http://localhost:4000')
}

const runVite = async () => {
  const server = await createServer({
    configFile: false,
    root: path.resolve(__dirname, '../'),
    server: {
      port: 3000,
    },
  })
  await server.listen()

  server.printUrls()
}

const run = async () => {
  await runVite()
  await runProxy()
}

run()
