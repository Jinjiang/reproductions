How to reproduce:

```bash
pnpm install
pnpm dev
```

Then uncomment the line 2 in `main.js` and save the file. The error will be thrown in browser console.

```
Uncaught SyntaxError: The requested module '/node_modules/foo/index.js?v=2366fb81' does not provide an export named 'foo'
```

With vite@4.4.0-beta.0 it works.
