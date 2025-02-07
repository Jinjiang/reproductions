import express from 'express';

import { createServer } from 'vite';
import react from '@vitejs/plugin-react';

const viteDevServer = await createServer({
  configFile: false,
  envFile: false,
  plugins: [
    react()
  ]
});
await viteDevServer.listen(3000);
console.log('server running on http://localhost:3000');

// // proxy vite dev server from 3000 to 4000 by express, including HMR by websocket

// const app = express();

// app.use((req, res) => {
//   viteDevServer.middlewares(req, res);
// });

// const server = app.listen(4000, () => {
//   console.log('Express server running on http://localhost:4000');
// });

// server.on('upgrade', (req, socket, head) => {
//   viteDevServer.wsServer.handleUpgrade(req, socket, head, (ws) => {
//     viteDevServer.wsServer.emit('connection', ws, req);
//   });
// });
