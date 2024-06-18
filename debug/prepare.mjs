import { join, dirname } from 'path';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
    
const __dirname = dirname(fileURLToPath(import.meta.url));
const appDirList = [
  join(__dirname, '../examples/hello-world-app'),
  join(__dirname, '../examples/my-nuxtjs-layer'),
  join(__dirname, '../examples/my-nuxtjs-app'),
]

console.log('appDirList', appDirList);

for await (const appDir of appDirList) {
  const loadingNuxt = import('nuxt/kit');
  const { loadNuxt, buildNuxt, writeTypes } = await loadingNuxt;
  try {
    console.log(`Loading nuxt for app at ${appDir}`)
    const nuxt = await loadNuxt({
      cwd: appDir,
      overrides: {
        _prepare: true,
      },
    });
    await buildNuxt(nuxt);
    await writeTypes(nuxt);
    console.log(`Finished loading nuxt for app at ${appDir}`)
  } catch (e) {
    console.error(`Failed to load nuxt for app at ${appDir}`);
    console.error(e);
  }
  const tsconfigPath = join(appDir, 'tsconfig.json');
  const tsconfigContent = `{
    // https://nuxt.com/docs/guide/concepts/typescript
    "extends": "./.nuxt/tsconfig.json"
  }`;
  console.log(`Writing tsconfig.json to ${tsconfigPath}`);
  writeFileSync(tsconfigPath, tsconfigContent);
}
