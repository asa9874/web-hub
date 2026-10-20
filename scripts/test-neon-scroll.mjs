import { chromium } from 'playwright';
import assert from 'node:assert/strict';

// Focused scroll/modal regression; no unrelated game playthroughs.
const browser = await chromium.launch({ headless: true });
try {
  const page = await browser.newPage({ viewport: { width: 1366, height: 768 } });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.addInitScript(() => localStorage.setItem('neon-trader-settings-v1', JSON.stringify({ speed: 4, text: 1.3, muted: true })));
  await page.goto(`${process.env.NEON_TEST_URL || 'http://127.0.0.1:5178/web-hub'}/games/neon-trader/`);
  await page.getByRole('button', { name: '새 캠페인 →', exact: true }).click();
  await page.getByRole('button', { name: '메인으로', exact: true }).click();
  const saved = await page.evaluate(() => localStorage.getItem('neon-trader-campaign-v1'));
  assert(saved, 'A real campaign is saved before entering practice');
  await page.getByRole('button', { name: '75초 거래 연습', exact: true }).click();
  await page.getByRole('button', { name: '장 시작 →', exact: true }).click();
  await page.getByRole('button', { name: /↑ 매수/ }).click();
  await page.keyboard.press('Space');
  await page.getByRole('button', { name: /거래내역 \(/ }).click();
  for (const size of [{ width: 1366, height: 768 }, { width: 1920, height: 1080 }, { width: 900, height: 650 }, { width: 390, height: 740 }]) {
    await page.setViewportSize(size);
    await page.waitForTimeout(150);
    const dimensions = await page.evaluate(() => ({
      pageWidth: document.documentElement.scrollWidth,
      viewport: innerWidth,
      panels: [...document.querySelectorAll('.nt-order,.nt-position,.nt-history,.nt-news-list')].map(el => ({ name: el.className, width: el.clientWidth, content: el.scrollWidth })),
    }));
    assert(dimensions.pageWidth <= dimensions.viewport, JSON.stringify(dimensions));
    for (const panel of dimensions.panels) assert(panel.content <= panel.width + 1, `No horizontal panel scrollbar: ${JSON.stringify(panel)}`);
    await page.getByRole('button', { name: '설정', exact: true }).click();
    assert.equal(await page.evaluate(() => getComputedStyle(document.body).overflow), 'hidden');
    const dialog = page.getByRole('dialog', { name: '게임 설정' });
    await dialog.hover();
    const scrollBefore = await page.evaluate(() => window.scrollY);
    await page.mouse.wheel(0, 1400);
    await page.waitForTimeout(120);
    assert.equal(await page.evaluate(() => window.scrollY), scrollBefore, 'Dialog scrolling cannot move the page behind it');
    await page.getByLabel('텍스트 크기').scrollIntoViewIfNeeded();
    await page.keyboard.press('Tab');
    assert(await dialog.evaluate(el => el.contains(document.activeElement)), 'Keyboard focus stays in the modal');
    await page.keyboard.press('Escape');
    assert.equal(await page.evaluate(() => document.body.style.overflow), 'hidden', 'The remaining pause dialog keeps its scroll lock');
    await page.getByRole('button', { name: '거래 재개', exact: true }).click();
    assert.equal(await page.evaluate(() => document.body.style.overflow), '');
  }
  await page.setViewportSize({ width: 1366, height: 768 });
  await page.getByRole('dialog', { name: '하루 정산' }).waitFor({ timeout: 30000 });
  await page.getByRole('button', { name: '현금의 25%', exact: true }).click();
  await page.getByRole('button', { name: '빚 상환', exact: true }).click();
  await page.getByRole('button', { name: '연습 마치고 메인으로 →', exact: true }).click();
  assert.equal(await page.evaluate(() => localStorage.getItem('neon-trader-campaign-v1')), saved, 'Practice never overwrites the campaign');
  await page.getByRole('link', { name: '← WEB HUB', exact: true }).click();
  await page.locator('.hub').waitFor();
  assert.equal(await page.evaluate(() => document.body.style.overflow), '', 'Scroll lock is cleaned up on exit');
  assert.deepEqual(errors, []);
  console.log('Neon scroll: four layouts at 130% text, panel overflow, modal wheel/focus/escape, briefing exit, practice repayment/save isolation and hub cleanup passed.');
} finally {
  await browser.close();
}
