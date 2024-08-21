How to reproduce:

```bash
pnpm install
git checkout node_modules/.pnpm/foo@0.0.1/

# original program
pnpm dev

# modified to adapt Windows
pnpm dev:win
```

**original case:**

1. absolute path as main entry
2. the entry imports a cjs file in a package via an absolute path
3. the file in the package imports a cjs file in another deep package via an absolute path

**what we've tried on Windows** so far (see `debug/init-win.mjs` and `debug/run-win.mjs`) about which we are open for suggestions:

1. for some paths: replace `\` with `/` and add `/` in front of the path (`formattedFilesForWindows.main`, `formattedFilesForWindows.local`, `formattedFilesForWindows.preview`)
2. change absolute path into relative path (`formattedFilesForWindows.foo`)
