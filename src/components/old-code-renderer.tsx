/**
 * OldCodeRenderer — simulates the old @teambit/react.ui.docs-app Snippet component.
 *
 * It reads scope ONLY from MDXScopeContext.
 * This works with wrapWithScopeContext because the provider injects imported
 * components into context, and this component consumes them.
 */
import React from 'react';
import { useMDXScope } from '../mdx-scope-context';

export function OldCodeRenderer({ children }: { children: string }) {
  const scope = useMDXScope();

  return (
    <div style={{ border: '2px solid #22c55e', padding: 12, borderRadius: 8, margin: '12px 0' }}>
      <div style={{ fontSize: 11, color: '#666', marginBottom: 4 }}>
        🟢 Old Code Renderer (reads from <code>useContext(MDXScopeContext)</code>)
      </div>
      <div style={{ fontSize: 12, fontFamily: 'monospace', color: '#888' }}>
        Code: <code>{children}</code>
      </div>
      <div style={{ fontSize: 12, marginTop: 4 }}>
        <strong>Scope from context:</strong>{' '}
        {Object.keys(scope).length > 0 ? (
          <span style={{ color: '#22c55e' }}>
            ✅ {'{' + Object.keys(scope).join(', ') + '}'}
          </span>
        ) : (
          <span style={{ color: '#ef4444' }}>❌ empty — no scope available</span>
        )}
      </div>
    </div>
  );
}
