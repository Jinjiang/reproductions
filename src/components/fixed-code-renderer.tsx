/**
 * FixedCodeRenderer — the Option B fix.
 *
 * It reads scope from BOTH:
 *   1. useContext(MDXScopeContext) — picks up what wrapWithScopeContext injects
 *   2. props.scope — direct prop (for callers that pass scope explicitly)
 *
 * Merges them, with props.scope taking precedence.
 * This makes it backward-compatible with the wrapWithScopeContext plugin.
 */
import React from 'react';
import { useMDXScope } from '../mdx-scope-context';

export function FixedCodeRenderer({
  children,
  scope,
}: {
  children: string;
  scope?: Record<string, any>;
}) {
  const contextScope = useMDXScope();                    // ← THE FIX: read from context
  const mergedScope = { ...contextScope, ...scope };     // props.scope wins on conflict

  return (
    <div style={{ border: '2px solid #3b82f6', padding: 12, borderRadius: 8, margin: '12px 0' }}>
      <div style={{ fontSize: 11, color: '#666', marginBottom: 4 }}>
        🔵 Fixed Code Renderer (reads from <strong>both</strong> context + props.scope)
      </div>
      <div style={{ fontSize: 12, fontFamily: 'monospace', color: '#888' }}>
        Code: <code>{children}</code>
      </div>
      <div style={{ fontSize: 12, marginTop: 4 }}>
        <strong>Scope from context:</strong>{' '}
        {Object.keys(contextScope).length > 0 ? (
          <span style={{ color: '#22c55e' }}>
            ✅ {'{' + Object.keys(contextScope).join(', ') + '}'}
          </span>
        ) : (
          <span style={{ color: '#ef4444' }}>❌ empty</span>
        )}
      </div>
      <div style={{ fontSize: 12, marginTop: 2 }}>
        <strong>Scope from props:</strong>{' '}
        {Object.keys(scope || {}).length > 0 ? (
          <span style={{ color: '#22c55e' }}>
            ✅ {'{' + Object.keys(scope || {}).join(', ') + '}'}
          </span>
        ) : (
          <span style={{ color: '#999' }}>— none passed</span>
        )}
      </div>
      <div style={{ fontSize: 12, marginTop: 2 }}>
        <strong>Merged scope:</strong>{' '}
        {Object.keys(mergedScope).length > 0 ? (
          <span style={{ color: '#3b82f6' }}>
            ✅ {'{' + Object.keys(mergedScope).join(', ') + '}'}
          </span>
        ) : (
          <span style={{ color: '#ef4444' }}>❌ empty</span>
        )}
      </div>
    </div>
  );
}
