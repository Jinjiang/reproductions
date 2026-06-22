# MDX Scope Context Demo

This demo shows how `wrapWithScopeContext` works with MDX v3, and demonstrates
**Option B** — making the new code renderer backward-compatible by reading from
both `useContext(MDXScopeContext)` and `props.scope`.

## What the demo shows

Given this MDX content:

```mdx
import { Button } from './components/button';
import Card from './components/card';
```

The `wrapWithScopeContext` rehype plugin wraps the output in:

```jsx
<MDXScopeProvider components={{Button, Card}}>
  ...content...
</MDXScopeProvider>
```

Three code renderers show the result:

| Renderer | Reads context? | Reads props.scope? | Sees scope? |
|----------|---------------|-------------------|-------------|
| 🟢 Old  | ✅ Yes        | ❌ No             | ✅ Yes      |
| 🔴 New  | ❌ No         | ✅ Yes            | ❌ No (nobody passes scope prop) |
| 🔵 Fixed (Option B) | ✅ Yes | ✅ Yes      | ✅ Yes (from context) |

## The fix (Option B)

The only change needed in the new code renderer:

```tsx
// Before (new renderer — broken):
function NewCodeRenderer({ children, scope }) {
  // scope is empty because nobody passes it
  return <LiveEditor scope={scope} />;
}

// After (Option B — fixed):
function FixedCodeRenderer({ children, scope }) {
  const contextScope = useMDXScope();              // ← add this line
  const mergedScope = { ...contextScope, ...scope }; // ← merge both
  return <LiveEditor scope={mergedScope} />;
}
```

## Run

```bash
pnpm install
pnpm dev
```
