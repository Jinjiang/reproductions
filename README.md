How to reproduce:

```bash
pnpm install
pnpm dev
# then uncomment the `<script>` in `index.html`
```

error message:

```
Uncaught SyntaxError: The requested module '/node_modules/foo/index.js?v=7a9e4274' does not provide an export named 'default' (at foo.js:1:8)
```
