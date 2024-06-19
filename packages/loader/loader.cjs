const path = require('path');
const appDir = path.resolve(__dirname, '../nuxt-app/');

async function run() {
  const { loadNuxt, buildNuxt, writeTypes } = await import('nuxt/kit');
  const nuxt = await loadNuxt({
    cwd: appDir,
    overrides: {
      _prepare: true,
    },
  });
  await buildNuxt(nuxt);
  await writeTypes(nuxt);
  console.log('done')
}

run();
