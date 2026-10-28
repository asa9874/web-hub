import assert from 'node:assert/strict';
import { mkdtemp, writeFile, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, dirname, resolve, basename } from 'node:path';
import { environment, plan, runTask } from './academy-check.mjs';

assert.equal(plan([]).run, false);
assert.equal(plan([]).tasks.length, 1);
assert.equal(plan(['--tier', 'integration']).tasks.length, 2);
const regression = plan(['--tier', 'regression']);
assert.equal(regression.tasks.length, 3);
assert.deepEqual(regression.tasks[2].env, { AI_SKIP_BATCH: '1' });
const stress = plan(['--tier', 'stress', '--count', '100', '--days', '30', '--run']);
assert.equal(stress.run, true);
assert.deepEqual(stress.tasks[0].env, { MEMORY_BATCH: '1', MEMORY_COUNT: '100', MEMORY_DAYS: '30' });
for (const args of [
  ['--tier', 'stress'], ['--tier', 'stress', '--count', '100'],
  ['--tier', 'stress', '--count', '101', '--days', '30'],
  ['--tier', 'stress', '--count', '1.5', '--days', '30'],
  ['--tier', 'stress', '--count', '10', '--days', '0'],
  ['--tier', 'fast', '--days', '30'], ['--tier', 'bogus'],
  ['--run', '--run'], ['--tier'], ['--shell', 'anything'],
]) assert.throws(() => plan(args));
const inherited = { PATH: 'keep', MEMORY_BATCH: '1', MEMORY_LONG_REPLAY: '30', AI_BATCH_COUNT: '100', AI_SKIP_BATCH: '1' };
assert.deepEqual(environment({}, inherited), { PATH: 'keep' });
assert.equal(inherited.MEMORY_BATCH, '1');
assert.equal(environment({ MEMORY_BATCH: '1' }, inherited).MEMORY_BATCH, '1');

const directory = await mkdtemp(join(tmpdir(), 'academy-check-'));
try {
  await writeFile(join(directory, 'pass.mjs'), "console.log('x'.repeat(20000));console.error('stderr-kept');");
  const pass = await runTask({ script: 'pass.mjs', env: {} }, directory, directory);
  assert.equal(pass.exitCode, 0);
  assert(pass.outputBytes > 20000);
  assert(pass.tail.length <= 8000);
  const fullLog = await readFile(pass.log, 'utf8');
  assert(fullLog.includes('stderr-kept'));
  assert(fullLog.includes('x'.repeat(20000)));
  assert.equal(Buffer.byteLength(fullLog), pass.outputBytes);
  await writeFile(join(directory, 'fail.mjs'), "console.error('intentional-fixture-failure');process.exitCode=7;");
  const fail = await runTask({ script: 'fail.mjs', env: {} }, directory, directory);
  assert.equal(fail.exitCode, 7);
  assert(fail.tail.includes('intentional-fixture-failure'));
  const missing = await runTask({ script: 'missing.mjs', env: {} }, directory, directory);
  assert.notEqual(missing.exitCode, 0);
  console.log(JSON.stringify({ checks: 'plans, validation, inherited flags, stdout/stderr, failure, missing script', fixtureOutputBytes: pass.outputBytes, retainedTailCharacters: pass.tail.length }));
} finally {
  assert.equal(dirname(resolve(directory)), resolve(tmpdir()));
  assert(basename(directory).startsWith('academy-check-'));
  await rm(directory, { recursive: true, force: true });
}
console.log('Academy workflow checks passed (development runner only; no game simulation).');
