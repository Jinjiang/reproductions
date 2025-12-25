#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import * as ts from 'typescript';
import { compile as compileVueSFC } from 'vue-simple-compiler';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const srcDir = path.join(projectRoot, 'src');
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
  return fs
    .readdirSync(srcDir)
    .filter(
      (file) =>
        file.match(/\.tsx?$/) &&
        !file.endsWith('.spec.ts') &&
        !file.endsWith('.spec.tsx') &&
        !file.endsWith('.d.ts')
    );
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function writeTextFile(filePath, content) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content);
}

function compileVueFiles() {
  const vueFiles = getVueFiles();
  console.log(`Found ${vueFiles.length} Vue file(s)`);

  for (const file of vueFiles) {
    const srcPath = path.join(srcDir, file);
    const code = fs.readFileSync(srcPath, 'utf-8');
    
    console.log(`Compiling Vue: ${file}`);
    try {
      const result = compileVueSFC(code, {
        root: srcDir,
        filename: file,
        autoImportCss: true,
        autoResolveImports: true,
        isProd: true,
        tsCompilerOptions: {
          target: ts.ScriptTarget.ES2020,
          module: ts.ModuleKind.ESNext,
          jsx: ts.JsxEmit.ReactJSX,
          sourceMap: true,
        },
        tsRuntime: ts,
      });
      const jsOutPath = path.join(distDir, path.basename(result.js.filename).replace(/\/\\/g, '/'));
      writeTextFile(jsOutPath, result.js.code);

      for (const cssFile of result.css) {
        const cssOutPath = path.join(distDir, path.basename(cssFile.filename).replace(/\/\\/g, '/'));
        writeTextFile(cssOutPath, cssFile.code);
      }
      if (result.errors && result.errors.length) {
        for (const e of result.errors) console.warn('Vue compile warning:', e.message || e);
      }
    } catch (err) {
      console.error(`Failed to compile Vue SFC ${file}:`, err.message);
    }
  }
}

function compileTsFiles() {
  const tsFiles = getTsFiles();
  console.log(`Found ${tsFiles.length} TypeScript file(s)`);

  for (const file of tsFiles) {
    const srcPath = path.join(srcDir, file);
    const outName = file.replace(/\.tsx?$/, '.js');
    const outPath = path.join(distDir, outName);

    console.log(`Compiling TS: ${file} -> ${outName}`);
    try {
      const source = fs.readFileSync(srcPath, 'utf-8');
      const transpiled = ts.transpileModule(source, {
        compilerOptions: {
          target: ts.ScriptTarget.ES2020,
          module: ts.ModuleKind.ESNext,
          jsx: ts.JsxEmit.ReactJSX,
          jsxImportSource: 'react',
          sourceMap: true,
          skipLibCheck: true,
        },
        fileName: file,
      });
      writeTextFile(outPath, transpiled.outputText);
    } catch (err) {
      console.error(`Failed to compile ${file}:`, err.message);
    }
  }
}

function watchMode() {
  console.log('Watching for changes...');
  
  import('chokidar').then(({ default: chokidar }) => {
    const watcher = chokidar.watch([srcDir], {
      ignored: /(node_modules|dist|\.spec\.(ts|tsx))/,
    });

    watcher
      .on('change', (filePath) => {
        console.log(`File changed: ${path.relative(projectRoot, filePath)}`);
        if (filePath.endsWith('.vue')) {
          // compile only that Vue file
          const file = path.basename(filePath);
          const code = fs.readFileSync(filePath, 'utf-8');
          try {
            const result = compileVueSFC(code, {
              root: srcDir,
              filename: file,
              autoImportCss: true,
              autoResolveImports: true,
              isProd: true,
              tsCompilerOptions: {
                target: ts.ScriptTarget.ES2020,
                module: ts.ModuleKind.ESNext,
                jsx: ts.JsxEmit.ReactJSX,
                sourceMap: true,
              },
              tsRuntime: ts,
            });
            const jsOutPath = path.join(distDir, path.basename(result.js.filename).replace(/\/\\/g, '/'));
            writeTextFile(jsOutPath, result.js.code);
            for (const cssFile of result.css) {
              const cssOutPath = path.join(distDir, path.basename(cssFile.filename).replace(/\/\\/g, '/'));
              writeTextFile(cssOutPath, cssFile.code);
            }
          } catch (err) {
            console.error(`Failed to compile Vue SFC ${file}:`, err.message);
          }
        } else if (filePath.match(/\.tsx?$/)) {
          // compile only that TS/TSX file
          const file = path.basename(filePath);
          const outName = file.replace(/\.tsx?$/, '.js');
          const outPath = path.join(distDir, outName);
          try {
            const source = fs.readFileSync(filePath, 'utf-8');
            const transpiled = ts.transpileModule(source, {
              compilerOptions: {
                target: ts.ScriptTarget.ES2020,
                module: ts.ModuleKind.ESNext,
                jsx: ts.JsxEmit.ReactJSX,
                jsxImportSource: 'react',
                sourceMap: true,
                skipLibCheck: true,
              },
              fileName: file,
            });
            writeTextFile(outPath, transpiled.outputText);
          } catch (err) {
            console.error(`Failed to compile ${file}:`, err.message);
          }
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
