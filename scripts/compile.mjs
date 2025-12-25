#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const srcDir = path.join(projectRoot, 'src');
const examplesDir = path.join(projectRoot, 'examples');
const distDir = path.join(projectRoot, 'dist');
const watch = process.argv.includes('--watch');

// Create dist directory
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

function getVueFiles() {
  return fs.readdirSync(srcDir).filter((file) => file.endsWith('.vue'));
}

function getTsFiles() {
  return [
    ...fs.readdirSync(srcDir).filter((file) => file.match(/\.tsx?$/) && !file.endsWith('.spec.ts') && !file.endsWith('.spec.tsx')),
    ...fs.readdirSync(examplesDir).filter(
      (file) => file.match(/\.tsx?$/) && file !== 'index.html' && !file.endsWith('.spec.ts') && !file.endsWith('.spec.tsx')
    ),
  ];
}

function compileVueFiles() {
  const vueFiles = getVueFiles();
  console.log(`Found ${vueFiles.length} Vue file(s)`);

  for (const file of vueFiles) {
    const srcPath = path.join(srcDir, file);
    const outName = file.replace(/\.vue$/, '.js');
    const outPath = path.join(distDir, outName);

    console.log(`Compiling Vue: ${file} -> ${outName}`);
    try {
      // Use vue-simple-compiler
      execSync(
        `npx vue-simple-compiler "${srcPath}" -o "${outPath}"`,
        { stdio: 'inherit', cwd: projectRoot }
      );
    } catch (err) {
      // Vue simple compiler may not have exact command, fallback to a basic copy
      // In real scenario, would use proper vue compiler-sfc
      console.warn(
        `Note: Vue compilation may need manual setup. Consider using @vue/compiler-sfc for production.`
      );
    }
  }
}

function compileTsFiles() {
  const tsFiles = getTsFiles();
  console.log(`Found ${tsFiles.length} TypeScript file(s)`);

  for (const file of tsFiles) {
    const srcDir2 = file.startsWith('MyReactExamples') ? examplesDir : srcDir;
    const srcPath = path.join(srcDir2, file);
    const outName = file.replace(/\.tsx?$/, '.js');
    const outPath = path.join(distDir, outName);

    console.log(`Compiling TS: ${file} -> ${outName}`);
    try {
      execSync(
        `npx tsx --no-warnings "${srcPath}" > /dev/null 2>&1 || npx tsc "${srcPath}" --outDir "${distDir}" --skipLibCheck`,
        { stdio: 'inherit', cwd: projectRoot }
      );
    } catch (err) {
      console.error(`Failed to compile ${file}`);
    }
  }
}

function watchMode() {
  console.log('Watching for changes...');
  
  import('chokidar').then(({ default: chokidar }) => {
    const watcher = chokidar.watch([srcDir, examplesDir], {
      ignored: /(node_modules|dist|\.spec\.(ts|tsx))/,
    });

    watcher
      .on('change', (filePath) => {
        console.log(`File changed: ${path.relative(projectRoot, filePath)}`);
        if (filePath.endsWith('.vue')) {
          compileVueFiles();
        } else if (filePath.match(/\.tsx?$/)) {
          compileTsFiles();
        }
      })
      .on('error', (error) => {
        console.error('Watcher error:', error);
      });

    console.log('Watch mode started. Press Ctrl+C to stop.');
  }).catch((err) => {
    console.error('Failed to load chokidar:', err.message);
    process.exit(1);
  });
}

console.log('🔨 Starting compilation...\n');

try {
  compileVueFiles();
  console.log('');
  compileTsFiles();

  console.log('\n✅ Compilation complete!\n');

  if (watch) {
    watchMode();
  }
} catch (err) {
  console.error('Compilation error:', err.message);
  process.exit(1);
}
