import { writeFileSync } from 'fs';

import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";

import { mdxOptions } from './mdx.mjs';

import { createServer as create5 } from 'vite5';
import { createServer as create6 } from 'vite6';

const root = process.cwd();
const port = 3000;

const mainCode = `
import foo from "${root}/node_modules/foo/foo1.mjs";
import { foo as foo1 } from "${root}/node_modules/foo/foo-a.cjs";
import { foo as foo2 } from "${root}/node_modules/foo/foo-b.cjs";
import "${root}/node_modules/foo/foo-c.mjs";
import docs from "${root}/debug/entries/docs.md";

console.log({
  foo,
  foo1,
  foo2,
  docs,
});
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
  plugins: [
    react(),
    mdx(mdxOptions),
  ],
};

console.log('vite version', process.env.vite || '6');
const create = process.env.vite === '5' ? create5 : create6;

const server = await create(config);
await server.listen(port);
server.printUrls();
