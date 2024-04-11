import { runCommand } from 'nuxi';

// [build] {
//   root: '/Users/jinjiang/Library/Caches/Bit/capsules/27a39b85602ebe8786aede34e5b5e8f3752a828e/frontend.nuxtjs_examples_my-nuxtjs-app',
//   tempOutput: '/Volumes/jinjiang-portable-disk/Developer/teambit/core/nuxtjs/.output',
//   outputDir: '/Users/jinjiang/Library/Caches/Bit/capsules/27a39b85602ebe8786aede34e5b5e8f3752a828e/frontend.nuxtjs_examples_my-nuxtjs-app/artifacts/apps/app-bundle'
// }

async function run() {
  // const root = process.cwd();
  const root = '/Users/jinjiang/Library/Caches/Bit/capsules/27a39b85602ebe8786aede34e5b5e8f3752a828e/frontend.nuxtjs_examples_my-nuxtjs-app';
  console.log(root);
  await runCommand('build', ['--cwd', root]);
}

run();
