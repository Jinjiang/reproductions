import { createServer, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const config = defineConfig({
  // // This works
  // root: './',
  // This doesn't
  root: './node_modules/.bit_roots/react.examples.vite-app/node_modules/@teambit/react.examples.vite-app/dist',
  optimizeDeps: {
    include: ['react', 'react-dom', 'react/jsx-runtime'],
  },
  plugins: [react()],
});

const run = async () => {
  const server = await createServer(config);
  server.listen(3000);
  console.log('http://localhost:3000');
}

run();
