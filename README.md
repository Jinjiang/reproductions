How to reproduce:

```bash
pnpm install

# it works http://localhost:5173/
pnpm dev

# it doesn't work http://localhost:5173/
pnpm dev2
```

logs in Console from (`pnpm dev`)

```
{ React: {...}, ReactDom: {...}, emStyled: f}, (3) [Array(36), Array(12), 'function']
```

logs in Console from (`pnpm dev2`)

```
{ React: {...}, ReactDom: {...}, emStyled: Module}, (3) [Array(36), Array(12), 'object']
```
