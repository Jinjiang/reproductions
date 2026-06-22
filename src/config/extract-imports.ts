/**
 * extractImports — remark plugin that detects ES6 import statements in MDX
 * and stores them in file.data.imports for downstream plugins (e.g. wrapWithScopeContext).
 *
 * Simplified version that parses import statements with regex
 * (the real one uses @teambit/node.deps-detectors.detective-es6).
 */
import { visit } from 'unist-util-visit';

type ImportSpecifier = {
  fromModule: string;
  isDefault?: boolean;
  identifier?: string;
};

export function extractImports() {
  return function transformer(tree: any, file: any) {
    visit(tree, 'mdxjsEsm', (node: any) => {
      const value: string = node.value;
      const imports: ImportSpecifier[] = [];

      // Match: import { Foo, Bar } from 'module'
      const namedMatch = value.match(/import\s+\{([^}]+)\}\s+from\s+['"]([^'"]+)['"]/);
      if (namedMatch) {
        const names = namedMatch[1].split(',').map((s) => s.trim()).filter(Boolean);
        for (const name of names) {
          imports.push({ fromModule: namedMatch[2], identifier: name, isDefault: false });
        }
      }

      // Match: import Foo from 'module'
      const defaultMatch = value.match(/import\s+(\w+)\s+from\s+['"]([^'"]+)['"]/);
      if (defaultMatch) {
        imports.push({ fromModule: defaultMatch[2], identifier: defaultMatch[1], isDefault: true });
      }

      (file.data.imports ||= []).push(...imports);
    });
  };
}
