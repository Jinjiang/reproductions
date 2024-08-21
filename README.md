How to reproduce:

```bash
pnpm install
git checkout node_modules/.pnpm/foo@0.0.1/

pnpm dev
```

original case:

1. absolute path as main entry
2. the entry imports a cjs file in a package via an absolute path
3. the file in the package imports a cjs file in another deep package via an absolute path

what we've tried on Windows so far about which we are open for suggestions:

1. for some paths: replace `\` with `/` and add `/` in front of the path (`formattedFiles.main`, `formattedFiles.local`, `formattedFiles.preview`)
2. change absolute path into relative path (`formattedFiles.foo`)
