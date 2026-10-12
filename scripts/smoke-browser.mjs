import { chromium } from 'playwright';
import { createServer } from 'node:http';
import { readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const projects = JSON.parse(await readFile(path.join(root, 'src/projects/projects.json'), 'utf8'));
const types = { '.html':'text/html; charset=utf-8', '.js':'text/javascript', '.css':'text/css', '.png':'image/png', '.svg':'image/svg+xml', '.mp3':'audio/mpeg', '.json':'application/json' };
// A strict static server detects missing directories/assets without SPA fallback.
const server = createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (!pathname.startsWith('/web-hub/')) { res.writeHead(404).end(); return; }
    let file = path.resolve(dist, '.' + pathname.slice('/web-hub'.length));
    if (file !== dist && !file.startsWith(dist + path.sep)) { res.writeHead(404).end(); return; }
    if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html');
    res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
    res.end(await readFile(file));
  } catch { res.writeHead(404).end('Not found'); }
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const origin = 'http://127.0.0.1:' + server.address().port;
const browser = await chromium.launch({ headless: true });
const results = [];
try {
  for (const project of [{ id:'hub', path:'/', type:'react' }, ...projects, ...['bettery','captcha'].map(name => ({id:'advertise-'+name, path:'/experiments/advertise/htmls/'+name+'.html', type:'fragment'}))]) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    const errors = [], missing = [], external = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('response', response => { if (response.status() >= 400) (response.url().startsWith(origin) ? missing : external).push(response.status() + ' ' + response.url()); });
    const response = await page.goto(origin + '/web-hub' + project.path, { waitUntil:'load' });
    assert.equal(response.status(), 200, project.id);
    await page.waitForTimeout(400);
    if (project.type === 'react') await page.waitForFunction(() => document.getElementById('root')?.children.length > 0);
    const starts = { 'memory-flip':'.EasyStart', 'rhythm-game':'.startbutton', 'computer-quiz':'.startbutton.easy', 'animation-quiz':'.startbutton', 'text-adventure':'.OpeningSkipBox', 'inspection-game':'.GameStartButton' };
    if (starts[project.id]) { await page.locator(starts[project.id]).click({ force:true }); await page.waitForTimeout(project.id === 'inspection-game' ? 3500 : 1200); }
    if (project.id === 'english-voca') { await page.locator('#btn1').click({ force:true }); await page.waitForTimeout(1300); }
    if (project.id === 'ai-art-museum') { await page.locator('img.lazy').first().click(); await page.waitForTimeout(300); }
    if (project.id === 'inspection-game') {
      await page.locator('.maingamebox').waitFor({ state:'visible', timeout:5000 });
      await page.screenshot({ path:path.join(root, '.build-projects/inspection.png') });
    }
    if (project.id === 'memory-flip') assert(await page.locator('.cardbox').evaluate(el => el.children.length > 0));
    if (project.id === 'rhythm-game') await page.locator('.gamebox').waitFor({ state:'visible' });
    if (project.id === 'avoid-game') { await page.keyboard.press('d'); }
    if (project.id === 'rhythm-game') { await page.keyboard.press('ArrowUp'); }
    if (project.id === 'hub') {
      await page.screenshot({ path:path.join(root, '.build-projects/hub.png') });
      const titles = await page.locator('body').innerText();
      for (const p of projects.filter(p => !p.hidden)) assert(titles.includes(p.title), 'Missing hub node ' + p.id);
    }
    const canvas = await page.locator('canvas').count();
    const broken = await page.evaluate(() => [...document.images].filter(img => img.getAttribute('src') && img.complete && img.naturalWidth === 0 && !/^https?:/.test(img.getAttribute('src'))).map(img => img.getAttribute('src')));
    if (project.type === 'static') {
      const findAudio = async dir => {
        const result = [];
        for (const entry of await (await import('node:fs/promises')).readdir(dir, { withFileTypes:true })) {
          const file = path.join(dir, entry.name);
          if (entry.isDirectory()) result.push(...await findAudio(file));
          else if (entry.name.endsWith('.mp3')) result.push(file);
        }
        return result;
      };
      const audioFiles = await findAudio(path.join(dist, project.path));
      for (const file of audioFiles) {
        const url = origin + '/web-hub/' + path.relative(dist, file).split(path.sep).join('/');
        const supported = await page.evaluate(url => new Promise(resolve => {
          const audio = new Audio(url);
          audio.onloadedmetadata = () => resolve(audio.duration > 0);
          audio.onerror = () => resolve(false);
          setTimeout(() => resolve(false), 5000);
        }), url);
        assert(supported, project.id + ': audio decode failed ' + file);
      }
    }
    await page.reload({ waitUntil:'load' });
    if (project.type === 'react') await page.waitForFunction(() => document.getElementById('root')?.children.length > 0);
    results.push({ id:project.id, canvas, errors:[...new Set(errors)], missing:[...new Set(missing)], broken:[...new Set(broken)], external:[...new Set(external)] });
    await page.close();
  }
  const page = await browser.newPage();
  await page.goto(origin + '/web-hub/#/network-quiz', { waitUntil:'load' });
  assert(page.url().endsWith('/web-hub/network-quiz'));
  await page.waitForFunction(() => document.getElementById('root')?.children.length > 0);
  await page.close();
  await writeFile(path.join(root, '.build-projects/browser-report.json'), JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results, null, 2));
  assert.equal(results.filter(r => r.errors.length || r.missing.length || r.broken.length).length, 0, 'Browser errors: see .build-projects/browser-report.json');
} finally { await browser.close(); await new Promise(resolve => server.close(resolve)); }
