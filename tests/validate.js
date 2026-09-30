// Content validator: loads every data file index.html loads and checks the rules in SCHEMA.md that a script can check.
// Usage: node tests/validate.js   Prints OK or the list of problems (exit 1).
const vm = require('vm'), fs = require('fs'), path = require('path');
const root = path.resolve(__dirname, '..');
const files = [...fs.readFileSync(path.join(root, 'index.html'), 'utf8').matchAll(/src="(data\/[^"]+)"/g)].map(m => m[1]);
const c = {}; c.window = c; vm.createContext(c);
const bad = [], warn = [];
for (const f of files) {
  const p = path.join(root, f);
  if (!fs.existsSync(p)) { bad.push('missing file ' + f); continue; }
  try { vm.runInContext(fs.readFileSync(p, 'utf8'), c, { filename: f }); } catch (e) { bad.push(f + ': ' + e.message); }
}
const CB = c.CB || {};
const drills = CB.drills || [], prompts = CB.prompts || [], models = CB.models || {}, lessons = CB.lessons || [];
const ids = {};
for (const d of drills) {
  if (ids[d.id]) bad.push('duplicate drill id ' + d.id); ids[d.id] = 1;
  if (d.mode === 'acento') { if (!d.word) bad.push(d.id + ' no word'); if (d.context && d.context.split('___').length !== 2) bad.push(d.id + ' context needs one ___'); continue; }
  if (!d.prompt || d.prompt.split('___').length !== 2) bad.push(d.id + ' prompt needs exactly one ___');
  if (!Array.isArray(d.options) || !d.options.includes(d.answer)) bad.push(d.id + ' answer not in options');
  if (new Set(d.options || []).size !== (d.options || []).length) bad.push(d.id + ' duplicate options');
  if (!d.rule) bad.push(d.id + ' no rule');
}
const tags = {}; drills.forEach(d => { const k = d.mode + '|' + (d.tag || ''); tags[k] = (tags[k] || 0) + 1; });
const pids = {};
for (const p of prompts) {
  if (pids[p.id]) bad.push('duplicate prompt ' + p.id); pids[p.id] = 1;
  for (const k of ['label', 'title', 'genre', 'task', 'minutes', 'source', 'prompt', 'checklist']) if (p[k] == null) bad.push(p.id + ' missing ' + k);
  if (!models[p.id]) bad.push(p.id + ' has no model answer');
}
const genres = new Set((CB.genres || []).map(g => g.id));
for (const p of prompts) if (!genres.has(p.genre)) bad.push(p.id + ' unknown genre ' + p.genre);
for (const [id, m] of Object.entries(models)) {
  if (!pids[id]) bad.push('model for unknown prompt ' + id);
  const text = (m.answer || []).join('\n');
  const used = new Set([...text.matchAll(/\{\{(\d+)\|/g)].map(x => +x[1]));
  for (const n of m.notes || []) if (!used.has(n.n)) bad.push('model ' + id + ' note ' + n.n + ' has no marker');
  for (const u of used) if (!(m.notes || []).some(n => n.n === u)) bad.push('model ' + id + ' marker ' + u + ' has no note');
  if (/segundo o (texto|vídeo|áudio)|no vídeo|no áudio|a reportagem mostrou/i.test(text) && !/resumo|carta/.test((prompts.find(p => p.id === id) || {}).genre || '')) warn.push('model ' + id + ' may mention the source');
}
const TYPES = new Set(['teach', 'choice', 'fix', 'order', 'write', 'drills', 'pick', 'prompt', 'dictation', 'formal']);
const FIX = /\{\{([^|{}]+)\|([^|{}]*)\|([^{}]*)\}\}/g;
const ns = {};
function checkStep(s, where) {
  if (!s || !TYPES.has(s.type)) { bad.push(where + ' unknown step type ' + (s && s.type)); return; }
  if (s.type === 'teach' && !(s.title && Array.isArray(s.body))) bad.push(where + ' teach needs title and body');
  if (s.type === 'choice') {
    if (!Array.isArray(s.options) || !s.options.includes(s.answer)) bad.push(where + ' choice answer not in options');
    if (!s.q || !s.why) bad.push(where + ' choice needs q and why');
    if (new Set(s.options || []).size !== (s.options || []).length) bad.push(where + ' duplicate options');
  }
  if (s.type === 'fix') {
    const n = [...String(s.text).matchAll(FIX)].length;
    const stray = String(s.text).replace(FIX, '').match(/\{\{|\}\}|\|/);
    if (n < 1) bad.push(where + ' fix has no markers'); if (stray) bad.push(where + ' fix has a broken marker');
    if (n > 6) warn.push(where + ' fix has ' + n + ' errors');
  }
  if (s.type === 'order' && !(Array.isArray(s.items) && s.items.length >= 3 && s.items.length <= 7)) bad.push(where + ' order needs 3–7 items');
  if (s.type === 'order' && new Set(s.items).size !== s.items.length) bad.push(where + ' order has duplicate items');
  if (s.type === 'order' && s.free) for (const r of s.free) if (!(Array.isArray(r) && r[0] < r[1] && r[1] < s.items.length)) bad.push(where + ' order free range invalid');
  if (s.type === 'write' && !(s.q && Array.isArray(s.model) && Array.isArray(s.check))) bad.push(where + ' write needs q, model, check');
  if (s.type === 'prompt' && !pids[s.id]) bad.push(where + ' prompt ' + s.id + ' not found');
  if (s.type === 'drills') {
    const pool = drills.filter(d => (!s.modes || !s.modes.length || s.modes.includes(d.mode)) && (!s.tags || !s.tags.length || s.tags.includes(d.tag)));
    const modePool = drills.filter(d => !s.modes || !s.modes.length || s.modes.includes(d.mode));
    if (!modePool.length) bad.push(where + ' drills: no cards in modes ' + s.modes);
    else if (s.tags && s.tags.length) { const miss = s.tags.filter(t => !drills.some(d => d.tag === t && (!s.modes || s.modes.includes(d.mode)))); if (miss.length) warn.push(where + ' drills tags with no cards: ' + miss.join(', ')); }
    if (pool.length < s.n) warn.push(where + ' drills pool ' + pool.length + ' < n ' + s.n + ' (fills from mode)');
  }
  if (s.type === 'pick') {
    if (!Array.isArray(s.from) || !(s.n >= 1) || s.n > s.from.length) bad.push(where + ' pick n/from invalid');
    else s.from.forEach((x, i) => checkStep(x, where + '.from[' + i + ']'));
  }
}
// Passe para o formal: every change must be findable in both sentences.
const fids = {};
for (const f of CB.formal || []) {
  if (fids[f.id]) bad.push('duplicate formal id ' + f.id); fids[f.id] = 1;
  for (const k of ['context', 'informal', 'formal', 'changes']) if (!f[k]) bad.push(f.id + ' missing ' + k);
  for (const c of f.changes || []) {
    if (!String(f.informal).includes(c.from)) bad.push(f.id + ' change from not in informal: ' + c.from);
    if (!String(f.formal).includes(c.to)) bad.push(f.id + ' change to not in formal: ' + c.to);
    if (!c.why) bad.push(f.id + ' change without why');
  }
}
if (!(CB.formal || []).length) warn.push('no formal items loaded');
const lids = {};
for (const L of lessons) {
  if (lids[L.id]) bad.push('duplicate lesson ' + L.id); lids[L.id] = 1;
  if (ns[L.n]) bad.push('duplicate lesson n ' + L.n); ns[L.n] = 1;
  for (const k of ['title', 'en', 'unit', 'minutes', 'steps']) if (L[k] == null) bad.push(L.id + ' missing ' + k);
  (L.steps || []).forEach((s, i) => checkStep(s, L.id + '[' + i + ']'));
}
// English style: em dashes in any EN field
const json = JSON.stringify({ lessons, drills, prompts, models });
const em = (json.match(/—/g) || []).length; if (em) warn.push(em + ' em dashes in content');
console.log('files', files.length, '· drills', drills.length, '· prompts', prompts.length, '· models', Object.keys(models).length, '· lessons', lessons.length);
console.log('modes/tags:', Object.entries(tags).map(([k, v]) => k + '=' + v).join('  '));
if (warn.length) console.log('WARN:\n  ' + warn.join('\n  '));
if (bad.length) { console.log('PROBLEMS:\n  ' + bad.join('\n  ')); process.exit(1); } else console.log('OK');
