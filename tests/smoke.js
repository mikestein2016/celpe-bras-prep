// Browser smoke test for the study site. Visits every guide, task, genre and practice page,
// taps a highlight, runs one round of every drill mode, exports progress, checks refresh and
// horizontal overflow at phone width. Prints NO ERRORS on success.
// Usage: node tests/smoke.js [baseUrl]   (default: local index.html; pass the Pages URL to test live)
// Takes 3-5 minutes; run it in the background. Screenshots land in tests/shots/ (gitignored).
let chromium;
try { ({ chromium } = require('playwright')); } catch (e) { ({ chromium } = require('/Users/mike/Documents/GitHub/AuthorScratch/node_modules/playwright')); }
const path = require('path');
if (process.argv.includes('--help')) { console.log(require('fs').readFileSync(__filename, 'utf8').split('\n').slice(0, 5).join('\n')); process.exit(0); }
const OUT = path.join(__dirname, 'shots');
require('fs').mkdirSync(OUT, { recursive: true });
const base = process.argv[2] || 'file:///Users/mike/Documents/GitHub/celpe-bras-prep/index.html';

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, acceptDownloads: true });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
  const go = async (hash, shot) => {
    await page.goto(base + hash); await page.waitForTimeout(250);
    if (shot) await page.screenshot({ path: path.join(OUT, shot + '.png'), fullPage: false });
    const h1 = await page.locator('h1').first().textContent().catch(() => '(no h1)');
    console.log(hash || '#/', '→', h1);
  };
  await go('#/', 'home');
  await go('#/guia', 'guia'); await go('#/guia/aberturas', 'aberturas');
  const data = await page.evaluate(() => ({
    genres: (CB.genres || []).map(g => g.id), tasks: (CB.tasks || []).map(t => t.id),
    prompts: (CB.prompts || []).map(p => p.id), drills: (CB.drills || []).length
  }));
  console.log(JSON.stringify(data));
  for (const id of data.tasks.concat(data.genres)) {
    await go('#/guia/' + id, 'guia-' + id);
    const marks = await page.locator('mark.hl').count();
    const notes = await page.locator('.notes li').count();
    if (!marks || !notes) errors.push(id + ': marks=' + marks + ' notes=' + notes);
  }
  // tap a highlight
  if (data.genres[0]) {
    await go('#/guia/' + data.genres[0]);
    await page.locator('mark.hl').first().click();
    await page.waitForTimeout(150);
    if (await page.locator('#sheet').isHidden()) errors.push('sheet did not open');
    await page.screenshot({ path: path.join(OUT, 'sheet.png') });
    await page.locator('#sheet-close').click();
  }
  await go('#/pratica', 'pratica');
  for (const id of data.prompts) await go('#/pratica/' + id);
  if (data.prompts[0]) {
    await go('#/pratica/' + data.prompts[0], 'prompt');
    await page.click('#t-start'); await page.waitForTimeout(1200); await page.click('#t-start');
    const t = await page.textContent('#t-digits'); console.log('timer after pause:', t);
    await page.click('#p-done'); await page.waitForTimeout(100);
    console.log('done button:', await page.textContent('#p-done'));
  }
  // drills: play a full mixed round, answering deliberately wrong sometimes
  await go('#/treino', 'treino');
  const modes = await page.evaluate(() => [...new Set(CB.drills.map(d => d.mode))]);
  for (const mode of modes.concat('mix')) {
    await go('#/treino/' + mode);
    let guard = 0;
    while (guard++ < 40) {
      if (await page.locator('#again').count()) break;
      if (await page.locator('.tl.can').count() && await page.locator('#acc-check').count()) {
        // tap first accentable letter, pick last option, check
        await page.locator('.tl.can').first().click();
        const tray = page.locator('#tray button');
        if (await tray.count()) await tray.last().click();
        await page.click('#acc-check');
      } else if (await page.locator('.opt:not([disabled])').count()) {
        await page.locator('.opt:not([disabled])').first().click();
      } else if (await page.locator('#acc-check').count()) {
        await page.click('#acc-check');
      }
      if (guard === 2 && mode === 'acento') await page.screenshot({ path: path.join(OUT, 'drill-acento.png') });
      if (guard === 2 && mode === 'genero') await page.screenshot({ path: path.join(OUT, 'drill-genero.png') });
      await page.locator('#next').click();
      await page.waitForTimeout(60);
    }
    console.log(mode, 'round end:', await page.locator('.score-big').textContent().catch(() => 'NOT REACHED'));
    if (mode === 'mix') await page.screenshot({ path: path.join(OUT, 'round-end.png'), fullPage: true });
  }
  // trilha: path, every lesson intro, and every atomic step of every lesson rendered from a synthetic run
  await go('#/', 'trilha');
  const lessons = await page.evaluate(() => (CB.lessons || []).map(L => {
    const keys = [];
    (function walk(steps, base) { steps.forEach((s, i) => { const k = base + ':' + i; if (s.type === 'pick') walk(s.from, k); else if (!['drills', 'dictation', 'formal'].includes(s.type)) keys.push(k); }); })(L.steps, 'L:' + L.id);
    return { id: L.id, keys };
  }));
  let stepCount = 0;
  for (const L of lessons) {
    await go('#/trilha/' + L.id);
    await page.evaluate(([id, keys]) => {
      const s = JSON.parse(localStorage.getItem('cbprep.v1') || '{}'); s.runs = s.runs || {};
      s.runs[id] = { items: keys.map(k => ({ k })), i: keys.length - 1, ans: {}, retried: {} };
      localStorage.setItem('cbprep.v1', JSON.stringify(s));
    }, [L.id, L.keys]);
    await page.reload(); await page.waitForTimeout(100);
    for (let k = 1; k <= L.keys.length; k++) {
      await page.goto(base + '#/trilha/' + L.id + '/' + k); await page.waitForTimeout(40);
      const txt = await page.locator('#step').textContent().catch(() => '');
      if (!txt || /no longer exists|Unknown step|not found/.test(txt)) errors.push(L.id + ' step ' + k + ' (' + L.keys[k - 1] + ') did not render');
      const ov = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      if (ov > 1) errors.push('horizontal overflow ' + ov + 'px on ' + L.id + '/' + k);
      stepCount++;
    }
    await page.goto(base + '#/'); await page.waitForTimeout(40);
    await page.evaluate(id => { const s = JSON.parse(localStorage.getItem('cbprep.v1')); delete s.runs[id]; localStorage.setItem('cbprep.v1', JSON.stringify(s)); }, L.id);
    await page.reload(); await page.waitForTimeout(60);
  }
  console.log('lessons', lessons.length, 'steps rendered', stepCount);
  await go('#/treino/surpresa', 'surpresa');
  if (!/surpresa\/1$/.test(await page.evaluate(() => location.hash))) errors.push('surpresa did not start at step 1');
  await go('#/treino/progresso', 'progresso');
  const [dl] = await Promise.all([page.waitForEvent('download'), page.click('[data-backup="save"]')]);
  const f = path.join(OUT, 'export.json'); await dl.saveAs(f);
  const ex = JSON.parse(require('fs').readFileSync(f, 'utf8'));
  if (!ex.state || !ex.state.cards) errors.push('backup has no state');
  console.log('export: rounds', ex.rounds, 'misses', ex.misses.length, 'overall', JSON.stringify(ex.overall));
  // refresh keeps place
  await go('#/treino/genero'); await page.reload(); await page.waitForTimeout(200);
  console.log('after reload h1/eyebrow:', await page.locator('.eyebrow').first().textContent());
  // horizontal overflow check on every main route
  for (const h of ['#/', '#/guia', '#/pratica', '#/treino', '#/treino/progresso', '#/treino/surpresa'].concat(data.genres.map(g => '#/guia/' + g))) {
    await page.goto(base + h); await page.waitForTimeout(120);
    const ov = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    if (ov > 1) errors.push('horizontal overflow ' + ov + 'px on ' + h);
  }
  console.log(errors.length ? 'ERRORS:\n' + errors.join('\n') : 'NO ERRORS');
  await browser.close();
})();
