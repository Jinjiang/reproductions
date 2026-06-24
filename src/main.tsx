import React from 'react';
import ReactDOM from 'react-dom';
import { MDXProvider } from '@mdx-js/react';

import Content from './docs.mdx';

import { OldCodeRenderer } from './components/old-code-renderer';
import { NewCodeRenderer } from './components/new-code-renderer';
import { FixedCodeRenderer } from './components/fixed-code-renderer';

/**
 * These components are provided via MDXProvider so they can be used
 * in MDX content without explicit imports.
 * (The MDX file imports Button and Card itself — those flow through
 * wrapWithScopeContext. The renderers are provided here for convenience.)
 */
const mdxComponents = {
  OldCodeRenderer,
  NewCodeRenderer,
  FixedCodeRenderer,
};

function App() {
  return (
    <MDXProvider components={mdxComponents}>
      <div style={{ maxWidth: 720, margin: '40px auto', fontFamily: 'system-ui' }}>
        <Content />
      </div>
    </MDXProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
