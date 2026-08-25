import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MDXProvider } from '@mdx-js/react';
import Page from './page.mdx';
import './style.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main>
      <MDXProvider>
        <Page />
      </MDXProvider>
    </main>
  </StrictMode>
);
