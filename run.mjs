import { startVitest } from 'vitest/node'
import react from '@vitejs/plugin-react';

startVitest(
  'test',
  undefined,
  undefined,
  {
    plugins: [react()],
    test: {
      globals: true,
      environment: 'jsdom',
      watch: false,
      include: [
        // // This works (relative path)
        // '**/*.spec.*',
        // This doesn't work (absolute path)
        'C:\\Users\\zhaoj\\code\\reproductions\\**\\*.spec.*'
      ]
    }
  }
);
