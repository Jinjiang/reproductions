/**
 * NewCodeRenderer — simulates the new @bitdev/react.preview.react-docs-app code renderer.
 *
 * It reads scope ONLY from props.scope (direct prop).
 * It does NOT read from MDXScopeContext.
 * So wrapWithScopeContext's provider has no consumer → scope is lost.
 */
import React from 'react';

export function NewCodeRenderer({
  children,
  scope,
}: {
  children: string;
  scope?: Record<string, any>;
}) {
  const effectiveScope = scope || {};

  return (
    <div style={{ border: '2px solid #ef4444', padding: 12, borderRadius: 8, margin: '12px 0' }}>
      <div style={{ fontSize: 11, color: '#666', marginBottom: 4 }}>
        🔴 New Code Renderer (reads ONLY from <code>props.scope</code>, ignores context)
      </div>
      <div style={{ fontSize: 12, fontFamily: 'monospace', color: '#888' }}>
        Code: <code>{children}</code>
      </div>
      <div style={{ fontSize: 12, marginTop: 4 }}>
        <strong>Scope from props:</strong>{' '}
        {Object.keys(effectiveScope).length > 0 ? (
          <span style={{ color: '#22c55e' }}>
            ✅ {'{' + Object.keys(effectiveScope).join(', ') + '}'}
          </span>
        ) : (
          <span style={{ color: '#ef4444' }}>❌ empty — no scope available (nobody passed scope prop)</span>
        )}
      </div>
    </div>
  );
}
