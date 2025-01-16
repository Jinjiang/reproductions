const { ESLint } = require('eslint');
const { projectDir, eslintConfigPath } = require('../config/vars.cjs');

const config = require(eslintConfigPath);

const eslint = new ESLint({
  cwd: projectDir,
  baseConfig: config,
  useEslintrc: false,
});

(async () => {
  const results = await eslint.lintFiles(['src/*']);
  console.log(results.map(
    ({ filePath, messages }) => [filePath, ...messages]
  ));
})();
