// Orchestrator to run `pnpm pre` (webpack) and `pnpm dev` together with watch support.
// - Starts webpack in watch mode (without changing package.json)
// - Waits for initial client build artifacts before starting the dev server
// - Restarts the dev server on subsequent rebuilds
// - Forwards signals and cleans up child processes

import { spawn } from 'node:child_process';
import { stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Paths that indicate a successful client build
const buildOutputs = [
	path.resolve(__dirname, 'public', 'main.js'),
	path.resolve(__dirname, 'public', 'react-client-manifest.json'),
];

function prefix(prefixText, colorCode) {
	const reset = '\u001b[0m';
	return (line) => `${colorCode}${prefixText}${reset} ${line}`;
}

const colors = {
	blue: '\u001b[34m',
	green: '\u001b[32m',
	yellow: '\u001b[33m',
	magenta: '\u001b[35m',
	gray: '\u001b[90m',
};

/**
 * Wait for all files in buildOutputs to exist and be stat'able.
 */
async function waitForInitialBuild(timeoutMs = 60_000, pollMs = 250) {
	const start = Date.now();
	while (Date.now() - start < timeoutMs) {
		const ok = await Promise.all(
			buildOutputs.map(async (p) => {
				try {
					if (!existsSync(p)) return false;
					await stat(p);
					return true;
				} catch {
					return false;
				}
			})
		);
		if (ok.every(Boolean)) return true;
		await new Promise((r) => setTimeout(r, pollMs));
	}
	return false;
}

let serverProc = null;
let shuttingDown = false;

function startServer() {
	if (serverProc) return; // already running
	const child = spawn('node', ['--conditions', 'react-server', 'server.mjs'], {
		cwd: __dirname,
		env: process.env,
		stdio: ['ignore', 'pipe', 'pipe'],
	});
	serverProc = child;
	const pfx = prefix('[dev]', colors.green);
	child.stdout.on('data', (d) => process.stdout.write(pfx(String(d).trimEnd()) + '\n'));
	child.stderr.on('data', (d) => process.stderr.write(pfx(String(d).trimEnd()) + '\n'));
	child.on('exit', (code, signal) => {
		serverProc = null;
		if (!shuttingDown) {
			const why = signal ? `signal ${signal}` : `code ${code}`;
			console.log(prefix('[orchestrator]', colors.magenta)(`dev server exited (${why})`));
		}
	});
}

function stopServer() {
	return new Promise((resolve) => {
		if (!serverProc) return resolve();
		const child = serverProc;
		serverProc = null;
		child.once('exit', () => resolve());
		child.kill('SIGTERM');
		// force kill after grace period
		setTimeout(() => child.kill('SIGKILL'), 5000).unref();
	});
}

function startWebpackWatch() {
	// Use local webpack CLI with watch mode and our config
	const webpackBin = path.resolve(__dirname, 'node_modules/.bin/webpack');
	const child = spawn(webpackBin, ['--watch', '--config', 'webpack.config.mjs'], {
		cwd: __dirname,
		env: process.env,
		stdio: ['ignore', 'pipe', 'pipe'],
	});

	const pfx = prefix('[webpack]', colors.blue);
	let firstBuildStarted = false;
	let firstBuildDone = false;

	const handleOutput = (buf) => {
		const text = String(buf);
		// echo output with prefix
		for (const line of text.split(/\r?\n/)) {
			if (!line) continue;
			process.stdout.write(pfx(line) + '\n');
		}
		// Heuristics: detect build cycles in webpack log
		if (/\bcompiled successfully\b/i.test(text) || /\bCompilation finished\b/i.test(text) || /\bassets? emitted\b/i.test(text)) {
			if (!firstBuildDone) {
				firstBuildDone = true;
			} else {
				// subsequent build: restart server
				void (async () => {
					await stopServer();
					startServer();
				})();
			}
		} else if (/\bcompiling\b|\bbuild\b/i.test(text)) {
			if (!firstBuildStarted) firstBuildStarted = true;
		}
	};

	child.stdout.on('data', handleOutput);
	child.stderr.on('data', (d) => process.stderr.write(pfx(String(d).trimEnd()) + '\n'));

	child.on('exit', (code, signal) => {
		if (!shuttingDown) {
			const why = signal ? `signal ${signal}` : `code ${code}`;
			console.log(prefix('[orchestrator]', colors.magenta)(`webpack exited (${why})`));
		}
	});

	return child;
}

async function main() {
	const orch = prefix('[orchestrator]', colors.magenta);
	console.log(orch('starting webpack in watch mode...'));
	const webpackProc = startWebpackWatch();

	// Wait for initial build artifacts
	const ok = await waitForInitialBuild(120_000, 200);
	if (!ok) {
		console.error(orch('timed out waiting for initial build artifacts.'));
	} else {
		console.log(orch('initial build detected. starting dev server...'));
		startServer();
	}

	const shutdown = async () => {
		if (shuttingDown) return;
		shuttingDown = true;
		console.log(orch('shutting down...'));
		await stopServer();
		try { webpackProc.kill('SIGINT'); } catch {}
		setTimeout(() => process.exit(0), 100).unref();
	};

	process.on('SIGINT', shutdown);
	process.on('SIGTERM', shutdown);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
