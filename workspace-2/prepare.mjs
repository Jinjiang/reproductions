import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path'

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const reflectMetadataPath = require.resolve('reflect-metadata', {
  paths: [resolve(__dirname, '../workspace-1')]
});

const filePath = resolve(__dirname, 'main.ts');
const fileContent = `import '${reflectMetadataPath}'`;
writeFileSync(filePath, fileContent, 'utf-8');
