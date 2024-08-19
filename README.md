How to reproduce:

```bash
pnpm install
pnpm dev
```

index.html: src="c:\xxx\.git\a.js"
  a.js -> import 'c:\xxx\node_modules\{preview\preview.js,local\local.mjs,x\x.md}'
    local.js -> import 'c:\xxx\node_modules\docs\docs.js'
watch packages: x
