import { spawn } from 'node:child_process';
import { execFileSync } from 'node:child_process';
import { mkdir, readFile, writeFile, copyFile } from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import { finished } from 'node:stream/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const flags = new Set(['--tier', '--count', '--days', '--run']);
export function plan(args) {
  const options = {};
  for (let i = 0; i < args.length; i++) {
    const key = args[i];
    if (!flags.has(key) || Object.hasOwn(options, key)) throw Error(`Unknown/duplicate option: ${key}`);
    if (key === '--run') options[key] = true;
    else {
      const value = args[++i];
      if (!value || value.startsWith('--')) throw Error(`Missing value: ${key}`);
      options[key] = value;
    }
  }
  const tier = options['--tier'] ?? 'fast';
  if (!['fast', 'integration', 'regression', 'stress'].includes(tier)) throw Error('Invalid tier');
  const tasks = [{ script: 'scripts/test-academy-memory.mjs', env: {} }];
  if (tier === 'stress') {
    for (const [key, max] of [['--count', 100], ['--days', 1440]]) {
      if (!/^\d+$/.test(options[key] ?? '') || Number(options[key]) < 1 || Number(options[key]) > max) {
        throw Error(`Stress requires ${key}: integer 1..${max}`);
      }
    }
    tasks[0].env = { MEMORY_BATCH: '1', MEMORY_COUNT: options['--count'], MEMORY_DAYS: options['--days'] };
  } else {
    if (options['--count'] || options['--days']) throw Error('Count/days are stress-only');
    if (tier !== 'fast') tasks.push({ script: 'scripts/test-academy-interactions.mjs', env: {} });
    if (tier === 'regression') tasks.push({ script: 'scripts/test-academy-ai.mjs', env: { AI_SKIP_BATCH: '1' } });
  }
  return { tier, run: Boolean(options['--run']), tasks };
}

export function environment(extra, inherited = process.env) {
  const env = { ...inherited };
  for (const key of ['MEMORY_BATCH', 'MEMORY_COUNT', 'MEMORY_DAYS', 'MEMORY_LONG_REPLAY', 'AI_BATCH_COUNT', 'AI_SKIP_BATCH','INTERACTION_BATCH','INTERACTION_COUNT','INTERACTION_MINUTES','WORLD_EVENT_COUNT','WORLD_EVENT_DAYS','WORLD_EVENT_REPLAY','WORLD_EVENT_STRESS','WORLD_EVENT_STRESS_PROFILE','ACADEMY_BROWSER_CASE','ACADEMY_CHARACTER_CASE','ACADEMY_KNOWLEDGE_CASE','ACADEMY_SOCIAL_CASE','ACADEMY_STATUS_CASE','NPC_TEST_CASE']) delete env[key];
  return { ...env, ...extra };
}

// Full streams go to disk; a bounded tail remains available for a failure summary.
export async function runTask(task, directory, cwd = root) {
  await mkdir(directory, { recursive: true });
  const started = performance.now(), path = resolve(directory, `${task.script.split('/').pop()}.log`);
  const log = createWriteStream(path);
  let tail = '';
  let outputBytes = 0;
  const child = spawn(process.execPath, [task.script, ...(task.args ?? [])], { cwd, env: environment(task.env), shell: false, stdio: ['ignore', 'pipe', 'pipe'] });
  let timedOut=false;
  const timeout=task.timeoutMs?setTimeout(()=>{timedOut=true;child.kill();},task.timeoutMs):undefined;
  const capture = chunk => { outputBytes += chunk.length; tail = (tail + chunk.toString()).slice(-8000); };
  child.stdout.on('data', capture); child.stderr.on('data', capture);
  child.stdout.pipe(log, { end: false }); child.stderr.pipe(log, { end: false });
  let logError;
  log.on('error', error => { logError = error; child.kill(); });
  const result = await new Promise(resolveResult => {
    child.once('error', error => resolveResult({ exitCode: null, error: error.message }));
    child.once('close', (exitCode, signal) => resolveResult({ exitCode, signal }));
  });
  if(timeout)clearTimeout(timeout);
  if(timedOut)result.error=`Task timeout after ${task.timeoutMs}ms`;
  log.end();
  try { await finished(log); } catch (error) { logError ??= error; }
  if (logError) result.error = logError.message;
  return { ...task, ...result, elapsedMs: Math.round(performance.now() - started), outputBytes, log: path, tail: tail.split('\n').slice(-35).join('\n') };
}

export async function main(args) {
  const selected = plan(args);
  console.log(JSON.stringify({ ...selected, note: 'Memory presets only; add affected checks and build separately. No automatic retries.' }, null, 2));
  if (!selected.run) return;
  const directory = resolve(root, 'test-results/academy-check', new Date().toISOString().replace(/[:.]/g, '-') + `-${process.pid}`);
  await mkdir(directory, { recursive: true });
  const git = args => execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim();
  const receipt = { startedAt: new Date().toISOString(), node: process.version, head: git(['rev-parse', 'HEAD']), dirty: git(['status', '--short']), tier: selected.tier, steps: [] };
  for (const task of selected.tasks) {
    console.log(`Running ${task.script}; logs: ${directory}`);
    const result = await runTask(task, directory);
    const { tail, ...record } = result;
    receipt.steps.push(record);
    await writeFile(resolve(directory, 'receipt.json'), JSON.stringify(receipt, null, 2));
    console.log(`${task.script}: ${result.exitCode === 0 && !result.error ? 'PASS' : 'FAIL'} (${result.elapsedMs}ms, ${result.outputBytes} output bytes)`);
    if (result.exitCode !== 0 || result.error) {
      console.error(result.error ?? tail); process.exitCode = 1; return;
    }
  }
  if (selected.tier === 'stress') {
    const source = resolve(root, '.build-projects/memory-report.json');
    const report = JSON.parse(await readFile(source, 'utf8'));
    if (report.count !== Number(selected.tasks[0].env.MEMORY_COUNT) || report.days !== Number(selected.tasks[0].env.MEMORY_DAYS)) throw Error('Stress report does not match request');
    await copyFile(source, resolve(directory, 'memory-report.json'));
  }
  console.log(`Receipt: ${resolve(directory, 'receipt.json')}`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main(process.argv.slice(2)).catch(error => { console.error(error.message); process.exitCode = 1; });
}
