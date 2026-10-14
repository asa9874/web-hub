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
    if (project.id === 'forgotten-witch') {
      await page.waitForFunction(() => document.querySelector('.wt-game canvas')?.dataset.theater);
      assert.equal(await page.locator('.wt-game canvas').count(), 1);
      await page.getByRole('button', { name:'테스트',exact:true }).click();
      await page.waitForFunction(() => JSON.parse(document.querySelector('.wt-game canvas').dataset.theater).mode === 'explore');
    }
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
    if (['void-game', 'deck-game'].includes(project.id)) {
      const canvas = page.locator('canvas');
      await canvas.waitFor({ state:'visible' });
      await page.waitForTimeout(800);
      const size = await canvas.evaluate(el => ({ width:el.width, height:el.height }));
      const isVoid = project.id === 'void-game';
      assert.equal(size.width, isVoid ? 480 : 1280);
      assert.equal(size.height, isVoid ? 640 : 720);
      const box = await canvas.boundingBox();
      await page.mouse.click(box.x + box.width * (isVoid ? 182/480 : 1040/1280), box.y + box.height * (isVoid ? 487/640 : 380/720));
      await page.waitForTimeout(1000);
      if (isVoid) { await page.keyboard.down('ArrowLeft'); await page.waitForTimeout(150); await page.keyboard.up('ArrowLeft'); }
      await page.screenshot({ path:path.join(root, '.build-projects/' + project.id + '.png') });
    }
    if (project.id === 'text-game') {
      await page.locator('.choice-btn').first().waitFor({ state:'visible' });
      const before = await page.locator('#scene-description').innerText();
      await page.locator('.choice-btn').first().click();
      await page.waitForFunction(previous => document.getElementById('scene-description').innerText !== previous, before);
      await page.locator('#btn-map').click();
      await page.locator('#map-overlay').waitFor({ state:'visible' });
      await page.locator('.map-node').first().click();
      await page.locator('#map-enter-int').click();
      await page.locator('#map-interior-view').waitFor({ state:'visible' });
      await page.locator('#map-back-btn').click();
      await page.locator('#map-close-btn').click();
      await page.screenshot({ path:path.join(root, '.build-projects/text-game.png') });
    }
    if (project.id === 'rhythm-game') { await page.keyboard.press('ArrowUp'); }
    if (project.id === 'hub') {
      assert(await page.evaluate(async () => {
        await document.fonts.ready;
        return document.fonts.check('16px "Hub Kirang"') && document.fonts.check('16px "Hub Gowun"');
      }), 'Local Korean fonts failed to load');
      await page.screenshot({ path:path.join(root, '.build-projects/hub.png') });
      const titles = await page.locator('body').innerText();
      for (const p of projects) assert(titles.includes(p.title), 'Missing hub card ' + p.id);
      assert.equal(await page.locator('.hub-card').count(), projects.length);
      assert.equal(await page.locator('.hub-section').count(), 3);
      const filters = page.getByRole('group', { name:'프로젝트 카테고리' });
      const search = page.getByRole('searchbox', { name:'프로젝트 검색' });
      const expectCards = count => page.waitForFunction(expected => document.querySelectorAll('.hub-card').length === expected, count);
      for (const [category, label] of [['game','게임'], ['tool','도구'], ['experiment','실험']]) {
        await filters.getByRole('button', { name:new RegExp('^' + label) }).click();
        await expectCards(projects.filter(p => p.category === category).length);
        assert.equal(await page.locator('.hub-section').count(), 1);
        assert.equal(await page.locator('.hub-section').getAttribute('data-category'), category);
      }
      await filters.getByRole('button', { name:/^전체/ }).click();
      await search.fill('  tExT-GaMe  ');
      await expectCards(1);
      assert((await page.locator('.hub-card').getAttribute('href')).endsWith('/games/text-game/'));
      await search.fill('VOID 모놀리스');
      await expectCards(1);
      assert((await page.locator('.hub-card').getAttribute('href')).endsWith('/games/void-game/'));
      await filters.getByRole('button', { name:/^도구/ }).click();
      await expectCards(0);
        await page.getByRole('heading', { name:'검색 결과가 없습니다' }).waitFor();
      await page.getByRole('button', { name:'검색어 지우기' }).click();
      await expectCards(projects.filter(p => p.category === 'tool').length);
      await search.fill('no-such-project-12345');
      await expectCards(0);
      await page.getByRole('button', { name:'전체 프로젝트 보기' }).click();
      await expectCards(projects.length);
      await filters.getByRole('button', { name:/^게임/ }).click();
      await search.fill('deck-game');
      await expectCards(1);
      await page.waitForFunction(() => new URL(location.href).searchParams.get('category') === 'game' && new URL(location.href).searchParams.get('q') === 'deck-game');
      await page.reload({ waitUntil:'load' });
      await expectCards(1);
      assert.equal(await search.inputValue(), 'deck-game');
      assert.equal(await filters.getByRole('button', { name:/^게임/ }).getAttribute('aria-pressed'), 'true');
      await page.locator('.hub-card').click();
      await page.locator('canvas').waitFor({ state:'visible' });
      await page.goBack({ waitUntil:'load' });
      await expectCards(1);
      assert.equal(await search.inputValue(), 'deck-game');
      await page.goto(origin + '/web-hub/', { waitUntil:'load' });
      await expectCards(projects.length);
      await search.fill('all');
      await page.waitForFunction(() => new URL(location.href).searchParams.get('q') === 'all' && document.getElementById('hub-search')?.value === 'all');
      assert.equal(await search.inputValue(), 'all');
      assert.equal(new URL(page.url()).searchParams.get('q'), 'all');
      await page.goto(origin + '/web-hub/', { waitUntil:'load' });
      await expectCards(projects.length);
      for (const id of ['networkquiz', 'memory-flip', 'void-game', 'text-game', 'deck-game']) {
        const project = projects.find(p => p.id === id);
        const target = '/web-hub' + project.path;
        await page.locator('a[href="' + target + '"]').click();
        await page.waitForURL(origin + target);
        if (project.type === 'react') await page.waitForFunction(() => document.getElementById('root')?.children.length > 0);
        else await page.locator(id === 'text-game' ? '#game-container' : ['void-game','deck-game'].includes(id) ? 'canvas' : '.startbox').waitFor({ state:'visible' });
        await page.goto(origin + '/web-hub/', { waitUntil:'load' });
      }
      await page.setViewportSize({ width:390, height:844 });
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), 'Mobile grid overflow');
      await page.screenshot({ path:path.join(root, '.build-projects/hub-mobile.png'), fullPage:true });
      await page.screenshot({ path:path.join(root, '.build-projects/hub-mobile-top.png') });
      await filters.getByRole('button', { name:/^게임/ }).click();
      await search.fill('덱');
      await expectCards(1);
      assert((await page.locator('.hub-card').getAttribute('href')).endsWith('/games/deck-game/'));
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), 'Mobile search overflow');
      await page.screenshot({ path:path.join(root, '.build-projects/hub-mobile-search.png') });
    }
    if (project.id === 'ai-prompts') {
      const artworks = JSON.parse(await readFile(path.join(root, 'src/AIPrompts/artworks.json'), 'utf8'));
      assert.equal(await page.locator('.pg-category-card').count(), 2);
      await page.screenshot({ path:path.join(root, '.build-projects/ai-prompts-categories.png') });
      await page.getByRole('link', { name:/초현실주의/ }).click();
      await page.getByRole('heading', { name:'초현실주의', exact:true }).waitFor();
      await page.locator('.pg-artwork').first().waitFor();
      await page.context().grantPermissions(['clipboard-read','clipboard-write'], { origin });
      const surrealWorks = artworks.filter(work => work.category === 'surrealism');
      const animationWorks = artworks.filter(work => work.category === 'animation');
      const scenes = animationWorks.map(work => work.prompt.match(/Scene: ([\s\S]*?)(?=\n(?:Composition|Style):|$)/)?.[1]);
      assert(scenes.every(Boolean), 'Each style must record its actual scene prompt');
      assert.equal(new Set(scenes).size, animationWorks.length, 'Each animation style needs its own scene');
      assert.equal(await page.locator('.pg-artwork').count(), surrealWorks.length);
      const verifyArtwork = async artwork => {
        const article = page.getByRole('article', { name:artwork.title, exact:true });
        assert.equal(await article.locator('.pg-prompt').textContent(), artwork.prompt);
        await article.locator('.pg-image-button img').evaluate(img => img.decode());
        await article.getByRole('button', { name:'프롬프트 복사' }).click();
        await article.getByRole('button', { name:'복사 완료' }).waitFor();
        const copied = await page.evaluate(() => navigator.clipboard.readText());
        assert.equal(copied.replace(/\r\n/g, '\n'), artwork.prompt);
        await article.getByRole('button', { name:artwork.title + ' 크게 보기' }).click();
        await article.locator('dialog[open]').waitFor();
        await page.keyboard.press('Escape');
        assert.equal(await article.locator('dialog[open]').count(), 0);
        const download = page.waitForEvent('download');
        await article.getByRole('link', { name:'이미지 저장' }).click();
        assert.equal((await download).suggestedFilename(), artwork.id + (artwork.originalImage ? '.png' : '.webp'));
        if (artwork.stylePrompt) {
          assert(artwork.prompt.includes(artwork.stylePrompt), 'Style snippet must match the actual generation prompt');
          await article.getByRole('button', { name:'그림체만 복사' }).click();
          await article.getByRole('button', { name:'그림체 복사 완료' }).waitFor();
          if (artwork.qualityPrompt) assert(artwork.prompt.includes(artwork.qualityPrompt), 'Quality conditions must match the submitted prompt');
          const expectedStyle = [artwork.stylePrompt, artwork.qualityPrompt && 'Clean rendering: ' + artwork.qualityPrompt].filter(Boolean).join('\n\n');
          assert.equal((await page.evaluate(() => navigator.clipboard.readText())).replace(/\r\n/g, '\n'), expectedStyle);
        }
      };
      for (const artwork of surrealWorks) await verifyArtwork(artwork);
      await page.screenshot({ path:path.join(root, '.build-projects/ai-prompts-desktop.png'), fullPage:true });
      const navigator = page.getByRole('navigation', { name:'작품 바로가기', includeHidden:true });
      await page.evaluate(() => window.scrollTo(0, 200));
      await navigator.waitFor({ state:'visible' });
      await navigator.getByRole('button', { name:'유리 동백' }).click();
      await page.waitForFunction(() => {
        const top = document.getElementById('artwork-camellia').getBoundingClientRect().top;
        return top >= 0 && top < innerHeight * .45;
      });
      assert.equal(await navigator.getByRole('button', { name:'유리 동백' }).getAttribute('aria-current'), 'location');
      await page.mouse.move(5, 5);
      await navigator.getByRole('button', { name:'유리 동백' }).evaluate(button => button.blur());
      await navigator.waitFor({ state:'hidden' });
      await page.evaluate(() => window.scrollBy(0, -80));
      await navigator.waitFor({ state:'visible' });
      await navigator.getByRole('button', { name:'잔향', exact:true }).click();
      await page.waitForFunction(() => Math.abs(document.getElementById('artwork-ribbon').getBoundingClientRect().top - 24) < 3);
      await page.getByRole('link', { name:/애니메이션/ }).click();
      await page.getByRole('heading', { name:'애니메이션', exact:true }).waitFor();
      await page.locator('.pg-artwork').first().waitFor();
      assert.equal(await page.locator('.pg-artwork').count(), animationWorks.length);
      assert.equal(await page.locator('.pg-scroll-nav button').count(), animationWorks.length);
      for (const artwork of animationWorks) await verifyArtwork(artwork);
      await page.screenshot({ path:path.join(root, '.build-projects/ai-prompts-animation.png'), fullPage:true });
      await page.reload({ waitUntil:'load' });
      await page.getByRole('heading', { name:'애니메이션', exact:true }).waitFor();
      assert.equal(new URL(page.url()).searchParams.get('category'), 'animation');
      for (const width of [768,390,320]) {
        await page.setViewportSize({ width, height:900 });
        assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'Animation overflow at ' + width);
      }
      await page.setViewportSize({ width:390, height:844 });
      await page.screenshot({ path:path.join(root, '.build-projects/ai-prompts-animation-mobile.png'), fullPage:true });
      await page.setViewportSize({ width:1440, height:1000 });
      await page.getByRole('link', { name:/초현실주의/ }).click();
      await page.reload({ waitUntil:'load' });
      await page.getByRole('heading', { name:'초현실주의', exact:true }).waitFor();
      assert.equal(new URL(page.url()).searchParams.get('category'), 'surrealism');
      for (const width of [768,390,320]) {
        await page.setViewportSize({ width, height:900 });
        assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'Gallery overflow at ' + width);
      }
      await page.setViewportSize({ width:390, height:844 });
      await page.screenshot({ path:path.join(root, '.build-projects/ai-prompts-mobile.png'), fullPage:true });
      await page.getByRole('link', { name:'web hub' }).click();
      await page.locator('a.hub-card[href="/web-hub/ai-prompts/"]').click();
      await page.getByRole('heading', { name:'AI그림 프롬프트', exact:true }).waitFor();
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
