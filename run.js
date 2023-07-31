const run = async () => {
  const path = require('path');
  const ESLintLib = require('eslint').ESLint;
  
  const options = {
    overrideConfig: {
      extends: [
        path.resolve('./node_modules/@teambit/react.eslint-config-bit-react/dist/index.js')
      ],
      parserOptions: {
        project: path.resolve('./tsconfig.json')
      }
    },
    extensions: [
      '.ts',  '.tsx',
      '.js',  '.jsx',
      '.mjs', '.md',
      '.mdx'
    ],
    useEslintrc: false,
    cwd: path.resolve('.'),
    fix: false,
    fixTypes: [ 'layout', 'problem', 'suggestion' ]
  }
  
  const eslint = new ESLintLib(options);
  const files = [
    path.resolve('./sample.mdx')
  ]
  
  const lintResults = await eslint.lintFiles(files);
  console.log(lintResults[0].messages)
}

run();
