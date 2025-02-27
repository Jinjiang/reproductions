import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __dirname = dirname(fileURLToPath(import.meta.url));
export const rootDir = join(__dirname, '..', '..');
export const projectDir = join(__dirname, '..');
export const tsconfigPath = `${projectDir}/config/tsconfig.json`;
export const eslintConfigPath = `${projectDir}/config/eslint.config.js`;

console.log({ rootDir, projectDir, tsconfigPath, eslintConfigPath });