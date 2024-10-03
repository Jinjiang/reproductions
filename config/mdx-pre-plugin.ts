import { Plugin } from "vite";

export function mdxPrePlugin(): Plugin {
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

