const rootDir = process.cwd();
const projectDir = `${rootDir}/project-2`;
const tsconfigPath = `${projectDir}/config/tsconfig.json`;
const eslintConfigPath = `${projectDir}/config/bit-eslint-config.cjs`;

console.log({ rootDir, projectDir, tsconfigPath, eslintConfigPath });

module.exports = {
  rootDir,
  projectDir,
  tsconfigPath,
  eslintConfigPath,
};