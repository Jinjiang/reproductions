import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";

import remarkDirective from 'remark-directive';
import { default as detectFrontmatter} from 'remark-frontmatter';

import yaml from 'yaml';
import { visit } from 'unist-util-visit';
import { remove } from 'unist-util-remove';
import detectiveEs6 from '@teambit/node.deps-detectors.detective-es6';

import icons from './icons.mjs';

const AdmonitionsNameList = [
  `important`,
  `tip`,
  `note`,
  `warning`,
  `danger`,
  `info`,
  `success`,
  `secondary`,
  `caution`,
]
const AdmonitionsMap = {
  info: `important`,
  success: `tip`,
  secondary: `note`,
  danger: `warning`,
}
const AdmonitionsIcons = {
  important: icons[0],
  tip: icons[1],
  note: icons[2],
  warning: icons[3],
  caution: icons[4],
}

function adaptAdmonitions() {
  // https://github.com/elviswolcott/remark-admonitions/issues/49
  // div.admonition.admonition-{name}
  //   div.admonition-heading (optional)
  //     span.admonition-icon
  //       svg
  //     h5 <title>
  //   div.admonition-content
  //     <content>
  return function (tree) {
    visit(tree, (node) => {
      if (node.type === 'textDirective') {
        if (!AdmonitionsNameList.includes(node.name)) return
        node.name = AdmonitionsMap[node.name] || node.name

        node.data = node.data || {}
        node.data.hName = 'div'
        node.data.hProperties = { className: `admonition admonition-${node.name}` }

        let label = node.children[0]
        if (label && label.data && label.data.directiveLabel) {
          label.type = 'heading'
          label.depth = 5
          label.data.hProperties = { className: 'admonition-heading' }
          const icon = {
            data: {
              hName: 'span',
              hProperties: { className: 'admonition-icon' },
            },
            children: [AdmonitionsIcons[node.name]],
          }
          label.children.unshift(icon)
          node.children.shift()
        } else {
          label = null
        }

        node.children = [
          label,
          {
            type: 'div',
            data: {
              hName: 'div',
              hProperties: { className: 'admonition-content' },
            },
            children: node.children,
          },
        ].filter(Boolean)
      }
    })
  }
}

function extractMetadata() {
  return function transformer(tree, file) {
    visit(tree, 'yaml', (node: any) => {
      try {
        // eslint-disable-next-line no-param-reassign
        file.data.frontmatter = yaml.parse(node.value, { prettyErrors: true });
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

function preMdxPlugin(): Plugin {
  return {
    name: 'pre-mdx-plugin',
    enforce: 'pre',
    transform(code, id) {
      if (id.endsWith('.mdx')) {
        // adapt remark-admonitions to remark-directive
        // https://github.com/orgs/remarkjs/discussions/1374#discussioncomment-10818614
        return code.replace(/:::(\w+) (.+)/, ':::$1[$2]');
      }
      return null;
    },
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
    preMdxPlugin(),
    react(),
    mdx({
      remarkPlugins: [
        remarkDirective,
        [detectFrontmatter, ['yaml']],
        extractMetadata,
        extractImports,
        adaptAdmonitions,
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