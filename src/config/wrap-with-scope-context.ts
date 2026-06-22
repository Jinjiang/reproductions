/**
 * wrapWithScopeContext — MDX v3 rehype plugin.
 *
 * Collects all import identifiers from file.data.imports (populated by extractImports)
 * and wraps the entire MDX content in:
 *
 *   <MDXScopeProvider components={{Button, Card, ...}}>
 *     ...original content...
 *   </MDXScopeProvider>
 *
 * This injects those identifiers into React context so downstream consumers
 * can retrieve them via useContext(MDXScopeContext).
 */

type ImportSpecifier = {
  fromModule: string;
  isDefault?: boolean;
  identifier?: string;
};

export function wrapWithScopeContext() {
  return (tree: any, file: any) => {
    const imports: ImportSpecifier[] = file.data?.imports || [];
    const ids = imports.reduce<string[]>((identifiers, importSpecifier) => {
      if (importSpecifier.identifier) identifiers.push(importSpecifier.identifier);
      return identifiers;
    }, []);

    // MDX v3 requires full estree AST nodes, not raw strings.

    // 1. Import node for MDXScopeProvider
    const importNode = {
      type: 'mdxjsEsm',
      value: "import { MDXScopeProvider } from 'mdx-scope-context';",
      data: {
        estree: {
          type: 'Program',
          body: [
            {
              type: 'ImportDeclaration',
              specifiers: [
                {
                  type: 'ImportSpecifier',
                  imported: { type: 'Identifier', name: 'MDXScopeProvider' },
                  local: { type: 'Identifier', name: 'MDXScopeProvider' },
                },
              ],
              source: {
                type: 'Literal',
                value: 'mdx-scope-context',
                raw: "'mdx-scope-context'",
              },
            },
          ],
          sourceType: 'module',
          comments: [],
        },
      },
    };

    // 2. Wrapper JSX element: <MDXScopeProvider components={{id1, id2, ...}}>
    const wrapNode: any = {
      type: 'mdxJsxFlowElement',
      name: 'MDXScopeProvider',
      attributes: [
        {
          type: 'mdxJsxAttribute',
          name: 'components',
          value: {
            type: 'mdxJsxAttributeValueExpression',
            value: `{${ids.join(', ')}}`,
            data: {
              estree: {
                type: 'Program',
                body: [
                  {
                    type: 'ExpressionStatement',
                    expression: {
                      type: 'ObjectExpression',
                      properties: ids.map((id) => ({
                        type: 'Property',
                        method: false,
                        shorthand: true,
                        computed: false,
                        key: { type: 'Identifier', name: id },
                        value: { type: 'Identifier', name: id },
                        kind: 'init',
                      })),
                    },
                  },
                ],
              },
            },
          },
        },
      ],
      children: [],
    };

    // Move all existing children inside the wrapper
    wrapNode.children.push(...tree.children);
    tree.children = [importNode, wrapNode];
  };
}
