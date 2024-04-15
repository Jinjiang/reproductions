import { runCommand } from 'nuxi';

async function run() {
  const root = process.cwd();
  console.log(root);
  await runCommand('dev', ['--cwd', root]);
}

run();
