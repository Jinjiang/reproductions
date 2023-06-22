How to reproduce:

```bash
pnpm install
pnpm dev
```

Open http://localhost:4000/ in browser.

Error messages in browser console:

```
GET http://localhost:4000/@vite/client net::ERR_ABORTED 404 (Not Found)
GET http://localhost:4000/foo.js net::ERR_ABORTED 404 (Not Found)
```
