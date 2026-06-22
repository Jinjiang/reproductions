/**
 * MDXScopeContext — a React context that holds the identifiers imported
 * in an MDX file, so that downstream consumers (e.g. live code renderers)
 * can access them.
 *
 * This is a simplified standalone version of what @teambit/mdx.ui.mdx-scope-context does.
 */
import React, { createContext, useContext } from 'react';

export type ScopeComponents = Record<string, any>;

export const MDXScopeContext = createContext<ScopeComponents>({});

export function MDXScopeProvider({
  components,
  children,
}: {
  components: ScopeComponents;
  children: React.ReactNode;
}) {
  return (
    <MDXScopeContext.Provider value={components}>
      {children}
    </MDXScopeContext.Provider>
  );
}

export function useMDXScope(): ScopeComponents {
  return useContext(MDXScopeContext);
}
