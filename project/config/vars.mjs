export const rootDir = process.cwd();
export const projectDir = `${rootDir}/project`;
export const tsconfigPath = `${projectDir}/config/tsconfig.json`;
export const eslintConfigPath = `${projectDir}/config/eslint.config.js`;

console.log({ rootDir, projectDir, tsconfigPath, eslintConfigPath });