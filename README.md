How to reproduce:

```bash
pnpm install
pnpm dev
```

see the console:

```
// vite 7 works
ƒ MDXContent(props = {}) {
		const { wrapper: MDXLayout } = props.components || {};
		return MDXLayout ? jsxRuntimeExports.jsx(MDXLayout, {
			...props,
			children: jsxRuntimeExports.jsx(_createMdxCon…

// vite 8 doesn't
foo8.umd.js:210 Uncaught (in promise) ReferenceError: require is not defined
```
