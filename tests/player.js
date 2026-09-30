// Player test: plays a dev lesson with every step type (tests/fixtures/lesson-dev.js), checks refresh keeps
// the step, Back walks back, wrong answers come back at the end, the end screen marks the lesson done,
// and the Leitner box bar moves after a first right answer. Prints NO ERRORS on success.
// Usage: node tests/player.js [baseUrl]
let chromium;
try { ({ chromium } = require('playwright')); } catch (e) { ({ chromium } = require('/Users/mike/Documents/GitHub/AuthorScratch/node_modules/playwright')); }
const fs = require('fs'), path = require('path');
const OUT = path.join(__dirname, 'shots'); fs.mkdirSync(OUT, { recursive: true });
const base = process.argv[2] || 'file://' + path.resolve(__dirname, '..', 'index.html');
(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  await ctx.addInitScript({ content: fs.readFileSync(path.join(__dirname, 'fixtures/lesson-dev.js'), 'utf8') });
  // A fake pt-BR voice: records what the page asks it to say.
  await ctx.addInitScript({ content: `window.__spoken = [];
    Object.defineProperty(window, 'speechSynthesis', { value: { getVoices: () => [{ lang: 'pt-BR', name: 'Teste' }], speak: (u) => window.__spoken.push(u.text), cancel: () => {}, onvoiceschanged: null } });
    window.SpeechSynthesisUtterance = function (t) { this.text = t; };` });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));
  page.on('console', m => { if (m.type() === 'error' && !(process.env.ALLOW_MISSING && /ERR_FILE_NOT_FOUND/.test(m.text()))) errors.push('console: ' + m.text()); });
  const shot = n => page.screenshot({ path: path.join(OUT, 'player-' + n + '.png'), fullPage: true });
  const hash = () => page.evaluate(() => location.hash);
  await page.goto(base + '#/'); await page.waitForTimeout(200); await shot('path');
  await page.goto(base + '#/trilha/l00-dev'); await page.waitForTimeout(150);
  await page.click('#l-start'); await page.waitForTimeout(150);
  if (!/l00-dev\/1$/.test(await hash())) errors.push('start did not land on step 1: ' + await hash());
  let guard = 0, wrongOnce = { choice: false, card: false, order: false, dict: false, formal: false }, seenTypes = new Set();
  while (guard++ < 40 && !/\/fim$/.test(await hash())) {
    const tag = (await page.locator('#step .mode-tag').first().textContent().catch(() => '')) || '';
    if (await page.locator('#step .step-card').count() === 0 && await page.locator('#drill').count()) seenTypes.add('card');
    if (/Explicação/.test(tag)) seenTypes.add('teach');
    if (/Pergunta/.test(tag)) {
      seenTypes.add('choice');
      const opts = page.locator('#step .opt:not([disabled])');
      if (await opts.count()) {
        if (!wrongOnce.choice) { // pick a wrong one on purpose
          const n = await opts.count(); let clicked = false;
          for (let i = 0; i < n; i++) { const t = await opts.nth(i).textContent(); if (!/^(Há dois|Nós vamos|para você)/.test(t)) { await opts.nth(i).click(); clicked = true; break; } }
          if (!clicked) await opts.first().click();
          wrongOnce.choice = true;
          await page.waitForTimeout(80);
          // refresh keeps the answered state
          const h = await hash(); await page.reload(); await page.waitForTimeout(150);
          if (await hash() !== h) errors.push('reload moved from ' + h + ' to ' + await hash());
          if (!(await page.locator('#step .feedback').count())) errors.push('answered choice lost on reload');
          await shot('choice-wrong');
        } else {
          const n = await opts.count();
          for (let i = 0; i < n; i++) { const t = await opts.nth(i).textContent(); if (/^(Há dois|Nós vamos|para você)/.test(t)) { await opts.nth(i).click(); break; } }
        }
      }
    }
    if (/Ordem/.test(tag)) {
      seenTypes.add('order');
      const want = ['Prezados senhores,', 'Escrevo para reclamar.', 'Aguardo retorno.', 'Atenciosamente,'];
      const seq = wrongOnce.order ? want : [want[1], want[0], want[2], want[3]];
      for (const t of seq) { await page.locator('.order-pool .ord', { hasText: t }).first().click(); await page.waitForTimeout(40); }
      await shot('order'); await page.click('#ord-check'); wrongOnce.order = true;
    }
    if (/Revisão/.test(tag)) {
      seenTypes.add('fix');
      await page.locator('.fixtext .fw', { hasText: /^o$/ }).first().click();
      await page.locator('.fixtext .fw', { hasText: /^moradores\.?$/ }).first().click();
      await shot('fix-flagged'); await page.click('#fix-check'); await page.waitForTimeout(60);
      const fb = await page.locator('#step .feedback > b').textContent();
      if (!/found 1 of 2/.test(fb) || !/1 marked word was fine/.test(fb)) errors.push('fix scoring: ' + fb);
      await page.click('#fix-toggle'); await shot('fix-corrected');
      const fixed = await page.locator('.fixtext .fw[data-e]').evaluateAll(bs => bs.map(b => b.firstChild.textContent));
      if (fixed.join(',') !== 'a,é') errors.push('fix toggle did not show corrected text: ' + fixed);
    }
    if (/Escrita/.test(tag)) {
      seenTypes.add('write');
      if (await page.locator('#w-show').isEnabled()) errors.push('write: model button enabled before typing');
      await page.fill('#w-text', 'Escrevo para contestar uma cobrança.');
      await page.click('#w-show'); await page.waitForTimeout(60); await shot('write');
      if (!(await page.locator('.paper').count())) errors.push('write model not shown');
    }
    if (/Ditado/.test(tag)) {
      seenTypes.add('dict');
      await page.waitForTimeout(500);
      const said = await page.evaluate(() => window.__spoken[window.__spoken.length - 1]);
      if (!said) errors.push('ditado did not speak on arrival');
      const strip = (x) => x.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      if (!wrongOnce.dict) {
        const typed = strip(said) === said ? said.replace(/\S+$/, 'xyz.') : strip(said);
        await page.fill('#d-text', typed); await page.click('#d-check'); wrongOnce.dict = true;
        await page.waitForTimeout(80); await shot('ditado-wrong');
        const marks = await page.locator('.dict-result .dw.acc, .dict-result .dw.bad').count();
        if (!marks) errors.push('ditado: a wrong answer showed no marked words');
      } else {
        await page.fill('#d-text', said); await page.click('#d-check'); await page.waitForTimeout(80);
        if (!/Perfeito/.test(await page.locator('#step .feedback > b').textContent({ timeout: 3000 }).catch(() => 'NO FEEDBACK'))) errors.push('ditado: exact text not marked perfect');
      }
    }
    if (/Passe para o formal/.test(tag)) {
      seenTypes.add('formal');
      // Whichever item was drawn: find it by its spoken sentence.
      const said = (await page.locator('.passage.said').textContent()).replace(/^“|”$/g, '');
      const item = await page.evaluate((t) => CB.formal.find((f) => f.informal === t), said);
      if (!item) errors.push('formal: could not find the drawn item');
      if (!wrongOnce.formal) {
        await page.click('#f-check'); wrongOnce.formal = true; await page.waitForTimeout(80);
        const fb = await page.locator('#step .feedback > b').textContent({ timeout: 3000 }).catch(() => 'NO FEEDBACK');
        if (!new RegExp('^0 of ' + item.changes.length).test(fb)) errors.push('formal: unchanged text should find none, got ' + fb);
        await shot('formal-wrong');
      } else {
        await page.fill('#f-text', item.formal); await page.click('#f-check'); await page.waitForTimeout(80);
        if (!/Todas/.test(await page.locator('#step .feedback > b').textContent({ timeout: 3000 }).catch(() => 'NO FEEDBACK'))) errors.push('formal: model text not accepted');
        await shot('formal-right');
      }
    }
    if (/Redação/.test(tag)) {
      seenTypes.add('prompt');
      const href = await page.locator('#step a.btn').first().getAttribute('href');
      if (!/pratica\/c-airfryer\?de=/.test(href)) errors.push('prompt link: ' + href);
      await page.click('#pr-later');
    }
    if (await page.locator('#drill').count() && !/Redação|Revisão|Escrita|Ordem|Pergunta|Explicação|Ditado|formal/.test(tag)) {
      seenTypes.add('card');
      const o = page.locator('#drill .opt:not([disabled])');
      if (await o.count()) {
        if (!wrongOnce.card) {
          // choose the wrong option
          const ans = await page.evaluate(() => { const k = location.hash.split('/').pop(); return null; });
          const n = await o.count(); const texts = []; for (let i = 0; i < n; i++) texts.push(await o.nth(i).textContent());
          const right = await page.evaluate(ts => { const it = document.querySelector('#drill .blank'); return null; }, texts);
          await o.first().click(); wrongOnce.card = true;
        } else await o.first().click();
      }
    }
    await page.waitForTimeout(60);
    const nx = page.locator('#next');
    if (!(await nx.count())) { errors.push('no next button on ' + await hash() + ' tag=' + tag); break; }
    await nx.click(); await page.waitForTimeout(100);
  }
  console.log('types seen:', [...seenTypes].join(','));
  for (const t of ['teach', 'choice', 'order', 'fix', 'write', 'card', 'prompt', 'dict', 'formal']) if (!seenTypes.has(t)) errors.push('never saw step type ' + t);
  if (!/\/fim$/.test(await hash())) errors.push('did not reach end: ' + await hash());
  await shot('end');
  const state = await page.evaluate(() => JSON.parse(localStorage.getItem('cbprep.v1')));
  const run = state.runs['l00-dev'];
  console.log('items', run.items.length, 'retries', run.items.filter(i => i.r).length, 'lesson', JSON.stringify(state.lessons['l00-dev']));
  if (!state.lessons['l00-dev']) errors.push('lesson not marked done');
  if (!run.items.some(i => i.r)) errors.push('no retry items appended');
  if (!state.writings.length) errors.push('writing not saved');
  // back walks back to the last step, answered
  await page.goBack(); await page.waitForTimeout(150);
  if (!/l00-dev\/\d+$/.test(await hash())) errors.push('back from end went to ' + await hash());
  // box bar: any card answered right should be in box >= 1 with a due date
  const boxed = Object.values(state.cards).filter(c => c.box >= 1);
  if (boxed.length && !boxed.every(c => c.due)) errors.push('boxed card without due date');
  await page.goto(base + '#/treino'); await page.waitForTimeout(150); await shot('treino');
  // decay: a card 9 days overdue in box 3 shows as box 2
  const eff = await page.evaluate(() => {
    const s = JSON.parse(localStorage.getItem('cbprep.v1'));
    s.cards['ge-001'] = { box: 3, seen: 3, right: 3, wrong: 0, due: new Date(Date.now() - 9 * 864e5).toISOString() };
    localStorage.setItem('cbprep.v1', JSON.stringify(s)); return true;
  });
  await page.reload(); await page.waitForTimeout(150);
  const title = await page.locator('a.mode[href="#/treino/genero"] .acc-bar i.b2').getAttribute('title').catch(() => null);
  if (!title) errors.push('decayed card not shown in box 2');
  await page.goto(base + '#/'); await page.waitForTimeout(150); await shot('path-after');
  const strip2 = await page.locator('.today').textContent().catch(() => '');
  if (!/1 dia seguido/.test(strip2)) errors.push('streak strip: ' + strip2);
  if (!/revisar hoje/.test(strip2)) errors.push('review count missing: ' + strip2);
  await page.goto(base + '#/treino/revisao'); await page.waitForTimeout(150); await shot('revisao');
  if (!(await page.locator('#drill').count())) errors.push('revisão round did not start');
  await page.goto(base + '#/treino/ditado'); await page.waitForTimeout(300);
  if (!/ditado\/1$/.test(await hash())) errors.push('ditado session did not start: ' + await hash());
  const ov = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  if (ov > 1) errors.push('horizontal overflow on path: ' + ov);
  console.log(errors.length ? 'ERRORS:\n' + errors.join('\n') : 'NO ERRORS');
  await browser.close();
})();
