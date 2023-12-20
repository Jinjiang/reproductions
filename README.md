How to reproduce:

```bash
pnpm install

# you can switch environment between 'node' (default value) and 'jsdom'
pnpm test

# in 'node' environment:
#
# modify any code in node_modules
# - the test is not re-run

# in 'jsdom' environment:
#
# modify code in node_modules/foo-cjs/index.js or node_modules/foo-esm/index.js
# - when you first time modify it, the test is not re-run
# - when you further modify it, the test is re-run
#
# modify code in node_modules/foo-cjs/foo.js or node_modules/foo-esm/foo.js
# - the test is not re-run
```

The expected bahavior is that the test is always re-run when any code in `node_modules/foo-cjs` and `node_modules/foo-esm` is modified whatever the environment is.
