import { execFileSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';
const baseline = JSON.parse(await readFile(new URL('../docs/history-baseline.json', import.meta.url), 'utf8'));
for (const [repo, refs] of Object.entries(baseline)) {
  for (const [branch, sha] of Object.entries(refs)) {
    execFileSync('git', ['merge-base', '--is-ancestor', sha, 'HEAD']);
    const missing = execFileSync('git', ['rev-list', sha, '--not', 'HEAD'], { encoding:'utf8' }).trim();
    if (missing) throw new Error(repo + '/' + branch + ': unreachable commits');
    console.log(repo + '/' + branch + ': preserved ' + sha);
  }
}
