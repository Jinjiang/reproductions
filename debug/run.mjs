import { ESLint } from "eslint";
import {
  projectDir,
  eslintConfigPath
} from "../config/vars.mjs"

;(async function main() {
  const eslint = new ESLint({
    cwd: projectDir,
    overrideConfigFile: eslintConfigPath,
  });

  const results = await eslint.lintFiles(["."]);

  console.log(results[0]);
})();