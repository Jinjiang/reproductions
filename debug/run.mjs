import express from 'express';
import httpProxy from 'http-proxy';

import { createServer } from 'vite';
import react from '@vitejs/plugin-react';

const viteDevServer = await createServer({
  configFile: false,
  envFile: false,
  base: '/custom-base/',
  plugins: [
    react()
  ]
});
await viteDevServer.listen(5173);
console.log('server running on http://localhost:5173');

// proxy vite dev server from 5173 to 4173 by express, including HMR by websocket

const app = express();

const server = app.listen(4173, () => {
  console.log('Express server running on http://localhost:4173');
});

server.on('upgrade', (req, socket, head) => {
  console.log('upgrade', req.url, head);
  proxy.ws(req, socket, head, { target: 'http://localhost:5173' });
});

const proxy = httpProxy.createProxyServer();

app.use('/custom-base/*', (req, res) => {
  req.url = req.originalUrl;
  proxy.web(req, res, { target: 'http://localhost:5173' });
});
