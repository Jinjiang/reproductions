import { jsx as _jsx } from "react/jsx-runtime";
import { MDXScopeContext } from './mdx-scope-context';
export function MDXScopeProvider({ components, children, }) {
    return (_jsx(MDXScopeContext.Provider, { value: components, children: children }));
}
//# sourceMappingURL=mdx-scope-provider.js.map