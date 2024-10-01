import React from 'react';

import { ThemeSwitcher } from '@teambit/design.themes.theme-toggler';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';

import Content from './docs.mdx';

export type DocsAppProps = {
  children: React.ReactChild;
};

export function DocsTheme({ children }: DocsAppProps) {
  return (
    <ThemeSwitcher defaultTheme={'light'}>
      {children}
    </ThemeSwitcher>
  );
}

export function App() {
  return (
    <ThemeSwitcher defaultTheme={'light'}>
      <MDXLayout>
        {/* <div>hello world</div> */}
        <Content />
      </MDXLayout>
    </ThemeSwitcher>
  );
}