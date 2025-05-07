function wrapWithScopeContext() {
  return (tree, file) => {
      const imports = file.data?.imports || [];
      const ids = imports.reduce((identifiers, importSpecifier) => {
          const newIds = [];
          if (importSpecifier.identifier)
              newIds.push(importSpecifier.identifier);
          return identifiers.concat(newIds);
      }, []);
      const importNode = {
          "type": "mdxjsEsm",
          "value": "import { MDXScopeProvider } from 'bar';",
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
                              "value": "bar",
                              "raw": "'bar'"
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
                                              "method": false,
                                              "shorthand": true,
                                              "computed": false,
                                              key: { type: 'Identifier', name: id },
                                              value: { type: 'Identifier', name: id },
                                              kind: 'init',
                                          })),
                                      },
                                  },
                              ],
                          },
                      }
                  },
              },
          ],
          children: [],
      };
      wrapNode.children.push(...tree.children);
      tree.children = [importNode, wrapNode];
  };
}
export const mdxOptions = {
  remarkPlugins: [
  ],
  rehypePlugins: [
      wrapWithScopeContext,
  ],
  recmaPlugins: [
  ],
  jsxImportSource: 'react',
  providerImportSource: '@mdx-js/react',
};
