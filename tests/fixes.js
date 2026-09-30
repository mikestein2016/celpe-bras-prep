// Regression checks for the September 30 fixes: backup and restore, reset, stale runs, midnight due dates,
// accent tiles after reload, Ditado sentences without digits, the listening button, and the pace line.
// Usage: node tests/fixes.js [baseUrl]   Prints NO ERRORS on success.
let chromium;
try { ({ chromium } = require('playwright')); } catch (e) { ({ chromium } = require('/Users/mike/Documents/GitHub/AuthorScratch/node_modules/playwright')); }
const fs = require('fs'), path = require('path'), os = require('os');
const base = process.argv[2] || 'file://' + path.resolve(__dirname, '..', 'index.html');
const KEY = 'cbprep.v1';
(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, acceptDownloads: true });
  await ctx.addInitScript({ content: `window.__spoken = [];
    Object.defineProperty(window, 'speechSynthesis', { value: { getVoices: () => [{ lang: 'pt-BR', name: 'Teste' }], speak: (u) => window.__spoken.push(u.text), cancel: () => {}, onvoiceschanged: null } });
    window.SpeechSynthesisUtterance = function (t) { this.text = t; };` });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));
  page.on('dialog', d => d.accept());
  const go = async h => { await page.goto(base + h); await page.waitForTimeout(150); };
  const getSt = () => page.evaluate(k => JSON.parse(localStorage.getItem(k) || '{}'), KEY);
  const setSt = async s => { await page.evaluate(([k, v]) => localStorage.setItem(k, JSON.stringify(v)), [KEY, s]); await page.reload(); await page.waitForTimeout(150); };

  // 1. Empty device offers Restaurar.
  await go('#/');
  if (!/Nenhum progresso/.test(await page.locator('.today.backup').textContent().catch(() => ''))) errors.push('empty device: no restore strip');

  // 2. Answer a card; its due date falls on local midnight.
  await go('#/treino/genero');
  await page.locator('#drill .opt').first().click(); await page.waitForTimeout(100);
  let s = await getSt();
  const boxed = Object.values(s.cards).filter(c => c.due);
  const notMidnight = await page.evaluate(ds => ds.filter(d => { const x = new Date(d); return x.getHours() || x.getMinutes(); }), boxed.map(c => c.due));
  if (notMidnight.length) errors.push('due not at local midnight: ' + notMidnight.join(','));
  // An old 24-hour due date is moved to midnight on load.
  s.cards['ge-002'] = { box: 1, seen: 1, right: 1, wrong: 0, last: new Date().toISOString(), due: new Date(Date.now() + 20 * 3600e3).toISOString() };
  s.round = null; await setSt(s); // the migration saves with the next write
  await go('#/treino/genero'); await page.locator('#drill .opt').first().click(); await page.waitForTimeout(80);
  s = await getSt();
  const m = new Date(s.cards['ge-002'].due); if (m.getHours() || m.getMinutes()) errors.push('old due date not migrated to midnight');

  // 3. Backup file holds the state, and restoring it on an empty device brings it back.
  await go('#/treino/progresso');
  const [dl] = await Promise.all([page.waitForEvent('download'), page.click('[data-backup="save"]')]);
  const f = path.join(os.tmpdir(), 'cb-backup.json'); await dl.saveAs(f);
  const bk = JSON.parse(fs.readFileSync(f, 'utf8'));
  if (!bk.state || !Object.keys(bk.state.cards).length) errors.push('backup missing state');
  if (!bk.state.lastBackup) errors.push('backup time not recorded');
  // 4. Reset: no crash, Trilha renders, then restore.
  await page.click('details.reveal summary'); await page.click('#reset'); await page.waitForTimeout(300);
  if (!/Nenhum progresso/.test(await page.locator('.today.backup').textContent().catch(() => ''))) errors.push('after reset: trilha did not render the empty strip');
  const [chooser] = await Promise.all([page.waitForEvent('filechooser'), page.click('.today.backup [data-backup="restore"]')]);
  await chooser.setFiles(f); await page.waitForTimeout(600);
  s = await getSt();
  if (!s.cards || !Object.keys(s.cards).length) errors.push('restore did not bring cards back');
  if (await page.locator('.today.backup').count()) errors.push('fresh backup should hide the backup strip');

  // 5. Stale run: a lesson step whose signature changed is skipped, not crashed.
  const lid = await page.evaluate(() => CB.lessons.slice().sort((a, b) => a.n - b.n)[0].id);
  await go('#/trilha/' + lid); await page.click('#l-start'); await page.waitForTimeout(150);
  s = await getSt();
  s.runs[lid].items[0].h = 12345;
  await setSt(s); await go('#/trilha/' + lid + '/1');
  if (!/changed after you started/.test(await page.locator('#step').textContent())) errors.push('stale step not skipped');
  // Old run without signatures, with a choice-shaped answer sitting on a fix step.
  const fixPos = await page.evaluate(id => { const L = CB.lessons.find(l => l.id === id); return L.steps.findIndex(x => x.type === 'fix'); }, lid);
  if (fixPos >= 0) {
    s = await getSt();
    s.runs[lid] = { items: [{ k: 'L:' + lid + ':' + fixPos }], i: 0, ans: { 0: { ok: true, given: 'x' } }, retried: {}, work: { 0: { shuffled: [0], built: [] } } };
    await setSt(s); await go('#/trilha/' + lid + '/1');
    if (!(await page.locator('#fix-check').count())) errors.push('old mismatched answer not dropped on fix step');
  }

  // 6. Accent card after reload shows the saved answer's letters.
  s = await getSt(); s.round = null; await setSt(s);
  await go('#/treino/acento');
  const word = await page.evaluate(() => { const r = JSON.parse(localStorage.getItem('cbprep.v1')).round; return CB.drills.find(d => d.id === r.queue[0]).word; });
  const plain = word.normalize('NFD').replace(/[̀-ͯ]/g, '').normalize('NFC');
  for (let i = 0; i < word.length; i++) if (word[i] !== plain[i]) { await page.locator('.tiles .tl').nth(i).click(); await page.locator('#tray button', { hasText: word[i] }).first().click(); }
  await page.click('#acc-check'); await page.waitForTimeout(80);
  await page.reload(); await page.waitForTimeout(150);
  if (await page.locator('.tiles .tl.bad').count()) errors.push('accent tiles red after reload for ' + word);

  // 7. No Ditado sentence has digits or acronyms.
  await go('#/treino/ditado');
  const said = await page.evaluate(() => { const r = JSON.parse(localStorage.getItem('cbprep.v1')).runs.ditado; return r.items.map(i => i.k); });
  const bad = await page.evaluate(ks => ks.map(k => CB.drills.find(d => d.id === k.slice(2))).filter(d => /\d|\b(SMS|TV)\b/.test(d.prompt || d.context || '')).map(d => d.id), said);
  if (bad.length) errors.push('ditado drew digit/acronym cards: ' + bad.join(','));

  // 8. Task 1 prompt: listen button plays the lines, transcript folded.
  const p1 = await page.evaluate(() => CB.prompts.find(p => p.task === 1 && p.source.kind !== 'texto').id);
  await go('#/pratica/' + p1);
  if (!(await page.locator('#au-play').count())) errors.push('no listen button on task 1');
  if (await page.locator('details.reveal .source').isVisible()) errors.push('transcript should start folded');
  await page.click('#au-play'); await page.waitForTimeout(80);
  const spoken = await page.evaluate(() => window.__spoken.length);
  if (!spoken) errors.push('listen button spoke nothing');

  // 9. Pace line never says "2 a day" for one extra lesson.
  await go('#/');
  const pace = await page.locator('.path-top p').textContent();
  if (/Do 2 a day/.test(pace)) errors.push('pace line: ' + pace);
  console.log('pace:', pace);

  console.log(errors.length ? 'ERRORS:\n' + errors.join('\n') : 'NO ERRORS');
  await browser.close();
})();
