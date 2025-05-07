import { writeFileSync } from 'fs';

import { createServer as create5 } from 'vite5';
import { createServer as create6 } from 'vite6';

const root = process.cwd();
const port = 3000;

const mainCode = `
import foo from "${root}/node_modules/foo/foo.mjs";
console.log('foo', foo);
`

writeFileSync(`${root}/debug/entries/foo.mjs`, mainCode, { encoding: 'utf-8' });

const config = {
  configFile: false,
  envFile: false,
  root,
  resolve: {
    alias: [
      {
        find: `${root}/node_modules/foo`,
        replacement: 'foo'
      },    
    ],
  },
  server: { port },
};

console.log('vite version', process.env.vite || '6');
const create = process.env.vite === '5' ? create5 : create6;

const server = await create(config);
await server.listen(port);
server.printUrls();
