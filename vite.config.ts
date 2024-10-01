import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";

// import remarkNotes from 'remark-admonitions';
import { default as detectFrontmatter} from 'remark-frontmatter';

import yaml from 'yaml';
import { visit } from 'unist-util-visit';
import { remove } from 'unist-util-remove';
import detectiveEs6 from '@teambit/node.deps-detectors.detective-es6';

function extractMetadata() {
  return function transformer(tree, file) {
    visit(tree, 'yaml', (node: any) => {
      try {
        // eslint-disable-next-line no-param-reassign
        file.data.frontmatter = yaml.parse(node.value, { prettyErrors: true });
        // console.log('[extractMetadata]', file.data);
      } catch (err: any) {
        throw new Error(
          `failed extracting metadata/front-matter using Yaml lib, due to an error (please disregard the line/column): ${err.message}`
        );
      }
    });
  };
}

type ImportSpecifier = {
  /**
   * relative/absolute or module name. e.g. the `y` in the example of `import x from 'y';`
   */
  fromModule: string;

  /**
   * is default import (e.g. `import x from 'y';`)
   */
  isDefault?: boolean;

  /**
   * the name used to identify the module, e.g. the `x` in the example of `import x from 'y';`
   */
  identifier?: string;
};

function extractImports() {
  return function transformer(tree, file) {
    visit(tree, 'mdxjsEsm', (node: any) => {
      const es6Import = (detectiveEs6 as any).default(node.value);
      const imports: ImportSpecifier[] = Object.keys(es6Import).flatMap((dep) => {
        if (!es6Import[dep].importSpecifiers) {
          return {
            fromModule: dep,
          };
        }
        return es6Import[dep].importSpecifiers.map((importSpecifier) => ({
          fromModule: dep,
          identifier: importSpecifier.name,
          isDefault: importSpecifier.isDefault,
        }));
      });
      // console.log('[extractImports]', imports);
      // eslint-disable-next-line no-param-reassign
      (file.data.imports ||= []).push(...imports);
    });

    remove(tree, 'yaml');
  };
}

function wrapWithScopeContext() {
  return (tree, file) => {
    const imports: ImportSpecifier[] = file.data?.imports || [];
    const ids = imports.reduce<string[]>((identifiers: string[], importSpecifier: ImportSpecifier) => {
      const newIds: string[] = [];
      if (importSpecifier.identifier) newIds.push(importSpecifier.identifier);
      return identifiers.concat(newIds);
    }, []);

    const importNode = {
      "type": "mdxjsEsm",
      "value": "import { MDXScopeProvider } from '@teambit/mdx.ui.mdx-scope-context';",
      "data": {
        "estree": {
          "type": "Program",
          "body": [
            {
              "type": "ImportDeclaration",
              "specifiers": [
                {
                  "type": "ImportSpecifier",
                  "imported": {
                    "type": "Identifier",
                    "name": "MDXScopeProvider"
                  },
                  "local": {
                    "type": "Identifier",
                    "name": "MDXScopeProvider"
                  },
                }
              ],
              "source": {
                "type": "Literal",
                "value": "@teambit/mdx.ui.mdx-scope-context",
                "raw": "'@teambit/mdx.ui.mdx-scope-context'"
              },
            }
          ],
          "sourceType": "module",
          "comments": []
        }
      }
    };

    const wrapNode = {
      type: 'mdxJsxFlowElement',
      name: 'MDXScopeProvider',
      attributes: [
        {
          type: 'mdxJsxAttribute',
          name: 'components',
          value: `{${ids.join(', ')}}`,
        },
      ],
      children: [],
    };

    (wrapNode.children as Array<any>).push(...tree.children);
    tree.children = [importNode, wrapNode];
  };
}

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler"
      }
    },
  },
  plugins: [
    react(),
    mdx({
      remarkPlugins: [
        // TODO: remark-directive
        // remarkNotes,
        [detectFrontmatter, ['yaml']],
        extractMetadata,
        extractImports,
      ],

      rehypePlugins: [
        wrapWithScopeContext,
      ],

      // renderer: DEFAULT_RENDERER,
      jsxImportSource: 'react',
      // jsxRuntime: 'classic',
      providerImportSource: '@mdx-js/react',
    })
  ],
});