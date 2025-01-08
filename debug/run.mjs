import { ESLint } from "eslint";

(async function main() {
  const eslint = new ESLint({
    cwd: process.cwd(),
    overrideConfigFile: "./eslint.config.js",
  });

  const results = await eslint.lintFiles(["."]);

  console.log(results);
})();