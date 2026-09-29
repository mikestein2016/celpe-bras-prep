(function () {
  'use strict';

  var CB = window.CB || {};
  var GENRES = CB.genres || [];
  var TASKS = CB.tasks || [];
  var PROMPTS = CB.prompts || [];
  var DRILLS = CB.drills || [];
  var OV = CB.overview || {};
  var MODELS = CB.models || {};

  var CATS = {
    genero: { label: 'Gênero textual', en: 'genre markers and format' },
    papel: { label: 'Papel', en: 'role, reader, purpose' },
    fonte: { label: 'Fonte', en: 'source info, reworded' },
    coesao: { label: 'Coesão', en: 'connectors and paragraphs' },
    registro: { label: 'Registro', en: 'register and word choice' },
    lingua: { label: 'Língua', en: 'grammar worth copying' }
  };
  var MODES = {
    acento: { label: 'Acentos', en: 'Tap a letter to add the accent' },
    genero: { label: 'Gênero', en: 'o, a, os, as and adjective endings' },
    contracao: { label: 'Contrações', en: 'no, na, pelo, pela, à…' },
    regencia: { label: 'Regência', en: 'Which preposition goes here?' },
    conjugacao: { label: 'Conjugação', en: 'Infinitive, conjugated or subjunctive' }
  };
  var MODE_ORDER = ['acento', 'genero', 'contracao', 'regencia', 'conjugacao'];
  var KIND = { texto: 'Texto', video: 'Transcrição do vídeo', audio: 'Transcrição do áudio' };
  var ROUND_SIZE = 10;
  var TRAY = {
    a: ['a', 'á', 'â', 'ã', 'à'], e: ['e', 'é', 'ê'], i: ['i', 'í'], o: ['o', 'ó', 'ô', 'õ'], u: ['u', 'ú'], c: ['c', 'ç']
  };

  var app = document.getElementById('app');
  var byId = function (list) { var m = {}; list.forEach(function (x) { m[x.id] = x; }); return m; };
  var GENRE = byId(GENRES), TASK = byId(TASKS), PROMPT = byId(PROMPTS), DRILL = byId(DRILLS);

  /* ---------- storage ---------- */
  var KEY = 'cbprep.v1';
  var st = (function () {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  })();
  st.cards = st.cards || {};
  st.done = st.done || {};
  st.history = st.history || [];
  st.rounds = st.rounds || 0;
  function save() { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) { /* private mode: keep in memory */ } }

  /* ---------- text helpers ---------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function md(s) {
    return esc(s)
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>');
  }
  function marked(s, catOf) {
    return md(s).replace(/\{\{(\d+)\|([\s\S]*?)\}\}/g, function (m, n, t) {
      var cat = catOf[n] || 'genero';
      return '<mark class="hl cat-' + cat + '" data-n="' + n + '">' + t + '<sup>' + n + '</sup></mark>';
    });
  }
  function strip(s) { return String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').normalize('NFC'); }
  function blankify(s, fill, cls) {
    var parts = String(s).split('___');
    if (parts.length < 2) return md(s);
    return md(parts[0]) + '<span class="blank ' + (cls || '') + '">' + (fill ? esc(fill) : '&nbsp;') + '</span>' + md(parts.slice(1).join('___'));
  }
  function h(tag, attrs, html) {
    var a = '';
    for (var k in attrs) if (attrs[k] != null && attrs[k] !== false) a += ' ' + k + '="' + esc(attrs[k]) + '"';
    return '<' + tag + a + '>' + (html || '') + '</' + tag + '>';
  }
  function list(items, cls) { return '<ul' + (cls ? ' class="' + cls + '"' : '') + '>' + (items || []).map(function (x) { return '<li>' + md(x) + '</li>'; }).join('') + '</ul>'; }
  function toast(msg) {
    var t = document.createElement('div'); t.className = 'toast'; t.textContent = msg;
    document.body.appendChild(t); setTimeout(function () { t.remove(); }, 1800);
  }
  function taskLabel(n) { return 'Tarefa ' + n; }

  /* ---------- router ---------- */
  var cleanup = null;
  function route() {
    if (cleanup) { cleanup(); cleanup = null; }
    closeSheet();
    var parts = (location.hash.replace(/^#\/?/, '') || '').split('/').filter(Boolean);
    var sec = parts[0] || '';
    document.querySelectorAll('.tb-nav a').forEach(function (a) { a.classList.toggle('on', a.dataset.sec === sec); });
    var back = document.getElementById('tb-back');
    back.hidden = !sec;
    back.href = parts.length > 1 ? '#/' + sec : '#/';
    var html;
    if (!sec) html = viewHome();
    else if (sec === 'guia' && !parts[1]) html = viewGuide();
    else if (sec === 'guia' && TASK[parts[1]]) html = viewTask(TASK[parts[1]]);
    else if (sec === 'guia' && GENRE[parts[1]]) html = viewGenre(GENRE[parts[1]]);
    else if (sec === 'pratica' && !parts[1]) html = viewPracticeList();
    else if (sec === 'pratica' && PROMPT[parts[1]]) html = viewPrompt(PROMPT[parts[1]]);
    else if (sec === 'treino' && !parts[1]) html = viewDrillHome();
    else if (sec === 'treino' && parts[1] === 'progresso') html = viewProgress();
    else if (sec === 'treino' && (parts[1] === 'mix' || MODES[parts[1]])) html = viewRound(parts[1]);
    else html = '<h1>Página não encontrada</h1><p><a href="#/">Voltar ao início</a></p>';
    app.innerHTML = html;
    window.scrollTo(0, 0);
    bind(sec, parts);
  }
  window.addEventListener('hashchange', route);

  /* ---------- home ---------- */
  function daysLeft() {
    var d = Math.ceil((new Date(CB.examDate) - new Date()) / 86400000);
    return d;
  }
  function viewHome() {
    var d = daysLeft();
    var cd = d > 0 ? '<div class="countdown"><b>' + d + '</b><span>' + (d === 1 ? 'dia' : 'dias') + ' até a Parte Escrita, 20 de outubro às 9h</span></div>' : '';
    var doneCount = Object.keys(st.done).length;
    return '<div class="eyebrow">Study pack</div><h1>Celpe-Bras: Parte Escrita</h1>' + cd +
      '<div class="hero-tiles">' +
      '<a class="tile" href="#/guia"><div class="tile-title">Guia</div><div class="tile-sub">How the four tasks work, every genre with an annotated model answer, and what earns the points.</div><div class="tile-meta"><span class="chip accent">' + TASKS.length + ' tarefas</span><span class="chip accent">' + GENRES.length + ' gêneros</span></div></a>' +
      '<a class="tile" href="#/pratica"><div class="tile-title">Prática</div><div class="tile-sub">Real-format prompts to write by hand with a timer. Send a photo to Claude for grading.</div><div class="tile-meta"><span class="chip accent">' + PROMPTS.length + ' propostas</span>' + (doneCount ? '<span class="chip done">' + doneCount + ' feitas</span>' : '') + '</div></a>' +
      '<a class="tile" href="#/treino"><div class="tile-title">Treino</div><div class="tile-sub">Quick drills on accents, gender, contractions, prepositions and verbs. Tap to answer.</div><div class="tile-meta"><span class="chip accent">' + DRILLS.length + ' cartas</span></div></a>' +
      '</div>';
  }

  /* ---------- guide ---------- */
  function viewGuide() {
    var out = '<div class="eyebrow">Guia</div><h1>How the written part works</h1>';
    out += '<div class="card">' + list(OV.howItWorks) + '</div>';
    out += '<h2>What you need to pass</h2><div class="card"><table class="bands">' + (OV.bands || []).map(function (b) {
      return '<tr' + (b.note ? ' class="target"' : '') + '><td>' + esc(b.level) + (b.note ? ' <span class="chip accent">' + esc(b.note) + '</span>' : '') + '</td><td>' + esc(b.range) + '</td></tr>';
    }).join('') + '</table><p class="small muted" style="margin:.8em 0 0">Your certificate is the lower of your written and oral scores, so the written part decides your level.</p></div>';
    out += '<h2>What the graders look at</h2>' + (OV.criteria || []).map(function (c) {
      return '<div class="card"><h3>' + esc(c.name) + '</h3><p style="margin:0">' + md(c.text) + '</p></div>';
    }).join('');
    out += '<h2>Golden rules</h2><div class="card">' + list(OV.rules, 'checklist') + '</div>';
    out += '<h2>Time plan</h2><div class="grid">' + (OV.timePlan || []).map(function (t) {
      return '<div class="card"><h3>' + esc(t.task) + '</h3><ol>' + t.steps.map(function (s) { return '<li>' + md(s) + '</li>'; }).join('') + '</ol></div>';
    }).join('') + '</div>';
    out += '<h2>Proofreading: two passes, every time</h2><div class="grid">' + (OV.proofreading || []).map(function (p) {
      return '<div class="card"><h3>' + esc(p.pass) + '</h3>' + list(p.items) + '</div>';
    }).join('') + '</div>';
    out += '<h2>The four tasks</h2><div class="grid">' + TASKS.map(function (t) {
      return '<a class="tile" href="#/guia/' + t.id + '"><div class="tile-title">' + esc(t.name) + '</div><div class="tile-sub">' + md(firstSentence(t.summary)) + '</div></a>';
    }).join('') + '</div>';
    out += '<h2>The genres</h2><div class="grid">' + GENRES.map(function (g) {
      return '<a class="tile" href="#/guia/' + g.id + '"><div class="tile-title">' + esc(g.name) + '</div><div class="tile-sub">' + esc(g.english) + '</div><div class="tile-meta"><span class="chip">' + esc(g.register && g.register.level) + '</span></div></a>';
    }).join('') + '</div>';
    return out;
  }
  function firstSentence(s) { s = String(s || ''); var i = s.indexOf('. '); return i > 0 ? s.slice(0, i + 1) : s; }

  function sourceBlock(src) {
    if (!src) return '';
    var body = (src.body || []).map(function (p) {
      var m = src.kind !== 'texto' && /^([^:]{1,40}):\s(.*)$/.exec(p);
      if (m) return '<p class="turn"><b>' + esc(m[1]) + '</b><br>' + md(m[2]) + '</p>';
      return '<p>' + md(p) + '</p>';
    }).join('');
    return '<div class="source"><div class="source-kind"><span class="chip accent">' + esc(KIND[src.kind] || 'Texto') + '</span></div>' +
      (src.title ? '<h4>' + esc(src.title) + '</h4>' : '') + body +
      (src.note ? '<p class="source-note">' + md(src.note) + '</p>' : '') + '</div>';
  }

  function sampleBlock(s) {
    if (!s) return '';
    var catOf = {}; (s.notes || []).forEach(function (n) { catOf[n.n] = n.cat; });
    var used = {}; (s.notes || []).forEach(function (n) { used[n.cat] = 1; });
    var out = '<h2>Worked example</h2>';
    out += '<p class="muted small">' + (s.task ? taskLabel(s.task) + ' format. ' : '') + 'Read the instructions, then the source, as you would in the exam. Then read the model answer and tap any highlight to see why it earns points.</p>';
    out += '<div class="enunciado"><b>Enunciado</b>' + md(s.prompt) + '</div>';
    out += sourceBlock(s.source);
    out += '<h3>Model answer' + (s.wordCount ? ' <span class="chip">' + s.wordCount + ' palavras</span>' : '') + '</h3>';
    out += modelBlock(s);
    return out;
  }

  function modelBlock(s) {
    var catOf = {}; (s.notes || []).forEach(function (n) { catOf[n.n] = n.cat; });
    var used = {}; (s.notes || []).forEach(function (n) { used[n.cat] = 1; });
    var out = '<div class="legend">' + Object.keys(CATS).filter(function (c) { return used[c]; }).map(function (c) {
      return '<span class="cat-' + c + '">' + esc(CATS[c].label) + ': ' + esc(CATS[c].en) + '</span>';
    }).join('') + '</div>';
    out += '<div class="paper">' + (s.answer || []).map(function (p) {
      return '<p' + (p.length < 60 ? ' class="line"' : '') + '>' + marked(p, catOf) + '</p>';
    }).join('') + '</div>';
    out += '<h3>Why each highlight scores</h3><ol class="notes">' + (s.notes || []).map(function (n) {
      return '<li class="cat-' + n.cat + '"><span class="note-n">' + n.n + '</span><div><div class="note-cat">' + esc((CATS[n.cat] || {}).label || n.cat) + '</div>' + md(n.text) + '</div></li>';
    }).join('') + '</ol>';
    if (s.why5) out += '<div class="why5"><b>Why this earns a 5</b><p style="margin:.3em 0 0">' + md(s.why5) + '</p></div>';
    return out;
  }

  function pager(listArr, cur, base) {
    var i = listArr.indexOf(cur); var prev = listArr[i - 1], next = listArr[i + 1];
    return '<div class="pager">' +
      (prev ? '<a href="#/' + base + '/' + prev.id + '"><small>Anterior</small>' + esc(prev.name || prev.title) + '</a>' : '<span style="flex:1"></span>') +
      (next ? '<a class="next" href="#/' + base + '/' + next.id + '"><small>Próximo</small>' + esc(next.name || next.title) + '</a>' : '<span style="flex:1"></span>') +
      '</div>';
  }

  function viewGenre(g) {
    var out = '<div class="eyebrow">Gênero</div><h1>' + esc(g.name) + '</h1><p class="lede">' + esc(g.english) + '. ' + md(g.summary) + '</p>';
    if (g.role) out += '<div class="role"><div><b>Você é</b>' + md(g.role.enunciador) + '</div><div><b>Quem lê</b>' + md(g.role.interlocutor) + '</div><div><b>Para quê</b>' + md(g.role.proposito) + '</div></div>';
    if (g.register) out += '<h2>Register <span class="chip accent">' + esc(g.register.level) + '</span></h2><p>' + md(g.register.notes) + '</p>';
    out += '<h2>Must have</h2><div class="card">' + list(g.mustHave, 'checklist') + '</div>';
    if (g.skeleton) out += '<h2>What it looks like, part by part</h2><div class="card"><ol class="skeleton">' + g.skeleton.map(function (p) {
      return '<li><div class="sk-part">' + esc(p.part) + '</div><div class="sk-what">' + md(p.what) + '</div>' + (p.example ? '<div class="sk-ex">' + md(p.example) + '</div>' : '') + '</li>';
    }).join('') + '</ol></div>';
    if (g.wordChoices) out += '<h2>Use this, not that</h2><div class="card"><table class="words"><thead><tr><th>Use</th><th>Not</th><th>Why</th></tr></thead><tbody>' + g.wordChoices.map(function (w) {
      return '<tr><td class="use">' + md(w.use) + '</td><td class="avoid">' + md(w.avoid) + '</td><td class="why">' + md(w.why) + '</td></tr>';
    }).join('') + '</tbody></table></div>';
    if (g.pitfalls) out += '<h2>Common mistakes</h2><div class="card">' + list(g.pitfalls) + '</div>';
    out += sampleBlock(g.sample);
    var practice = PROMPTS.filter(function (p) { return p.genre === g.id; });
    if (practice.length) out += '<h2>Practice this genre</h2><div class="grid">' + practice.map(promptTile).join('') + '</div>';
    out += pager(GENRES, g, 'guia');
    return out;
  }

  function viewTask(t) {
    var out = '<div class="eyebrow">Tarefa</div><h1>' + esc(t.name) + '</h1><p class="lede">' + md(t.summary) + '</p>';
    out += '<h2>How it works</h2><div class="card">' + list(t.howItWorks) + '</div>';
    out += '<h2>Strategy</h2><div class="card"><ol>' + (t.strategy || []).map(function (s) { return '<li>' + md(s) + '</li>'; }).join('') + '</ol></div>';
    if (t.notesExample && t.notesExample.length) out += '<h2>What your notes might look like</h2><div class="notesbook">' + t.notesExample.map(esc).join('\n') + '</div>';
    if (t.pitfalls) out += '<h2>Common mistakes</h2><div class="card">' + list(t.pitfalls) + '</div>';
    out += sampleBlock(t.sample);
    if (t.genre && GENRE[t.genre]) out += '<p style="margin-top:1em">This sample is a <a href="#/guia/' + t.genre + '">' + esc(GENRE[t.genre].name) + '</a>. See that genre\'s guide for its full checklist.</p>';
    var n = parseInt(String(t.id).replace(/\D/g, ''), 10);
    var practice = PROMPTS.filter(function (p) { return p.task === n; });
    if (practice.length) out += '<h2>Practice in this format</h2><div class="grid">' + practice.map(promptTile).join('') + '</div>';
    out += pager(TASKS, t, 'guia');
    return out;
  }

  /* ---------- practice ---------- */
  function promptTile(p) {
    var g = GENRE[p.genre];
    return '<a class="tile" href="#/pratica/' + p.id + '"><div class="tile-title">' + esc(p.label) + '. ' + esc(p.title) + '</div><div class="tile-meta"><span class="chip accent">' + (g ? esc(g.name) : esc(p.genre)) + '</span><span class="chip">' + p.minutes + ' min</span>' + (st.done[p.id] ? '<span class="chip done">feita ✓</span>' : '') + (MODELS[p.id] ? '<span class="chip">modelo</span>' : '') + '</div></a>';
  }
  function viewPracticeList() {
    var out = '<div class="eyebrow">Prática</div><h1>Practice prompts</h1><p class="lede">Write by hand in pen, with the timer, and do both proofreading passes. Then send a photo of the page to Claude for a score and corrections.</p>';
    [1, 2, 3, 4].forEach(function (n) {
      var ps = PROMPTS.filter(function (p) { return p.task === n; });
      if (!ps.length) return;
      out += '<h2>' + taskLabel(n) + ' <span class="chip">' + ({ 1: 'vídeo', 2: 'áudio', 3: 'leitura', 4: 'leitura' })[n] + '</span></h2><div class="grid">' + ps.map(promptTile).join('') + '</div>';
    });
    return out;
  }
  function viewPrompt(p) {
    var g = GENRE[p.genre];
    var out = '<div class="eyebrow">' + taskLabel(p.task) + ' · ' + (g ? esc(g.name) : '') + '</div><h1>' + esc(p.label) + '. ' + esc(p.title) + '</h1>';
    out += '<div class="timer"><span class="timer-digits" id="t-digits">' + fmt(p.minutes * 60) + '</span><button class="btn primary" id="t-start">Começar</button><button class="btn ghost" id="t-reset">Zerar</button></div>';
    if (p.task <= 2 && p.source && p.source.kind !== 'texto') out += '<p class="muted small">In the exam this is a ' + (p.source.kind === 'video' ? 'video' : 'recording') + ' played twice. Here you get the transcript: read it once, cover it, then write.</p>';
    out += '<div class="enunciado"><b>Enunciado</b>' + md(p.prompt) + '</div>';
    out += sourceBlock(p.source);
    out += '<details class="reveal"><summary>After writing: what the grader expects</summary>' + list(p.checklist, 'checklist') + '</details>';
    var mdl = MODELS[p.id];
    if (mdl) out += '<details class="reveal model"><summary>After writing: model answer' + (mdl.wordCount ? ' <span class="chip">' + mdl.wordCount + ' palavras</span>' : '') + '</summary><p class="muted small">Tap any highlight to see why it earns points. Compare it with yours: the role, each checklist item, the source facts you used, and the two proofreading passes.</p>' + modelBlock(mdl) + '</details>';
    out += '<div class="btn-row"><button class="btn ' + (st.done[p.id] ? '' : 'primary') + '" id="p-done">' + (st.done[p.id] ? 'Feita ✓ (desmarcar)' : 'Marcar como feita') + '</button>' +
      (g ? '<a class="btn ghost" href="#/guia/' + g.id + '">Guia: ' + esc(g.name) + '</a>' : '') + '</div>';
    out += pager(PROMPTS, p, 'pratica');
    return out;
  }
  function fmt(sec) { sec = Math.max(0, Math.round(sec)); var m = Math.floor(sec / 60), s = sec % 60; return m + ':' + (s < 10 ? '0' : '') + s; }

  function bindPrompt(p) {
    var digits = document.getElementById('t-digits'), start = document.getElementById('t-start'), reset = document.getElementById('t-reset');
    var total = p.minutes * 60;
    var t = (st.timer && st.timer.id === p.id) ? st.timer : { id: p.id, endAt: null, left: total };
    function left() { return t.endAt ? (t.endAt - Date.now()) / 1000 : t.left; }
    function paint() {
      var l = left();
      digits.textContent = fmt(l);
      digits.classList.toggle('low', l <= 300);
      start.textContent = t.endAt ? 'Pausar' : (t.left < total ? 'Continuar' : 'Começar');
      if (t.endAt && l <= 0) { t.endAt = null; t.left = 0; st.timer = t; save(); digits.textContent = '0:00'; start.textContent = 'Começar'; toast('Tempo esgotado. Hora de revisar.'); }
    }
    var iv = setInterval(paint, 500); paint();
    start.onclick = function () {
      if (t.endAt) { t.left = left(); t.endAt = null; }
      else { if (t.left <= 0) t.left = total; t.endAt = Date.now() + t.left * 1000; }
      st.timer = t; save(); paint();
    };
    reset.onclick = function () { t.endAt = null; t.left = total; st.timer = t; save(); paint(); };
    document.getElementById('p-done').onclick = function () {
      if (st.done[p.id]) delete st.done[p.id]; else st.done[p.id] = new Date().toISOString();
      save(); route();
    };
    bindSample(MODELS[p.id]);
    cleanup = function () { clearInterval(iv); };
  }

  /* ---------- sheet for highlights ---------- */
  var sheet = document.getElementById('sheet');
  function openSheet(html) { document.getElementById('sheet-body').innerHTML = html; sheet.hidden = false; }
  function closeSheet() { sheet.hidden = true; document.querySelectorAll('mark.hl.flash').forEach(function (m) { m.classList.remove('flash'); }); }
  document.getElementById('sheet-close').onclick = closeSheet;
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeSheet(); });

  function bindSample(s) {
    if (!s) return;
    var notes = {}; (s.notes || []).forEach(function (n) { notes[n.n] = n; });
    app.querySelectorAll('mark.hl').forEach(function (m) {
      m.addEventListener('click', function () {
        var n = notes[m.dataset.n]; if (!n) return;
        closeSheet(); m.classList.add('flash');
        openSheet('<div class="cat-' + n.cat + '"><div class="note-cat">' + n.n + ' · ' + esc((CATS[n.cat] || {}).label || n.cat) + '</div><p style="margin:.4em 0 0">' + md(n.text) + '</p></div>');
      });
    });
  }

  /* ---------- drills ---------- */
  function cardState(id) { return st.cards[id] || (st.cards[id] = { box: 0, seen: 0, right: 0, wrong: 0 }); }
  function modeStats(mode) {
    var ids = DRILLS.filter(function (d) { return mode === 'mix' || d.mode === mode; }).map(function (d) { return d.id; });
    var seen = 0, right = 0, wrong = 0, mastered = 0;
    ids.forEach(function (id) { var c = st.cards[id]; if (!c) return; seen += c.seen ? 1 : 0; right += c.right; wrong += c.wrong; if (c.box >= 3) mastered++; });
    var acc = right + wrong ? Math.round(100 * right / (right + wrong)) : null;
    return { total: ids.length, seen: seen, right: right, wrong: wrong, mastered: mastered, acc: acc };
  }
  function viewDrillHome() {
    var out = '<div class="eyebrow">Treino</div><h1>Drills</h1><p class="lede">Rounds of ' + ROUND_SIZE + '. Cards you miss come back later in the same round, and again in future rounds until they stick.</p><div class="modes">';
    ['mix'].concat(MODE_ORDER).forEach(function (m) {
      var s = modeStats(m);
      var label = m === 'mix' ? 'Tudo misturado' : MODES[m].label;
      var sub = m === 'mix' ? 'All five modes in one round' : MODES[m].en;
      out += '<a class="tile mode' + (m === 'mix' ? ' mix' : '') + '" href="#/treino/' + m + '"><div><div class="tile-title">' + label + '</div><div class="tile-sub">' + sub + ' · ' + s.total + ' cartas</div></div>' +
        '<div class="mode-stat">' + (s.acc == null ? '–' : s.acc + '%') + '<small>' + s.mastered + '/' + s.total + ' fixadas</small></div>' +
        '<div class="acc-bar"><i style="width:' + (s.total ? Math.round(100 * s.mastered / s.total) : 0) + '%"></i></div></a>';
    });
    out += '</div><div class="btn-row"><a class="btn" href="#/treino/progresso">Progresso e exportar</a></div>';
    return out;
  }

  function weight(id) {
    var c = st.cards[id];
    if (!c || !c.seen) return 3;
    return [6, 3, 1.5, 0.6, 0.25][Math.min(c.box, 4)];
  }
  function buildRound(mode) {
    var pool = DRILLS.filter(function (d) { return mode === 'mix' || d.mode === mode; }).map(function (d) { return d.id; });
    var chosen = [];
    var n = Math.min(ROUND_SIZE, pool.length);
    while (chosen.length < n) {
      var tot = 0; pool.forEach(function (id) { tot += weight(id); });
      var r = Math.random() * tot, pick = pool[0];
      for (var i = 0; i < pool.length; i++) { r -= weight(pool[i]); if (r <= 0) { pick = pool[i]; break; } }
      chosen.push(pick); pool.splice(pool.indexOf(pick), 1);
    }
    return { mode: mode, queue: chosen, i: 0, first: {}, requeued: {}, answered: false, given: null, startedAt: new Date().toISOString() };
  }
  function currentRound(mode) {
    if (!st.round || st.round.mode !== mode || st.round.finished) { st.round = buildRound(mode); save(); }
    return st.round;
  }

  function viewRound(mode) {
    if (!DRILLS.length) return '<h1>No drills loaded</h1>';
    if (st.round && st.round.mode === mode && st.round.showEnd) {
      var done = st.round; done.showEnd = false; save();
      return viewRoundEnd(done);
    }
    var R = currentRound(mode);
    var d = DRILL[R.queue[R.i]];
    if (!d) { R.i++; if (R.i >= R.queue.length) { R.finished = true; R.showEnd = true; } save(); return viewRound(mode); }
    var label = mode === 'mix' ? 'Tudo misturado' : MODES[mode].label;
    var out = '<div class="round-head"><div class="eyebrow" style="margin:0">' + label + '</div><span class="muted small">' + (R.i + 1) + ' / ' + R.queue.length + '</span></div>';
    out += '<div class="progress"><i style="width:' + Math.round(100 * R.i / R.queue.length) + '%"></i></div>';
    out += '<div class="drill" id="drill">' + (d.mode === 'acento' ? accentCard(d, R) : choiceCard(d, R)) + '</div>';
    out += '<div class="btn-row" style="justify-content:center"><a class="btn ghost small" href="#/treino">Sair</a></div>';
    return out;
  }
  function choiceCard(d, R) {
    var ans = R.answered, given = R.given, ok = given === d.answer;
    var out = '<div class="mode-tag">' + esc(MODES[d.mode].label) + (d.tag ? ' · ' + esc(d.tag) : '') + '</div>';
    out += '<div class="drill-sentence">' + blankify(d.prompt, ans ? d.answer : '', ans ? (ok ? 'good' : 'bad') : '') + '</div>';
    out += '<div class="options">' + d.options.map(function (o) {
      var cls = '';
      if (ans && o === d.answer) cls = 'good';
      else if (ans && o === given) cls = 'bad';
      return '<button class="opt ' + cls + '" data-opt="' + esc(o) + '"' + (ans ? ' disabled' : '') + '>' + esc(o) + '</button>';
    }).join('') + '</div>';
    if (ans) out += feedback(d, ok, R);
    return out;
  }

  var accentWork = null;
  function accentCard(d, R) {
    var base = strip(d.word);
    if (!accentWork || accentWork.id !== d.id) accentWork = { id: d.id, chars: base.split(''), sel: null };
    var ans = R.answered, ok = ans && R.given === d.word;
    var out = '<div class="mode-tag">Acentos · tap a letter</div>';
    if (d.context) out += '<div class="drill-sentence">' + blankify(d.context, ans ? d.word : '…', ans ? (ok ? 'good' : 'bad') : '') + '</div>';
    else out += '<div class="drill-sentence muted small">Does this word need an accent?</div>';
    var target = d.word.split('');
    out += '<div class="tiles">' + accentWork.chars.map(function (ch, i) {
      var can = !!TRAY[base[i].toLowerCase()];
      var cls = 'tl' + (can && !ans ? ' can' : '') + (accentWork.sel === i && !ans ? ' sel' : '') + (ch !== base[i] ? ' changed' : '');
      if (ans) cls += ch === target[i] ? (ch !== base[i] || target[i] !== base[i] ? ' good' : '') : ' bad';
      return '<button class="' + cls + '" data-i="' + i + '"' + (can && !ans ? '' : ' disabled') + '>' + esc(ch) + '</button>';
    }).join('') + '</div>';
    if (!ans) {
      out += '<div class="tray" id="tray">' + trayHtml(base) + '</div>';
      out += '<div class="drill-actions"><button class="btn primary" id="acc-check">Verificar</button></div>';
    } else {
      out += feedback(d, ok, R, R.given !== d.word ? 'You wrote <span class="pt">' + esc(R.given) + '</span>. Correct: <strong class="pt">' + esc(d.word) + '</strong>' : '');
    }
    return out;
  }
  function trayHtml(base) {
    var i = accentWork.sel;
    if (i == null) return '<span class="tray-hint">Tap a letter above to change it. Leave it plain if it needs no accent.</span>';
    var lower = base[i].toLowerCase(), upper = base[i] !== lower;
    return TRAY[lower].map(function (c) {
      var ch = upper ? c.toUpperCase() : c;
      return '<button data-ch="' + esc(ch) + '" class="' + (accentWork.chars[i] === ch ? 'cur' : '') + '">' + esc(ch) + '</button>';
    }).join('');
  }

  function feedback(d, ok, R, extra) {
    var again = !ok && R.requeued[d.id] === R.i ? '<div class="again">This one comes back before the round ends.</div>' : '';
    return '<div class="feedback ' + (ok ? 'good' : 'bad') + '"><b>' + (ok ? 'Certo!' : 'Quase.') + '</b>' + (extra ? '<p style="margin:0 0 .4em">' + extra + '</p>' : '') + '<div>' + md(d.rule) + '</div>' + again + '</div>' +
      '<div class="drill-actions"><button class="btn primary" id="next">' + (R.i + 1 >= R.queue.length ? 'Ver resultado' : 'Próxima') + '</button></div>';
  }

  function answer(d, R, given) {
    var ok = given === (d.mode === 'acento' ? d.word : d.answer);
    R.answered = true; R.given = given;
    var c = cardState(d.id);
    c.seen++; c.last = new Date().toISOString();
    if (ok) { c.right++; c.box = Math.min(c.box + 1, 4); }
    else {
      c.wrong++; c.box = 0; c.lastWrong = given;
      st.history.push({ id: d.id, given: given, at: c.last });
      if (st.history.length > 400) st.history = st.history.slice(-400);
      if (!R.requeued.hasOwnProperty(d.id)) { R.requeued[d.id] = R.i; R.queue.push(d.id); }
    }
    if (!R.first.hasOwnProperty(d.id)) R.first[d.id] = ok ? 1 : 0;
    save();
    app.querySelector('#drill').innerHTML = d.mode === 'acento' ? accentCard(d, R) : choiceCard(d, R);
    bindDrill(R);
    var nx = document.getElementById('next'); if (nx) nx.focus();
  }

  function bindDrill(R) {
    if (R.i >= R.queue.length) return;
    var d = DRILL[R.queue[R.i]];
    var box = app.querySelector('#drill');
    if (!box) return;
    var next = document.getElementById('next');
    if (next) next.onclick = function () {
      R.i++; R.answered = false; R.given = null; accentWork = null;
      if (R.i >= R.queue.length) { R.finished = true; R.showEnd = true; st.rounds++; }
      save(); route();
    };
    if (R.answered) return;
    if (d.mode === 'acento') {
      var base = strip(d.word);
      box.querySelectorAll('.tl.can').forEach(function (b) {
        b.onclick = function () { accentWork.sel = +b.dataset.i; refresh(); };
      });
      var tray = document.getElementById('tray');
      tray.querySelectorAll('button').forEach(function (b) {
        b.onclick = function () { accentWork.chars[accentWork.sel] = b.dataset.ch; refresh(); };
      });
      document.getElementById('acc-check').onclick = function () { answer(d, R, accentWork.chars.join('')); };
      function refresh() { box.innerHTML = accentCard(d, R); bindDrill(R); }
      void base;
    } else {
      box.querySelectorAll('.opt').forEach(function (b) { b.onclick = function () { answer(d, R, b.dataset.opt); }; });
    }
  }

  function viewRoundEnd(R) {
    var ids = Object.keys(R.first), right = ids.filter(function (id) { return R.first[id]; }).length;
    var misses = ids.filter(function (id) { return !R.first[id]; }).map(function (id) { return DRILL[id]; }).filter(Boolean);
    var label = R.mode === 'mix' ? 'Tudo misturado' : MODES[R.mode].label;
    var out = '<div class="eyebrow">' + label + '</div><h1>Round done</h1><div class="card" style="text-align:center"><div class="score-big">' + right + '/' + ids.length + '</div><div class="muted">right on the first try</div></div>';
    if (misses.length) out += '<h2>Review these</h2><div class="card">' + misses.map(missRow).join('') + '</div>';
    out += '<div class="btn-row stretch"><button class="btn primary" id="again">Nova rodada</button><a class="btn" href="#/treino">Outros modos</a></div>';
    return out;
  }
  function missRow(d) {
    var q = d.mode === 'acento' ? (d.context ? blankify(d.context, d.word, 'good') : '<b>' + esc(d.word) + '</b>') : blankify(d.prompt, d.answer, 'good');
    var c = st.cards[d.id] || {};
    return '<div class="miss"><div class="pt">' + q + '</div><small>' + md(d.rule) + (c.lastWrong ? ' · you chose <em>' + esc(c.lastWrong) + '</em>' : '') + '</small></div>';
  }

  /* ---------- progress + export ---------- */
  function viewProgress() {
    var all = modeStats('mix');
    var out = '<div class="eyebrow">Treino</div><h1>Progress</h1>';
    out += '<div class="stats"><div class="stat"><b>' + st.rounds + '</b><span>rounds</span></div><div class="stat"><b>' + (all.acc == null ? '–' : all.acc + '%') + '</b><span>accuracy</span></div><div class="stat"><b>' + all.mastered + '</b><span>of ' + all.total + ' fixed</span></div></div>';
    out += '<div class="card"><table class="bands">' + MODE_ORDER.map(function (m) {
      var s = modeStats(m); return '<tr><td>' + MODES[m].label + '</td><td>' + (s.acc == null ? '–' : s.acc + '%') + ' · ' + s.mastered + '/' + s.total + '</td></tr>';
    }).join('') + '</table></div>';
    var worst = DRILLS.filter(function (d) { var c = st.cards[d.id]; return c && c.wrong; })
      .sort(function (a, b) { var ca = st.cards[a.id], cb = st.cards[b.id]; return (cb.wrong - cb.right * 0.5) - (ca.wrong - ca.right * 0.5); }).slice(0, 15);
    out += '<h2>Most missed</h2>' + (worst.length ? '<div class="card">' + worst.map(missRow).join('') + '</div>' : '<p class="empty">Nothing missed yet.</p>');
    out += '<h2>Send your progress to Claude</h2><p>Download the file or copy it, then send it in chat. It lists every miss and what you chose, so the next cards can target them.</p>';
    out += '<div class="btn-row stretch"><button class="btn primary" id="exp-dl">Baixar arquivo</button><button class="btn" id="exp-copy">Copiar</button></div>';
    out += '<details class="reveal"><summary>Reset progress</summary><p class="small">Clears drill history and practice check marks on this device. Export first if you want to keep them.</p><button class="btn danger" id="reset">Apagar tudo</button></details>';
    return out;
  }
  function exportData() {
    var byMode = {};
    MODE_ORDER.forEach(function (m) { byMode[m] = modeStats(m); });
    var misses = DRILLS.filter(function (d) { var c = st.cards[d.id]; return c && c.wrong; }).map(function (d) {
      var c = st.cards[d.id];
      return { id: d.id, mode: d.mode, item: d.mode === 'acento' ? (d.context || '').replace('___', '[' + d.word + ']') || d.word : d.prompt.replace('___', '[' + d.answer + ']'), lastWrong: c.lastWrong, wrong: c.wrong, right: c.right, box: c.box };
    }).sort(function (a, b) { return b.wrong - a.wrong; });
    var wrongAnswers = st.history.slice(-150).map(function (h) { return { id: h.id, given: h.given, at: h.at }; });
    return {
      app: 'celpe-bras-prep', version: 1, exportedAt: new Date().toISOString(),
      rounds: st.rounds, overall: modeStats('mix'), byMode: byMode,
      practiceDone: st.done, misses: misses, recentWrongAnswers: wrongAnswers
    };
  }
  function bindProgress() {
    document.getElementById('exp-dl').onclick = function () {
      var blob = new Blob([JSON.stringify(exportData(), null, 2)], { type: 'application/json' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'celpe-progresso-' + new Date().toISOString().slice(0, 10) + '.json';
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
    };
    document.getElementById('exp-copy').onclick = function () {
      var txt = JSON.stringify(exportData(), null, 1);
      var done = function () { toast('Copiado'); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(done, fallback); else fallback();
      function fallback() {
        var ta = document.createElement('textarea'); ta.value = txt; document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); done(); } catch (e) { toast('Could not copy'); }
        ta.remove();
      }
    };
    document.getElementById('reset').onclick = function () {
      if (!confirm('Apagar todo o progresso deste aparelho?')) return;
      st = { cards: {}, done: {}, history: [], rounds: 0 }; save(); route();
    };
  }

  /* ---------- bind per view ---------- */
  function bind(sec, parts) {
    if (sec === 'guia' && TASK[parts[1]]) bindSample(TASK[parts[1]].sample);
    if (sec === 'guia' && GENRE[parts[1]]) bindSample(GENRE[parts[1]].sample);
    if (sec === 'pratica' && PROMPT[parts[1]]) bindPrompt(PROMPT[parts[1]]);
    if (sec === 'treino' && parts[1] === 'progresso') bindProgress();
    else if (sec === 'treino' && (parts[1] === 'mix' || MODES[parts[1]])) {
      var R = st.round;
      var again = document.getElementById('again');
      if (again) again.onclick = function () { st.round = buildRound(R.mode); accentWork = null; save(); route(); };
      else bindDrill(R);
    }
  }

  route();
})();
