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
{ emStyled: f }, 'function'
```

logs in Console from (`pnpm dev2`)

```
{ emStyled: Module }, 'object'
```
