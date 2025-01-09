export const rootDir = process.cwd();
export const projectDir = `${rootDir}/project`;
export const tsconfigPath = `${rootDir}/config/tsconfig.json`;
export const eslintConfigPath = `${rootDir}/config/eslint.config.js`;

console.log({ rootDir, projectDir, tsconfigPath, eslintConfigPath });