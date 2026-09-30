(function () {
  'use strict';

  var CB = window.CB || {};
  var GENRES = CB.genres || [];
  var TASKS = CB.tasks || [];
  var PROMPTS = CB.prompts || [];
  var DRILLS = CB.drills || [];
  var OV = CB.overview || {};
  var MODELS = CB.models || {};
  var OPEN = CB.openings || null;
  var FORMAL = CB.formal || [];
  var LESSONS = (CB.lessons || []).slice().sort(function (a, b) { return a.n - b.n; });
  var UNITS = { 1: 'Ler a proposta', 2: 'Usar a fonte', 3: 'Coesão', 4: 'Seus erros de língua', 5: 'Revisar e simular' };

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
    conjugacao: { label: 'Conjugação', en: 'Infinitive, conjugated or subjunctive' },
    abertura: { label: 'Aberturas', en: 'Greetings, first lines, closings, sign-offs' },
    conectivo: { label: 'Conectivos', en: 'Porém, portanto, além disso…' },
    registro: { label: 'Registro', en: 'Written, not spoken: há, nós, para' }
  };
  var MODE_ORDER = ['acento', 'genero', 'contracao', 'regencia', 'conjugacao', 'conectivo', 'registro', 'abertura'].filter(function (m) {
    return m === 'acento' || DRILLS.some(function (d) { return d.mode === m; });
  });
  var KIND = { texto: 'Texto', video: 'Transcrição do vídeo', audio: 'Transcrição do áudio' };
  var ROUND_SIZE = 10;
  var TRAY = {
    a: ['a', 'á', 'â', 'ã', 'à'], e: ['e', 'é', 'ê'], i: ['i', 'í'], o: ['o', 'ó', 'ô', 'õ'], u: ['u', 'ú'], c: ['c', 'ç']
  };

  var app = document.getElementById('app');
  (function trackTopbar() {
    var tb = document.querySelector('.topbar');
    var set = function () { document.documentElement.style.setProperty('--tb-h', (tb ? tb.offsetHeight : 60) + 'px'); };
    set(); window.addEventListener('resize', set);
    if (window.ResizeObserver && tb) new ResizeObserver(set).observe(tb);
  })();
  var byId = function (list) { var m = {}; list.forEach(function (x) { m[x.id] = x; }); return m; };
  var GENRE = byId(GENRES), TASK = byId(TASKS), PROMPT = byId(PROMPTS), DRILL = byId(DRILLS), LESSON = byId(LESSONS);

  /* ---------- storage ---------- */
  var KEY = 'cbprep.v1';
  var st = (function () {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  })();
  st.cards = st.cards || {};
  st.done = st.done || {};
  st.history = st.history || [];
  st.rounds = st.rounds || 0;
  st.lessons = st.lessons || {};
  st.runs = st.runs || {};
  st.writings = st.writings || [];
  st.lessonMisses = st.lessonMisses || [];
  st.days = st.days || {};
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
  var query = {};
  function route() {
    if (cleanup) { cleanup(); cleanup = null; }
    closeSheet();
    var raw = location.hash.replace(/^#\/?/, '') || '';
    var qi = raw.indexOf('?');
    query = {};
    if (qi >= 0) { raw.slice(qi + 1).split('&').forEach(function (kv) { var p = kv.split('='); if (p[0]) query[p[0]] = decodeURIComponent(p[1] || ''); }); raw = raw.slice(0, qi); }
    var parts = raw.split('/').filter(Boolean);
    var sec = parts[0] || '';
    if (sec === 'trilha' && !parts[1]) { location.replace('#/'); return; }
    var navSec = sec || 'trilha';
    document.querySelectorAll('.tb-nav a').forEach(function (a) { a.classList.toggle('on', a.dataset.sec === navSec); });
    var back = document.getElementById('tb-back');
    back.hidden = !sec;
    back.href = sec === 'trilha' ? '#/' : (parts.length > 1 ? '#/' + sec : '#/');
    var html;
    player = null;
    if (!sec) html = viewPath();
    else if (sec === 'trilha' && LESSON[parts[1]] && !parts[2]) html = viewLessonIntro(LESSON[parts[1]]);
    else if (sec === 'trilha' && LESSON[parts[1]] && parts[2] === 'fim') html = viewRunEnd(lessonCtx(LESSON[parts[1]]));
    else if (sec === 'trilha' && LESSON[parts[1]]) html = viewPlayer(lessonCtx(LESSON[parts[1]]), parseInt(parts[2], 10));
    else if (sec === 'treino' && GEN[parts[1]] && parts[2] === 'fim') html = viewRunEnd(genCtx(parts[1]));
    else if (sec === 'treino' && GEN[parts[1]]) html = viewGenerated(parts[1], parts[2]);
    else if (sec === 'guia' && !parts[1]) html = viewGuide();
    else if (sec === 'guia' && parts[1] === 'aberturas' && OPEN) html = viewOpenings();
    else if (sec === 'guia' && TASK[parts[1]]) html = viewTask(TASK[parts[1]]);
    else if (sec === 'guia' && GENRE[parts[1]]) html = viewGenre(GENRE[parts[1]]);
    else if (sec === 'pratica' && !parts[1]) html = viewPracticeList();
    else if (sec === 'pratica' && PROMPT[parts[1]]) html = viewPrompt(PROMPT[parts[1]]);
    else if (sec === 'treino' && !parts[1]) html = viewDrillHome();
    else if (sec === 'treino' && parts[1] === 'progresso') html = viewProgress();
    else if (sec === 'treino' && (parts[1] === 'mix' || parts[1] === 'revisao' || MODES[parts[1]])) html = viewRound(parts[1]);
    else html = '<h1>Página não encontrada</h1><p><a href="#/">Voltar ao início</a></p>';
    if (html == null) return;
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
  /* ---------- trilha: the lesson path ---------- */
  var ICON_CHECK = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M5 12.5l4.2 4.2L19 7" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  function nextLesson() {
    for (var i = 0; i < LESSONS.length; i++) if (!st.lessons[LESSONS[i].id]) return LESSONS[i];
    return null;
  }
  function lessonPrompts(L) {
    var ids = [];
    (L.steps || []).forEach(function (s) { if (s.type === 'prompt' && PROMPT[s.id]) ids.push(s.id); });
    return ids;
  }
  function paceLine(left) {
    var d = daysLeft();
    if (!left) return 'Trilha completa. Keep going with a Sessão surpresa every day and one handwritten prompt.';
    if (d <= 0) return '';
    // Days to study, counting today, up to the eve of the exam.
    var days = Math.max(1, d);
    var lead = left + (left === 1 ? ' lesson' : ' lessons') + ' left and ' + days + (days === 1 ? ' day' : ' days') + ' to study, counting today.';
    if (left <= days) return lead + ' One a day gets you there.';
    return lead + ' Do ' + Math.ceil(left / days) + ' a day to finish on time.';
  }
  function viewPath() {
    var d = daysLeft();
    var doneN = LESSONS.filter(function (l) { return st.lessons[l.id]; }).length;
    var cur = nextLesson();
    var out = '<div class="eyebrow">Trilha</div><h1>Celpe-Bras: Parte Escrita</h1>';
    if (d > 0) out += '<div class="countdown"><b>' + d + '</b><span>' + (d === 1 ? 'dia' : 'dias') + ' até a Parte Escrita, 20 de outubro às 9h</span></div>';
    out += todayStrip();
    if (!LESSONS.length) return out + '<p class="empty">No lessons loaded.</p>';
    out += '<div class="path-top"><div class="path-count"><b>' + doneN + '</b> de ' + LESSONS.length + ' lições</div><div class="progress"><i style="width:' + Math.round(100 * doneN / LESSONS.length) + '%"></i></div><p class="small muted" style="margin:0">' + esc(paceLine(LESSONS.length - doneN)) + '</p></div>';
    var unit = null;
    out += '<div class="path">';
    LESSONS.forEach(function (L) {
      if (L.unit !== unit) {
        if (unit !== null) out += '</ol>';
        unit = L.unit;
        out += '<h2 class="unit-head"><span>Unidade ' + unit + '</span>' + esc(UNITS[unit] || '') + '</h2><ol class="nodes">';
      }
      var ls = st.lessons[L.id], isCur = cur && cur.id === L.id, run = st.runs[L.id];
      var inProgress = run && !run.finished && run.i > 0;
      var pids = lessonPrompts(L);
      var pending = ls && pids.some(function (id) { return !st.done[id]; });
      var labels = [];
      if (ls) labels.push('<span class="chip done">Feita</span>');
      if (isCur) labels.push('<span class="chip accent">' + (inProgress ? 'Em andamento' : 'Próxima') + '</span>');
      if (pids.length) labels.push('<span class="chip' + (pending ? ' warn' : '') + '">' + (pending ? 'Redação pendente' : 'Redação à mão') + '</span>');
      out += '<li><a class="node' + (ls ? ' done' : '') + (isCur ? ' current' : '') + '" id="node-' + L.id + '" href="#/trilha/' + L.id + '">' +
        '<span class="dot">' + (ls ? ICON_CHECK : L.n) + '</span>' +
        '<span class="node-body"><span class="node-title">' + esc(L.title) + '</span><span class="node-sub">' + md(L.en) + ' · ' + L.minutes + ' min</span>' +
        (labels.length ? '<span class="tile-meta">' + labels.join('') + '</span>' : '') + '</span></a></li>';
    });
    out += '</ol></div>';
    out += '<h2>Também</h2><div class="grid">' +
      '<a class="tile" href="#/treino/surpresa"><div class="tile-title">Sessão surpresa</div><div class="tile-sub">A fresh mix of questions, corrections, writing and cards from the whole path.</div></a>' +
      '<a class="tile" href="#/pratica"><div class="tile-title">Prática</div><div class="tile-sub">' + PROMPTS.length + ' prompts to write by hand with a timer.</div></a>' +
      '<a class="tile" href="#/treino"><div class="tile-title">Treino</div><div class="tile-sub">' + DRILLS.length + ' quick cards by topic.</div></a>' +
      '<a class="tile" href="#/guia"><div class="tile-title">Guia</div><div class="tile-sub">The four tasks and every genre, with model answers.</div></a></div>';
    return out;
  }
  function bindPath() {
    var cur = nextLesson();
    var el = cur && document.getElementById('node-' + cur.id);
    if (el && el.getBoundingClientRect().bottom > window.innerHeight - 40) el.scrollIntoView({ block: 'center' });
  }

  function stepTypeCount(L) {
    var c = {};
    function add(s) {
      if (s.type === 'pick') { for (var i = 0; i < s.n; i++) add(s.from[i]); return; }
      var k = s.type === 'drills' ? 'cards' : s.type;
      c[k] = (c[k] || 0) + (s.type === 'drills' ? s.n : 1);
    }
    (L.steps || []).forEach(add);
    var names = { teach: ['explicação', 'explicações'], choice: ['pergunta', 'perguntas'], fix: ['correção', 'correções'], order: ['ordenação', 'ordenações'], write: ['escrita curta', 'escritas curtas'], cards: ['carta', 'cartas'], prompt: ['redação à mão', 'redações à mão'] };
    return Object.keys(names).filter(function (k) { return c[k]; }).map(function (k) { return c[k] + ' ' + names[k][c[k] === 1 ? 0 : 1]; });
  }
  function viewLessonIntro(L) {
    var ls = st.lessons[L.id], run = st.runs[L.id];
    var going = run && !run.finished && run.i > 0;
    var out = '<div class="eyebrow">Lição ' + L.n + ' · Unidade ' + L.unit + '</div><h1>' + esc(L.title) + '</h1><p class="lede">' + md(L.en) + '</p>';
    out += '<div class="tile-meta" style="margin-bottom:14px"><span class="chip accent">' + L.minutes + ' min</span>' + stepTypeCount(L).map(function (t) { return '<span class="chip">' + esc(t) + '</span>'; }).join('') + '</div>';
    if (ls) out += '<div class="card small">Done on ' + new Date(ls.done).toLocaleDateString('pt-BR') + (ls.best ? ' · best ' + ls.best : '') + (ls.plays > 1 ? ' · played ' + ls.plays + ' times' : '') + '. Playing it again draws new questions and cards.</div>';
    out += '<div class="btn-row stretch">';
    if (going) out += '<a class="btn primary" href="#/trilha/' + L.id + '/' + (run.i + 1) + '">Continuar (' + (run.i + 1) + ' de ' + run.items.length + ')</a><button class="btn" id="l-restart">Recomeçar</button>';
    else out += '<button class="btn primary" id="l-start">' + (ls ? 'Refazer' : 'Começar') + '</button>';
    out += '</div>';
    out += pagerLessons(L);
    return out;
  }
  function pagerLessons(L) {
    var i = LESSONS.indexOf(L), prev = LESSONS[i - 1], next = LESSONS[i + 1];
    return '<div class="pager">' +
      (prev ? '<a href="#/trilha/' + prev.id + '"><small>Anterior</small>' + esc(prev.title) + '</a>' : '<span style="flex:1"></span>') +
      (next ? '<a class="next" href="#/trilha/' + next.id + '"><small>Próxima</small>' + esc(next.title) + '</a>' : '<span style="flex:1"></span>') + '</div>';
  }
  function bindLessonIntro(L) {
    var start = function () { st.runs[L.id] = buildRun(L); save(); location.hash = '#/trilha/' + L.id + '/1'; };
    var b = document.getElementById('l-start'); if (b) b.onclick = start;
    var r = document.getElementById('l-restart'); if (r) r.onclick = start;
  }

  /* runs: a lesson or surprise session expanded into atomic items */
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function drawCards(spec, taken) {
    var modes = spec.modes && spec.modes.length ? spec.modes : null, tags = spec.tags && spec.tags.length ? spec.tags : null;
    var ok = function (d) { return !taken[d.id] && (!modes || modes.indexOf(d.mode) >= 0); };
    var pool = DRILLS.filter(function (d) { return ok(d) && (!tags || tags.indexOf(d.tag) >= 0); }).map(function (d) { return d.id; });
    if (pool.length < spec.n) pool = pool.concat(DRILLS.filter(function (d) { return ok(d) && pool.indexOf(d.id) < 0; }).map(function (d) { return d.id; }));
    var out = [];
    while (out.length < spec.n && pool.length) {
      var tot = 0; pool.forEach(function (id) { tot += weight(id); });
      var r = Math.random() * tot, pick = pool[pool.length - 1];
      for (var i = 0; i < pool.length; i++) { r -= weight(pool[i]); if (r <= 0) { pick = pool[i]; break; } }
      out.push(pick); taken[pick] = 1; pool.splice(pool.indexOf(pick), 1);
    }
    return out;
  }
  function expand(step, key, taken, items) {
    if (!step) return;
    if (step.type === 'drills') { drawCards(step, taken).forEach(function (id) { items.push({ k: 'D:' + id }); }); return; }
    if (step.type === 'dictation') { drawDictation(step.n || 2, step.modes, taken).forEach(function (id) { items.push({ k: 'T:' + id }); }); return; }
    if (step.type === 'formal') { drawFormal(step.n || 2, taken).forEach(function (id) { items.push({ k: 'F:' + id }); }); return; }
    if (step.type === 'pick') {
      var idx = shuffle(step.from.map(function (_, i) { return i; })).slice(0, step.n).sort(function (a, b) { return a - b; });
      idx.forEach(function (i) { expand(step.from[i], key + ':' + i, taken, items); });
      return;
    }
    items.push({ k: key });
  }
  function buildRun(L) {
    var items = [], taken = {};
    (L.steps || []).forEach(function (s, i) { expand(s, 'L:' + L.id + ':' + i, taken, items); });
    return { items: items, i: 0, ans: {}, retried: {}, started: new Date().toISOString() };
  }
  function resolve(k) {
    var p = k.split(':');
    if (p[0] === 'D') { var d = DRILL[p[1]]; return d ? { type: 'card', card: d } : null; }
    if (p[0] === 'T') { var t = DRILL[p[1]], txt = t && dictText(t); return txt ? { type: 'dict', card: t, text: txt } : null; }
    if (p[0] === 'F') { var f = FORMAL_BY[p[1]]; return f ? { type: 'formal', item: f } : null; }
    var L = LESSON[p[1]]; if (!L) return null;
    var s = L.steps[+p[2]];
    for (var i = 3; i < p.length && s; i++) s = s.from && s.from[+p[i]];
    // drills, dictation and formal steps are expanded into their own items when a run is built.
    if (s && (s.type === 'drills' || s.type === 'dictation' || s.type === 'formal' || s.type === 'pick')) return null;
    return s || null;
  }
  function allAtoms() {
    var atoms = [];
    LESSONS.forEach(function (L) {
      (function walk(steps, base) {
        steps.forEach(function (s, i) {
          var k = base + ':' + i;
          if (s.type === 'pick') walk(s.from, k);
          else atoms.push({ k: k, type: s.type, lid: L.id });
        });
      })(L.steps || [], 'L:' + L.id);
    });
    return atoms;
  }
  function buildSurprise() {
    var atoms = allAtoms(), items = [], taken = {};
    var reached = {}; LESSONS.forEach(function (L) { if (st.lessons[L.id] || (st.runs[L.id] && st.runs[L.id].i > 0)) reached[L.id] = 1; });
    function take(type, n) {
      var pool = atoms.filter(function (a) { return a.type === type; });
      var mine = pool.filter(function (a) { return reached[a.lid]; });
      if (mine.length >= n * 2) pool = mine;
      return shuffle(pool).slice(0, n).map(function (a) { return { k: a.k }; });
    }
    var cards = drawCards({ n: 5 }, taken).map(function (id) { return { k: 'D:' + id }; });
    var dict = drawDictation(1, null, taken).map(function (id) { return { k: 'T:' + id }; });
    var formal = drawFormal(1, taken).map(function (id) { return { k: 'F:' + id }; });
    items = shuffle(take('choice', 3).concat(take('order', 1), cards.slice(0, 3), dict));
    items = items.concat(take('fix', 1), cards.slice(3), formal, take('write', 1));
    return { items: items, i: 0, ans: {}, retried: {}, started: new Date().toISOString() };
  }
  function newRun(items) { return { items: items, i: 0, ans: {}, retried: {}, started: new Date().toISOString() }; }
  var GEN = {
    surpresa: { title: 'Sessão surpresa', build: buildSurprise },
    ditado: { title: 'Ditado', build: function () { return newRun(drawDictation(8, null, {}).map(function (id) { return { k: 'T:' + id }; })); } },
    formal: { title: 'Passe para o formal', build: function () { return newRun(drawFormal(6, {}).map(function (id) { return { k: 'F:' + id }; })); } }
  };
  if (!FORMAL.length) delete GEN.formal;
  function lessonCtx(L) {
    return { kind: 'lesson', L: L, key: L.id, base: '#/trilha/' + L.id, title: 'Lição ' + L.n + ' · ' + L.title, exit: '#/' };
  }
  function genCtx(kind) {
    return { kind: kind, key: kind, base: '#/treino/' + kind, title: GEN[kind].title, exit: '#/treino' };
  }
  function viewGenerated(kind, k) {
    var run = st.runs[kind];
    if (!run || run.finished || !run.items.length) { st.runs[kind] = GEN[kind].build(); save(); location.replace('#/treino/' + kind + '/1'); return null; }
    if (!k) { location.replace('#/treino/' + kind + '/' + (run.i + 1)); return null; }
    return viewPlayer(genCtx(kind), parseInt(k, 10));
  }

  /* ---------- ditado and passe para o formal ---------- */
  var FORMAL_BY = byId(FORMAL);
  // A dictation sentence is a drill card's sentence with its answer filled in:
  // short, already proofread, and built around one of his error patterns.
  function dictText(d) {
    if (!d || d.mode === 'abertura') return null;
    var s = d.mode === 'acento' ? (d.context ? d.context.replace('___', d.word) : null)
      : String(d.prompt).replace('___', d.answer === '(nada)' ? '' : d.answer);
    if (!s) return null;
    s = s.replace(/\s+/g, ' ').replace(/\s+([,.;:!?])/g, '$1').trim();
    var n = s.split(' ').length;
    if (n < 4 || n > 18 || !/[.!?]$/.test(s)) return null;
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  function drawDictation(n, modes, taken) {
    var pool = DRILLS.filter(function (d) { return !taken['T' + d.id] && (!modes || modes.indexOf(d.mode) >= 0) && dictText(d); }).map(function (d) { return d.id; });
    var out = [];
    while (out.length < n && pool.length) {
      var tot = 0; pool.forEach(function (id) { tot += weight(id); });
      var r = Math.random() * tot, pick = pool[pool.length - 1];
      for (var i = 0; i < pool.length; i++) { r -= weight(pool[i]); if (r <= 0) { pick = pool[i]; break; } }
      out.push(pick); taken['T' + pick] = 1; pool.splice(pool.indexOf(pick), 1);
    }
    return out;
  }
  function drawFormal(n, taken) {
    var seen = st.formalSeen || {};
    var pool = FORMAL.filter(function (f) { return !taken['F' + f.id]; });
    pool = shuffle(pool).sort(function (a, b) { return (seen[a.id] || 0) - (seen[b.id] || 0); });
    return pool.slice(0, n).map(function (f) { taken['F' + f.id] = 1; return f.id; });
  }

  // Speech: the device's own Brazilian Portuguese voice.
  var ptVoice = null;
  function pickVoice() {
    if (!('speechSynthesis' in window)) return;
    var vs = window.speechSynthesis.getVoices() || [];
    ptVoice = vs.filter(function (v) { return /^pt[-_]BR/i.test(v.lang); })[0] || vs.filter(function (v) { return /^pt/i.test(v.lang); })[0] || null;
  }
  if ('speechSynthesis' in window) { pickVoice(); window.speechSynthesis.onvoiceschanged = pickVoice; }
  function speak(text, rate) {
    if (!('speechSynthesis' in window)) return;
    var u = new SpeechSynthesisUtterance(text);
    u.lang = 'pt-BR'; u.rate = rate || 0.95;
    if (ptVoice) u.voice = ptVoice;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  }

  // Word-by-word comparison. Aligns on words that match once accents are
  // stripped, so a missing accent reads as "acento" rather than a wrong word.
  function words(s) {
    return String(s || '').replace(/[“”"«»]/g, ' ').split(/\s+/).map(function (w) {
      return w.replace(/^[^0-9A-Za-zÀ-ÿ]+|[^0-9A-Za-zÀ-ÿ]+$/g, '');
    }).filter(Boolean);
  }
  function diffWords(target, typed) {
    var T = words(target), Y = words(typed);
    var lo = function (w) { return w.toLowerCase(); }, loose = function (w) { return strip(w).toLowerCase(); };
    var n = T.length, m = Y.length, L = [];
    for (var i = 0; i <= n; i++) { L.push(new Array(m + 1).fill(0)); }
    for (i = n - 1; i >= 0; i--) for (var j = m - 1; j >= 0; j--) L[i][j] = loose(T[i]) === loose(Y[j]) ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
    var out = [], extra = [], pendT = [];
    i = 0; j = 0;
    function flush() {
      // Unmatched target words and unmatched typed words between two anchors pair up as substitutions.
      pendT.forEach(function (t, k) { out.push(extra[k] != null ? { t: t, y: extra[k], s: 'wrong' } : { t: t, y: null, s: 'missing' }); });
      for (var k = pendT.length; k < extra.length; k++) out.push({ t: null, y: extra[k], s: 'extra' });
      pendT = []; extra = [];
    }
    while (i < n || j < m) {
      if (i < n && j < m && loose(T[i]) === loose(Y[j])) {
        flush();
        out.push({ t: T[i], y: Y[j], s: lo(T[i]) === lo(Y[j]) ? 'ok' : 'accent' });
        i++; j++;
      } else if (j < m && (i >= n || L[i][j + 1] >= L[i + 1][j])) { extra.push(Y[j]); j++; }
      else { pendT.push(T[i]); i++; }
    }
    flush();
    var ok = out.every(function (x) { return x.s === 'ok'; });
    return { parts: out, ok: ok, right: out.filter(function (x) { return x.s === 'ok'; }).length, total: T.length };
  }

  function dictHtml(s, a) {
    var run = player.run;
    run.work = run.work || {};
    var w = run.work[player.pos] || (run.work[player.pos] = { text: '', plays: 0 });
    var out = '<div class="step-card left"><div class="mode-tag">' + againNote() + 'Ditado</div>';
    out += '<div class="q">Listen, then type exactly what you hear. Autocorrect is off.</div>';
    // A voice list that has not loaded yet still speaks with lang pt-BR.
    var speechOk = 'speechSynthesis' in window && (!!ptVoice || !window.speechSynthesis.getVoices().length);
    if (speechOk) {
      out += '<div class="btn-row"><button class="btn primary" id="d-play">Ouvir</button><button class="btn" id="d-slow">Mais devagar</button></div>';
    } else {
      out += '<p class="small muted">This device has no Portuguese voice, so the sentence shows for four seconds instead. Read it once, then type it from memory.</p><div class="btn-row"><button class="btn primary" id="d-peek">Mostrar a frase</button></div><div class="passage pt" id="d-peekbox" hidden></div>';
    }
    out += '<textarea id="d-text" class="write pt" rows="3" autocomplete="off" autocorrect="off" autocapitalize="sentences" spellcheck="false" lang="pt-BR" placeholder="Escreva o que ouviu."' + (a ? ' readonly' : '') + '>' + esc(w.text) + '</textarea>';
    if (!a) {
      out += '<div class="drill-actions"><button class="btn primary" id="d-check"' + (wordCount(w.text) < 2 ? ' disabled' : '') + '>Verificar</button></div>';
    } else {
      var D = a.diff;
      out += '<div class="dict-result pt">' + D.parts.map(function (x) {
        if (x.s === 'ok') return '<span class="dw ok">' + esc(x.t) + '</span>';
        if (x.s === 'accent') return '<span class="dw acc" title="accent">' + esc(x.t) + '<small>' + esc(x.y) + '</small></span>';
        if (x.s === 'wrong') return '<span class="dw bad">' + esc(x.t) + '<small>' + esc(x.y) + '</small></span>';
        if (x.s === 'missing') return '<span class="dw miss">' + esc(x.t) + '<small>faltou</small></span>';
        return '<span class="dw extra"><small>' + esc(x.y) + '</small></span>';
      }).join(' ') + '</div>';
      var accents = D.parts.filter(function (x) { return x.s === 'accent'; }).length;
      out += '<div class="feedback ' + (D.ok ? 'good' : 'bad') + '"><b>' + (D.ok ? 'Perfeito!' : D.right + ' of ' + D.total + ' words exact.') + '</b>' +
        (!D.ok ? '<p style="margin:0 0 .4em">' + (accents ? accents + (accents === 1 ? ' word needs' : ' words need') + ' an accent fix. ' : '') + 'The small text under a word is what you typed.</p>' : '') +
        '<div class="pt" style="margin:.2em 0 .5em"><b>' + esc(s.text) + '</b></div>' +
        (s.card && s.card.rule ? '<div class="small">' + md(s.card.rule) + '</div>' : '') +
        (a.retry ? '<div class="again">This one comes back before the end.</div>' : '') + '</div>';
      out += '<div class="btn-row"><button class="btn ghost small" id="d-play">Ouvir de novo</button></div>';
    }
    out += '</div>';
    return out + (a ? nextBtn() : '');
  }

  function normFormal(t) { return ' ' + String(t || '').toLowerCase().replace(/[“”"«»,.;:!?()]/g, ' ').replace(/\s+/g, ' ').trim() + ' '; }
  function formalChecks(f, text) {
    var T = normFormal(text), Tl = strip(T);
    return (f.changes || []).map(function (c) {
      var to = normFormal(c.to), from = normFormal(c.from);
      var found = T.indexOf(to) >= 0;
      var looseFound = !found && Tl.indexOf(strip(to)) >= 0;
      var fromLeft = from.trim() && T.indexOf(from) >= 0;
      return { c: c, found: found, loose: looseFound, fromLeft: fromLeft };
    });
  }
  function formalHtml(s, a) {
    var f = s.item, run = player.run;
    run.work = run.work || {};
    var w = run.work[player.pos] || (run.work[player.pos] = { text: f.informal });
    var out = '<div class="step-card left"><div class="mode-tag">' + againNote() + 'Passe para o formal</div>';
    out += '<div class="tile-meta" style="margin:0 0 8px"><span class="chip accent">' + esc(f.context) + '</span></div>';
    out += '<div class="q">Rewrite it the way this text should say it. Edit the sentence below.</div>';
    out += '<div class="passage pt said">“' + esc(f.informal) + '”</div>';
    out += '<textarea id="f-text" class="write pt" rows="4" autocomplete="off" autocorrect="off" autocapitalize="sentences" spellcheck="false" lang="pt-BR"' + (a ? ' readonly' : '') + '>' + esc(w.text) + '</textarea>';
    if (!a) {
      out += '<div class="drill-actions"><button class="btn primary" id="f-check">Verificar</button></div>';
    } else {
      var C = a.checks;
      var hits = C.filter(function (x) { return x.found; }).length;
      out += '<div class="feedback ' + (hits === C.length ? 'good' : 'bad') + '"><b>' + (hits === C.length ? 'Todas as mudanças!' : hits + ' of ' + C.length + ' key changes found.') + '</b>' +
        '<ul class="fchecks">' + C.map(function (x) {
          return '<li class="' + (x.found ? 'hit' : 'miss') + '"><span class="pt"><s>' + esc(x.c.from) + '</s> → <b>' + esc(x.c.to) + '</b></span>' +
            (x.loose ? ' <span class="chip warn">sem acento</span>' : '') + '<div class="small">' + md(x.c.why) + '</div></li>';
        }).join('') + '</ul>' +
        (hits < C.length ? '<p class="small" style="margin:.4em 0 0">A different wording can be right too. Compare yours with the model.</p>' : '') +
        (a.retry ? '<div class="again">This one comes back before the end.</div>' : '') + '</div>';
      var model = esc(f.formal);
      (f.changes || []).forEach(function (c) { var t = esc(c.to); if (t) model = model.split(t).join('<mark class="fm">' + t + '</mark>'); });
      out += '<h3>Modelo</h3><div class="paper"><p>' + model + '</p></div>';
    }
    out += '</div>';
    return out + (a ? nextBtn() : '');
  }

  /* ---------- today: streak and review ---------- */
  function dayKey(d) { d = d || new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
  function logActivity() { var k = dayKey(); st.days[k] = (st.days[k] || 0) + 1; }
  (function seedDays() {
    if (Object.keys(st.days).length) return;
    Object.keys(st.cards).forEach(function (id) { var c = st.cards[id]; if (c.last) { var k = dayKey(new Date(c.last)); st.days[k] = (st.days[k] || 0) + 1; } });
  })();
  function streakDays() {
    var d = new Date(), n = 0;
    if (!st.days[dayKey(d)]) d.setDate(d.getDate() - 1);
    while (st.days[dayKey(d)]) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  function reviewIds() {
    var now = Date.now();
    return DRILLS.filter(function (d) { var c = st.cards[d.id]; return c && c.seen && (!c.box || isDue(c, now)); }).map(function (d) { return d.id; });
  }
  function todayStrip() {
    var sd = streakDays(), today = !!st.days[dayKey()], due = reviewIds().length;
    var streakTxt = sd ? '<b>' + sd + '</b> ' + (sd === 1 ? 'dia seguido' : 'dias seguidos') : 'Comece a sequência hoje';
    var note = today ? '' : (sd ? ' · pratique hoje para não perder' : '');
    return '<div class="today"><div class="today-l"><div class="today-streak">' + streakTxt + '<span class="muted small">' + note + '</span></div>' +
      '<div class="small muted">' + (due ? due + (due === 1 ? ' carta para revisar hoje' : ' cartas para revisar hoje') : 'Nada para revisar hoje') + '</div></div>' +
      (due ? '<a class="btn small primary" href="#/treino/revisao">Revisar</a>' : '') + '</div>';
  }

  /* player */
  var player = null;
  function viewPlayer(ctx, k) {
    var run = st.runs[ctx.key];
    if (!run) { location.replace(ctx.base); return null; }
    if (run.finished && k > run.items.length) { location.replace(ctx.base + '/fim'); return null; }
    if (!(k >= 1) || k > run.i + 1 || k > run.items.length) { location.replace(ctx.base + '/' + Math.min(run.i + 1, run.items.length)); return null; }
    var pos = k - 1, item = run.items[pos], step = resolve(item.k);
    player = { ctx: ctx, run: run, pos: pos, item: item, step: step };
    var out = '<div class="run-head"><div class="round-head"><div class="eyebrow" style="margin:0">' + esc(ctx.title) + '</div><a class="small muted" href="' + ctx.exit + '">Sair</a></div>';
    out += '<div class="progress" title="' + k + ' de ' + run.items.length + '"><i style="width:' + Math.round(100 * pos / run.items.length) + '%"></i></div></div>';
    out += '<div class="step" id="step">' + stepHtml() + '</div>';
    return out;
  }
  function isLastPos() { return player.pos + 1 >= player.run.items.length; }
  function nextBtn(label) {
    return '<div class="drill-actions"><button class="btn primary" id="next">' + (label || (isLastPos() ? 'Ver resultado' : 'Próxima')) + '</button></div>';
  }
  function againNote() { return player.item.r ? '<span class="chip warn">De novo</span> ' : ''; }
  function stepHtml() {
    var s = player.step, a = player.run.ans[player.pos];
    if (!s) return '<p class="empty">This item no longer exists.</p>' + nextBtn();
    switch (s.type) {
      case 'card': return cardStepHtml(s.card, a);
      case 'teach': return teachHtml(s);
      case 'choice': return choiceHtml(s, a);
      case 'order': return orderHtml(s, a);
      case 'fix': return fixHtml(s, a);
      case 'write': return writeHtml(s, a);
      case 'prompt': return promptStepHtml(s, a);
      case 'dict': return dictHtml(s, a);
      case 'formal': return formalHtml(s, a);
    }
    return '<p class="empty">Unknown step.</p>' + nextBtn();
  }
  function rerender() { var box = document.getElementById('step'); if (!box) return; box.innerHTML = stepHtml(); bindStep(); }

  function teachHtml(s) {
    var out = '<div class="step-card left"><div class="mode-tag">Explicação</div><h2 class="step-h">' + md(s.title) + '</h2>';
    out += (s.body || []).map(function (p) { return '<p>' + md(p) + '</p>'; }).join('');
    if (s.examples && s.examples.length) out += '<div class="examples">' + s.examples.map(function (e) { return '<div class="ex"><div class="pt">' + md(e.pt) + '</div>' + (e.en ? '<div class="small muted">' + md(e.en) + '</div>' : '') + '</div>'; }).join('') + '</div>';
    if (s.table && s.table.length) out += '<table class="words"><thead><tr><th>Use</th><th>Not</th><th>Why</th></tr></thead><tbody>' + s.table.map(function (w) {
      return '<tr><td class="use">' + md(w.use) + '</td><td class="avoid">' + md(w.avoid) + '</td><td class="why">' + md(w.why) + '</td></tr>';
    }).join('') + '</tbody></table>';
    return out + '</div>' + nextBtn('Entendi');
  }

  function choiceHtml(s, a) {
    var run = player.run;
    run.orders = run.orders || {};
    var ok_ = run.orders[player.item.k];
    if (!ok_ || ok_.length !== s.options.length) { ok_ = run.orders[player.item.k] = shuffle(s.options); save(); }
    var out = '<div class="step-card"><div class="mode-tag">' + againNote() + 'Pergunta</div>';
    if (s.text) {
      var fill = a && String(s.answer).length <= 30 ? s.answer : '';
      out += '<div class="passage pt">' + String(s.text).split('\n').map(function (l) { return '<p>' + (l.indexOf('___') >= 0 ? blankify(l, fill, fill ? 'good' : '') : md(l)) + '</p>'; }).join('') + '</div>';
    }
    out += '<div class="q">' + md(s.q) + '</div><div class="options stack">' + ok_.map(function (o) {
      var cls = '';
      if (a && o === s.answer) cls = 'good'; else if (a && o === a.given) cls = 'bad';
      return '<button class="opt ' + cls + '" data-opt="' + esc(o) + '"' + (a ? ' disabled' : '') + '>' + md(o) + '</button>';
    }).join('') + '</div>';
    if (a) out += '<div class="feedback ' + (a.ok ? 'good' : 'bad') + '"><b>' + (a.ok ? 'Certo!' : 'Quase.') + '</b><div>' + md(s.why) + '</div>' + (a.retry ? '<div class="again">This one comes back before the lesson ends.</div>' : '') + '</div>';
    out += '</div>';
    return out + (a ? nextBtn() : '');
  }

  function orderHtml(s, a) {
    var run = player.run;
    run.work = run.work || {};
    var w = run.work[player.pos];
    if (!w) { w = run.work[player.pos] = { shuffled: shuffle(s.items.map(function (_, i) { return i; })), built: [] }; save(); }
    var out = '<div class="step-card left"><div class="mode-tag">' + againNote() + 'Ordem</div><div class="q">' + md(s.q) + '</div>';
    out += '<ol class="order-built">' + (w.built.length ? '' : '<li class="placeholder">Tap the parts below in order.</li>') + w.built.map(function (i, n) {
      var r = inFree(s, n), cls = a ? ((r ? i >= r[0] && i <= r[1] : i === n) ? ' good' : ' bad') : '';
      return '<li><button class="ord' + cls + '" data-built="' + n + '"' + (a ? ' disabled' : '') + '>' + md(s.items[i]) + '</button></li>';
    }).join('') + '</ol>';
    if (!a) {
      out += '<div class="order-pool">' + w.shuffled.filter(function (i) { return w.built.indexOf(i) < 0; }).map(function (i) {
        return '<button class="ord" data-item="' + i + '">' + md(s.items[i]) + '</button>';
      }).join('') + '</div>';
      out += '<div class="drill-actions"><button class="btn primary" id="ord-check"' + (w.built.length < s.items.length ? ' disabled' : '') + '>Verificar</button></div>';
    } else {
      out += '<div class="feedback ' + (a.ok ? 'good' : 'bad') + '"><b>' + (a.ok ? 'Certo!' : 'Quase.') + '</b>' +
        (a.ok ? '' : '<p style="margin:0 0 .4em">The right order:</p><ol class="pt small">' + s.items.map(function (x) { return '<li>' + md(x) + '</li>'; }).join('') + '</ol>') +
        (s.free && s.free.length ? '<p class="small" style="margin:0 0 .4em">' + s.free.map(function (r) { return 'Parts ' + (r[0] + 1) + ' to ' + (r[1] + 1); }).join(' and ') + ' can go in any order.</p>' : '') +
        '<div>' + md(s.why) + '</div>' + (a.retry ? '<div class="again">This one comes back before the lesson ends.</div>' : '') + '</div>';
    }
    out += '</div>';
    return out + (a ? nextBtn() : '');
  }

  function inFree(s, n) { return (s.free || []).filter(function (r) { return n >= r[0] && n <= r[1]; })[0]; }
  function orderOk(s, built) {
    return built.length === s.items.length && built.every(function (i, n) {
      var r = inFree(s, n);
      return r ? i >= r[0] && i <= r[1] : i === n;
    });
  }
  var FIX_RE = /\{\{([^|{}]+)\|([^|{}]*)\|([^{}]*)\}\}/g;
  function parseFix(text) {
    var toks = [], errs = [], last = 0, m;
    function plain(str) {
      str.split(/(\s+)/).forEach(function (w) {
        if (!w) return;
        if (/^\s+$/.test(w)) toks.push({ sp: w }); else toks.push({ w: w });
      });
    }
    FIX_RE.lastIndex = 0;
    while ((m = FIX_RE.exec(text))) {
      plain(text.slice(last, m.index));
      errs.push({ wrong: m[1], right: m[2], why: m[3] });
      toks.push({ w: m[1], e: errs.length - 1 });
      last = FIX_RE.lastIndex;
    }
    plain(text.slice(last));
    return { toks: toks, errs: errs };
  }
  function fixHtml(s, a) {
    var run = player.run, P = parseFix(s.text);
    run.work = run.work || {};
    var w = run.work[player.pos] || (run.work[player.pos] = { flags: {}, fixed: false });
    var out = '<div class="step-card left"><div class="mode-tag">Revisão</div><div class="q">' + md(s.title) + '</div>';
    if (!a) out += '<p class="small muted">Tap each word you think is wrong. Tap again to unmark. There ' + (P.errs.length === 1 ? 'is 1 mistake' : 'are ' + P.errs.length + ' mistakes') + '.</p>';
    out += '<div class="fixtext pt">' + P.toks.map(function (t, i) {
      if (t.sp) return t.sp.indexOf('\n') >= 0 ? '<br>' : ' ';
      var flagged = !!w.flags[i], cls = 'fw';
      if (!a) return '<button class="' + cls + (flagged ? ' flag' : '') + '" data-t="' + i + '">' + esc(t.w) + '</button>';
      if (t.e != null) {
        cls += flagged ? ' hit' : ' miss';
        return '<button class="' + cls + '" data-e="' + t.e + '">' + esc(w.fixed ? (t.w === t.w.trim() ? P.errs[t.e].right : P.errs[t.e].right) : t.w) + '<sup>' + (t.e + 1) + '</sup></button>';
      }
      return '<span class="fw' + (flagged ? ' false' : '') + '">' + esc(t.w) + '</span>';
    }).join('') + '</div>';
    if (!a) out += '<div class="drill-actions"><button class="btn primary" id="fix-check">Verificar</button></div>';
    else {
      out += '<div class="feedback ' + (a.found === a.total && !a.falses ? 'good' : 'bad') + '"><b>You found ' + a.found + ' of ' + a.total + '.' + (a.falses ? ' ' + a.falses + ' marked word' + (a.falses === 1 ? ' was' : 's were') + ' fine.' : '') + '</b></div>';
      out += '<ol class="fix-notes">' + P.errs.map(function (e, i) {
        return '<li class="' + (a.hits[i] ? 'hit' : 'miss') + '"><span class="pt"><s>' + esc(e.wrong) + '</s> → <b>' + esc(e.right || '(remove)') + '</b></span><div class="small">' + md(e.why) + '</div></li>';
      }).join('') + '</ol>';
      out += '<div class="btn-row"><button class="btn" id="fix-toggle">' + (w.fixed ? 'Mostrar os erros' : 'Mostrar corrigido') + '</button></div>';
    }
    out += '</div>';
    return out + (a ? nextBtn() : '');
  }

  function writeHtml(s, a) {
    var run = player.run;
    run.work = run.work || {};
    var w = run.work[player.pos] || (run.work[player.pos] = { text: '', checks: {} });
    var out = '<div class="step-card left"><div class="mode-tag">Escrita</div><div class="q">' + md(s.q) + '</div>';
    if (s.text) out += '<div class="passage pt">' + String(s.text).split('\n').map(function (l) { return '<p>' + md(l) + '</p>'; }).join('') + '</div>';
    out += '<textarea id="w-text" class="write pt" rows="5" autocomplete="off" autocorrect="off" autocapitalize="sentences" spellcheck="false" lang="pt-BR" placeholder="Escreva aqui, sem corretor."' + (a ? ' readonly' : '') + '>' + esc(w.text) + '</textarea>';
    if (!a) {
      out += '<p class="small muted">Autocorrect is off, as on paper. Put in every accent yourself.</p>';
      out += '<div class="drill-actions"><button class="btn primary" id="w-show"' + (wordCount(w.text) < 3 ? ' disabled' : '') + '>Ver o modelo</button></div><div class="btn-row" style="justify-content:center;margin:6px 0 0"><button class="btn ghost small" id="w-skip">Pular</button></div>';
    } else {
      out += '<h3>Modelo</h3><div class="paper">' + (s.model || []).map(function (l) { return '<p' + (l.length < 60 ? ' class="line"' : '') + '>' + md(l) + '</p>'; }).join('') + '</div>';
      out += '<h3>Check yours</h3><ul class="selfcheck">' + (s.check || []).map(function (c, i) {
        return '<li><label><input type="checkbox" data-c="' + i + '"' + (w.checks[i] ? ' checked' : '') + '> <span>' + md(c) + '</span></label></li>';
      }).join('') + '</ul><p class="small muted">Saved. It goes out with your progress export so Claude can read it.</p>';
    }
    out += '</div>';
    return out + (a ? nextBtn() : '');
  }
  function wordCount(t) { return String(t || '').trim().split(/\s+/).filter(Boolean).length; }

  function promptStepHtml(s, a) {
    var p = PROMPT[s.id], g = p && GENRE[p.genre];
    if (!p) return '<p class="empty">Prompt not found.</p>' + nextBtn();
    var done = !!st.done[p.id];
    var out = '<div class="step-card left"><div class="mode-tag">Redação à mão</div><h2 class="step-h">' + esc(p.label) + '. ' + esc(p.title) + '</h2>';
    out += '<div class="tile-meta" style="margin:0 0 10px"><span class="chip accent">' + taskLabel(p.task) + '</span>' + (g ? '<span class="chip">' + esc(g.name) + '</span>' : '') + '<span class="chip">' + p.minutes + ' min</span>' + (done ? '<span class="chip done">feita ✓</span>' : '') + '</div>';
    if (s.note) out += '<p>' + md(s.note) + '</p>';
    out += '<p class="small muted">Write it by hand with the timer, do both proofreading passes, then send a photo to Claude for a score.</p>';
    out += '<div class="btn-row stretch"><a class="btn' + (done ? '' : ' primary') + '" href="#/pratica/' + p.id + '?de=' + encodeURIComponent(player.ctx.base.replace(/^#\//, '') + '/' + (player.pos + 1)) + '">Abrir a proposta</a></div>';
    if (!a) out += '<div class="btn-row stretch"><button class="btn" id="pr-done">' + (done ? 'Feita, continuar' : 'Já fiz') + '</button><button class="btn ghost" id="pr-later">Fazer depois</button></div>';
    out += '</div>';
    return out + (a ? nextBtn() : '');
  }

  function cardStepHtml(d, a) {
    var V = cardView(d, a);
    var body = d.mode === 'acento' ? accentCard(d, V) : choiceCard(d, V);
    if (player.item.r) body = body.replace('<div class="mode-tag">', '<div class="mode-tag">' + againNote());
    return '<div class="drill" id="drill">' + body + '</div>';
  }
  function cardView(d, a) {
    var run = player.run;
    run.orders = run.orders || {};
    var V = { answered: !!a, given: a ? a.given : null, orders: run.orders, requeued: {}, i: 0, queue: isLastPos() ? [0] : [0, 1] };
    if (a && a.retry) V.requeued[d.id] = 0;
    return V;
  }

  function recordMiss(kind, s, given) {
    st.lessonMisses.push({ k: player.item.k, type: kind, q: s.q || s.title || '', given: given, at: new Date().toISOString() });
    if (st.lessonMisses.length > 200) st.lessonMisses = st.lessonMisses.slice(-200);
  }
  function settle(ok, extra) {
    var run = player.run, a = extra || {};
    a.ok = ok;
    if (player.step && player.step.type !== 'card') logActivity();
    if (!ok && !player.item.r && !run.retried[player.item.k]) { run.retried[player.item.k] = 1; run.items.push({ k: player.item.k, r: 1 }); a.retry = true; }
    run.ans[player.pos] = a;
    save();
    rerender();
    var nx = document.getElementById('next'); if (nx) nx.focus();
  }
  function bindStep() {
    var P = player, s = P.step, run = P.run, a = run.ans[P.pos];
    var nx = document.getElementById('next');
    if (nx) nx.onclick = function () {
      if (P.pos === run.i) run.i++;
      if (run.i >= run.items.length) { finishRun(P.ctx, run); save(); location.hash = P.ctx.base + '/fim'; return; }
      save(); location.hash = P.ctx.base + '/' + (P.pos + 2);
    };
    if (!s) return;
    if (s.type === 'teach' && !a) { run.ans[P.pos] = { seen: 1 }; save(); }
    if (a) {
      if (s.type === 'fix') {
        document.getElementById('fix-toggle').onclick = function () { run.work[P.pos].fixed = !run.work[P.pos].fixed; save(); rerender(); };
        var P2 = parseFix(s.text);
        app.querySelectorAll('.fixtext .fw[data-e]').forEach(function (b) {
          b.onclick = function () { var e = P2.errs[+b.dataset.e]; openSheet('<div class="note-cat">' + (+b.dataset.e + 1) + ' · ' + esc(e.wrong) + ' → ' + esc(e.right) + '</div><p style="margin:.4em 0 0">' + md(e.why) + '</p>'); };
        });
      }
      if (s.type === 'dict') { var rp = document.getElementById('d-play'); if (rp) rp.onclick = function () { speak(s.text, 0.95); }; }
      if (s.type === 'write') app.querySelectorAll('.selfcheck input').forEach(function (cb) {
        cb.onchange = function () { run.work[P.pos].checks[cb.dataset.c] = cb.checked; save(); };
      });
      return;
    }
    if (s.type === 'card') {
      var d = s.card, box = document.getElementById('drill');
      bindCard(d, cardView(d, null), box, function (given) {
        var ok = gradeCard(d, given);
        settle(ok, { given: given });
      });
    } else if (s.type === 'choice') {
      app.querySelectorAll('#step .opt').forEach(function (b) {
        b.onclick = function () { var ok = b.dataset.opt === s.answer; if (!ok) recordMiss('choice', s, b.dataset.opt); settle(ok, { given: b.dataset.opt }); };
      });
    } else if (s.type === 'order') {
      var w = run.work[P.pos];
      app.querySelectorAll('.order-pool .ord').forEach(function (b) { b.onclick = function () { w.built.push(+b.dataset.item); save(); rerender(); }; });
      app.querySelectorAll('.order-built .ord').forEach(function (b) { b.onclick = function () { w.built.splice(+b.dataset.built, 1); save(); rerender(); }; });
      var oc = document.getElementById('ord-check');
      if (oc) oc.onclick = function () {
        var ok = orderOk(s, w.built);
        if (!ok) { recordMiss('order', s, w.built.join(',')); }
        settle(ok, {});
        if (!ok && run.ans[P.pos].retry) { /* the retry gets a fresh shuffle */ }
      };
    } else if (s.type === 'fix') {
      var fw = run.work[P.pos];
      app.querySelectorAll('.fixtext .fw[data-t]').forEach(function (b) {
        b.onclick = function () { var i = +b.dataset.t; if (fw.flags[i]) delete fw.flags[i]; else fw.flags[i] = 1; b.classList.toggle('flag', !!fw.flags[i]); save(); };
      });
      document.getElementById('fix-check').onclick = function () {
        var PF = parseFix(s.text), hits = {}, found = 0, falses = 0;
        PF.toks.forEach(function (t, i) {
          if (t.e != null && fw.flags[i]) { hits[t.e] = 1; found++; }
          else if (t.e == null && fw.flags[i]) falses++;
        });
        if (found < PF.errs.length) recordMiss('fix', s, PF.errs.filter(function (_, i) { return !hits[i]; }).map(function (e) { return e.wrong; }).join(' | '));
        run.ans[P.pos] = { ok: found === PF.errs.length, found: found, total: PF.errs.length, falses: falses, hits: hits };
        logActivity();
        save(); rerender();
      };
    } else if (s.type === 'write') {
      var ww = run.work[P.pos], ta = document.getElementById('w-text'), show = document.getElementById('w-show');
      ta.oninput = function () { ww.text = ta.value; show.disabled = wordCount(ta.value) < 3; save(); };
      show.onclick = function () {
        st.writings.push({ k: P.item.k, q: s.q, text: ww.text, at: new Date().toISOString() });
        if (st.writings.length > 80) st.writings = st.writings.slice(-80);
        run.ans[P.pos] = { wrote: 1 }; logActivity(); save(); rerender();
      };
      document.getElementById('w-skip').onclick = function () { run.ans[P.pos] = { skipped: 1 }; save(); rerender(); };
    } else if (s.type === 'dict') {
      var dw = run.work[P.pos], dta = document.getElementById('d-text'), dchk = document.getElementById('d-check');
      var play = function (rate) { dw.plays = (dw.plays || 0) + 1; save(); speak(s.text, rate); };
      var bp = document.getElementById('d-play'); if (bp) bp.onclick = function () { play(0.95); };
      var bs = document.getElementById('d-slow'); if (bs) bs.onclick = function () { play(0.7); };
      var pk = document.getElementById('d-peek');
      if (pk) pk.onclick = function () {
        var box = document.getElementById('d-peekbox'); box.textContent = s.text; box.hidden = false; pk.disabled = true;
        setTimeout(function () { box.hidden = true; box.textContent = ''; pk.disabled = false; }, 4000);
      };
      if (!dw.plays && bp && P.pos === run.i) setTimeout(function () { if (player && player.pos === P.pos && !run.ans[P.pos]) play(0.95); }, 350);
      dta.oninput = function () { dw.text = dta.value; dchk.disabled = wordCount(dta.value) < 2; save(); };
      dchk.onclick = function () {
        var D = diffWords(s.text, dw.text);
        if (!D.ok) recordMiss('dict', { q: s.text }, dw.text);
        st.dict = st.dict || { n: 0, perfect: 0 }; st.dict.n++; if (D.ok) st.dict.perfect++;
        settle(D.ok, { diff: D, given: dw.text });
      };
    } else if (s.type === 'formal') {
      var fw2 = run.work[P.pos], fta = document.getElementById('f-text');
      fta.oninput = function () { fw2.text = fta.value; save(); };
      document.getElementById('f-check').onclick = function () {
        var C = formalChecks(s.item, fw2.text), ok = C.every(function (x) { return x.found; });
        st.formalSeen = st.formalSeen || {}; st.formalSeen[s.item.id] = (st.formalSeen[s.item.id] || 0) + 1;
        if (!ok) recordMiss('formal', { q: s.item.informal }, fw2.text);
        st.writings.push({ k: P.item.k, q: 'Passe para o formal: ' + s.item.informal, text: fw2.text, at: new Date().toISOString() });
        if (st.writings.length > 80) st.writings = st.writings.slice(-80);
        settle(ok, { checks: C, given: fw2.text });
      };
    } else if (s.type === 'prompt') {
      document.getElementById('pr-done').onclick = function () { if (!st.done[s.id]) st.done[s.id] = new Date().toISOString(); run.ans[P.pos] = { done: 1 }; save(); rerender(); };
      document.getElementById('pr-later').onclick = function () { run.ans[P.pos] = { later: 1 }; save(); rerender(); };
    }
  }

  function runSummary(run) {
    var first = 0, firstOk = 0, fixFound = 0, fixTotal = 0, wrote = 0, misses = [];
    run.items.forEach(function (it, pos) {
      var a = run.ans[pos], s = resolve(it.k); if (!a || !s) return;
      if (s.type === 'fix') { fixFound += a.found || 0; fixTotal += a.total || 0; return; }
      if (s.type === 'write') { if (a.wrote) wrote++; return; }
      if (it.r || a.ok == null) return;
      first++; if (a.ok) firstOk++; else misses.push({ s: s, a: a });
    });
    return { first: first, firstOk: firstOk, fixFound: fixFound, fixTotal: fixTotal, wrote: wrote, misses: misses };
  }
  function finishRun(ctx, run) {
    run.finished = true;
    var sum = runSummary(run);
    run.result = sum.firstOk + '/' + sum.first;
    if (ctx.kind === 'lesson') {
      var ls = st.lessons[ctx.key] || { plays: 0 };
      ls.done = ls.done || new Date().toISOString();
      ls.last = new Date().toISOString();
      ls.plays = (ls.plays || 0) + 1;
      var prevBest = ls.best ? +ls.best.split('/')[0] / Math.max(1, +ls.best.split('/')[1]) : -1;
      if (sum.first && sum.firstOk / sum.first >= prevBest) ls.best = run.result;
      st.lessons[ctx.key] = ls;
    } else if (ctx.kind === 'surpresa') st.sessions = (st.sessions || 0) + 1;
  }
  function viewRunEnd(ctx) {
    var run = st.runs[ctx.key];
    if (!run || !run.finished) { location.replace(ctx.base); return null; }
    var sum = runSummary(run);
    var out = '<div class="eyebrow">' + esc(ctx.title) + '</div><h1>' + (ctx.kind === 'lesson' ? 'Lição feita' : 'Sessão feita') + '</h1>';
    out += '<div class="stats">' +
      '<div class="stat"><b>' + sum.firstOk + '/' + sum.first + '</b><span>right first try</span></div>' +
      '<div class="stat"><b>' + (sum.fixTotal ? sum.fixFound + '/' + sum.fixTotal : '–') + '</b><span>mistakes found</span></div>' +
      '<div class="stat"><b>' + sum.wrote + '</b><span>' + (sum.wrote === 1 ? 'text written' : 'texts written') + '</span></div></div>';
    if (ctx.kind === 'lesson') {
      var pend = lessonPrompts(ctx.L).filter(function (id) { return !st.done[id]; });
      if (pend.length) out += '<div class="card"><b>Redação pendente:</b> ' + pend.map(function (id) { return '<a href="#/pratica/' + id + '">' + esc(PROMPT[id].label + '. ' + PROMPT[id].title) + '</a>'; }).join(', ') + '. Write it by hand when you have ' + PROMPT[pend[0]].minutes + ' minutes.</div>';
    }
    if (sum.misses.length) out += '<h2>Review these</h2><div class="card">' + sum.misses.map(function (m) {
      if (m.s.type === 'card') return missRow(m.s.card);
      if (m.s.type === 'choice') return '<div class="miss"><div>' + md(m.s.q) + '</div><div class="pt"><b>' + md(m.s.answer) + '</b></div><small>' + md(m.s.why) + ' · you chose <em>' + esc(m.a.given) + '</em></small></div>';
      if (m.s.type === 'order') return '<div class="miss"><div>' + md(m.s.q) + '</div><small>' + md(m.s.why) + '</small></div>';
      return '';
    }).join('') + '</div>';
    out += '<div class="btn-row stretch">' + (ctx.kind === 'lesson' ? '<a class="btn primary" href="#/">Voltar à trilha</a><button class="btn" id="run-again">Refazer</button>' : '<button class="btn primary" id="run-again">Nova sessão</button><a class="btn" href="#/treino">Treino</a>') + '</div>';
    return out;
  }
  function bindRunEnd(ctx) {
    var b = document.getElementById('run-again');
    if (b) b.onclick = function () {
      st.runs[ctx.key] = ctx.kind === 'lesson' ? buildRun(ctx.L) : GEN[ctx.kind].build(); save();
      location.hash = ctx.base + '/1';
    };
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
    if (OPEN) out += '<h2>Openings and closings</h2><div class="grid"><a class="tile" href="#/guia/aberturas"><div class="tile-title">Aberturas e fechos</div><div class="tile-sub">How to greet, open, close and sign for every kind of reader, from a city office to a friend.</div></a></div>';
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
    if (OPEN) out += '<p class="small"><a href="#/guia/aberturas">Openings and closings for every reader →</a></p>';
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

  /* ---------- openings and closings ---------- */
  function ptList(items) { return (items || []).map(function (x) { return '<div class="pt op-item">' + md(x) + '</div>'; }).join(''); }
  function viewOpenings() {
    var o = OPEN;
    var out = '<div class="eyebrow">Guia</div><h1>Aberturas e fechos</h1><p class="lede">' + md(o.intro) + '</p>';
    out += '<h2>How formal? The greeting ladder</h2><div class="card"><ol class="ladder">' + (o.ladder || []).map(function (l) {
      return '<li><div class="pt"><b>' + esc(l.pt) + '</b></div><span class="chip">' + esc(l.level) + '</span><div class="small muted">' + md(l.use) + '</div></li>';
    }).join('') + '</ol></div>';
    out += '<h2>By reader</h2><p class="small muted">Tap a reader to open it.</p>';
    out += (o.situations || []).map(function (sit, i) {
      var gl = (sit.genres || []).filter(function (id) { return GENRE[id]; }).map(function (id) { return '<a class="chip accent" href="#/guia/' + id + '">' + esc(GENRE[id].name) + '</a>'; }).join(' ');
      var row = function (label, items) { return items && items.length ? '<div class="op-row"><div class="op-label">' + label + '</div><div>' + ptList(items) + '</div></div>' : ''; };
      return '<details class="reveal op"' + (i === 0 ? ' open' : '') + '><summary>' + esc(sit.title) + '</summary>' +
        '<p class="small">' + md(sit.reader) + '</p>' + (gl ? '<div class="tile-meta" style="margin-bottom:10px">' + gl + '</div>' : '') +
        row('Saudação', sit.greeting) + row('Primeira frase', sit.opening) + row('Antes de despedir', sit.closingLines) + row('Despedida', sit.signoff) + row('Assinatura', sit.signature) +
        (sit.example ? '<div class="op-label" style="margin-top:12px">Example</div><div class="paper op-ex"><p>' + md(sit.example.opening) + '</p><p class="muted" style="margin:.2em 0">[…]</p>' + String(sit.example.closing || '').split('\n').map(function (l) { return '<p class="line">' + md(l) + '</p>'; }).join('') + '</div>' : '') +
        (sit.avoid && sit.avoid.length ? '<div class="op-label" style="margin-top:12px">Avoid</div><table class="words"><tbody>' + sit.avoid.map(function (a) { return '<tr><td class="avoid">' + md(a.bad) + '</td><td class="why" colspan="2">' + md(a.why) + '</td></tr>'; }).join('') + '</tbody></table>' : '') +
        '</details>';
    }).join('');
    var ph = o.phrases || {};
    var groups = [['purpose', 'Saying why you write'], ['reference', 'Referring to something earlier'], ['request', 'Asking politely'], ['closing', 'Closing lines']];
    out += '<h2>Phrase bank</h2>' + groups.filter(function (g) { return ph[g[0]] && ph[g[0]].length; }).map(function (g) {
      return '<div class="card"><h3>' + g[1] + '</h3><table class="words phrases"><tbody>' + ph[g[0]].map(function (x) { return '<tr><td class="pt">' + md(x.pt) + '</td><td class="why">' + md(x.en) + '</td></tr>'; }).join('') + '</tbody></table></div>';
    }).join('');
    if (o.traps && o.traps.length) out += '<h2>Traps</h2><div class="card"><table class="words"><thead><tr><th>Use</th><th>Not</th><th>Why</th></tr></thead><tbody>' + o.traps.map(function (t) {
      return '<tr><td class="use">' + md(t.good) + '</td><td class="avoid">' + md(t.bad) + '</td><td class="why">' + md(t.why) + '</td></tr>';
    }).join('') + '</tbody></table></div>';
    out += '<div class="btn-row"><a class="btn primary" href="#/treino/abertura">Drill: Aberturas</a></div>';
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
    var out = (query.de ? '<div class="btn-row" style="margin-top:0"><a class="btn small" href="#/' + esc(query.de) + '">‹ Voltar à lição</a></div>' : '') + '<div class="eyebrow">' + taskLabel(p.task) + ' · ' + (g ? esc(g.name) : '') + '</div><h1>' + esc(p.label) + '. ' + esc(p.title) + '</h1>';
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
  /* Leitner boxes. 1: right once, back tomorrow. 2: back in 3 days. 3: the week box. 4: the month box.
     5: right in the month box, stays for good. A right answer before the card is due keeps its box;
     a miss sends it to 0. A card left more than a week past due slips back one box per week, never below 1. */
  var DAY = 86400000;
  var INTERVAL = [0, 1, 3, 7, 30];
  var BOX_NAMES = ['', 'Acertou 1 vez', '3 dias', 'Semana', 'Mês', 'Fixada'];
  function cardState(id) { return st.cards[id] || (st.cards[id] = { box: 0, seen: 0, right: 0, wrong: 0 }); }
  function effBox(c, now) {
    if (!c || !c.box) return 0;
    if (c.box >= 5 || !c.due) return c.box;
    var late = (now || Date.now()) - Date.parse(c.due);
    if (late <= 7 * DAY) return c.box;
    return Math.max(1, c.box - Math.floor(late / (7 * DAY)));
  }
  function isDue(c, now) { return c && c.box > 0 && c.box < 5 && c.due && Date.parse(c.due) <= (now || Date.now()); }
  (function migrate() {
    Object.keys(st.cards).forEach(function (id) {
      var c = st.cards[id];
      if (c.box > 0 && !c.due) c.due = new Date(Date.parse(c.last || new Date().toISOString()) + INTERVAL[Math.min(c.box, 4)] * DAY).toISOString();
    });
  })();
  function modeStats(mode) {
    var ids = DRILLS.filter(function (d) { return mode === 'mix' || d.mode === mode; }).map(function (d) { return d.id; });
    var seen = 0, right = 0, wrong = 0, due = 0, boxes = [0, 0, 0, 0, 0, 0], now = Date.now();
    ids.forEach(function (id) {
      var c = st.cards[id]; if (!c) return;
      seen += c.seen ? 1 : 0; right += c.right; wrong += c.wrong;
      boxes[effBox(c, now)]++;
      if (isDue(c, now)) due++;
    });
    var acc = right + wrong ? Math.round(100 * right / (right + wrong)) : null;
    var learned = boxes[1] + boxes[2] + boxes[3] + boxes[4] + boxes[5];
    return { total: ids.length, seen: seen, right: right, wrong: wrong, learned: learned, week: boxes[3], month: boxes[4], fixed: boxes[5], boxes: boxes, due: due, acc: acc };
  }
  function boxBar(s) {
    var pct = function (n) { return s.total ? (100 * n / s.total).toFixed(2) : 0; };
    return '<div class="acc-bar boxes">' + [1, 2, 3, 4, 5].map(function (b) {
      return s.boxes[b] ? '<i class="b' + b + '" style="width:' + pct(s.boxes[b]) + '%" title="' + BOX_NAMES[b] + ': ' + s.boxes[b] + '"></i>' : '';
    }).join('') + '</div>';
  }
  function boxLine(s) {
    return s.learned + '/' + s.total + ' learned · ' + s.week + ' week · ' + (s.month + s.fixed) + ' month' + (s.due ? ' · <b>' + s.due + ' due</b>' : '');
  }
  function viewDrillHome() {
    var out = '<div class="eyebrow">Treino</div><h1>Drills</h1><p class="lede">Rounds of ' + ROUND_SIZE + '. Cards you miss come back later in the same round, and again in future rounds until they stick. </p><div class="card small box-legend"><b>How the bar fills.</b> Get a card right once and it counts. It comes back the next day, then in 3 days, then a week (the week box), then a month (the month box). Right in the month box and it stays there for good. A miss sends it back to the start, and a card left more than a week past its date slips back a box.<div class="legend-row">' + [1, 2, 3, 4, 5].map(function (b) { return '<span><i class="b' + b + '"></i>' + BOX_NAMES[b] + '</span>'; }).join('') + '</div></div>';
    var due = reviewIds().length;
    out += '<div class="modes"><a class="tile mode" href="#/treino/revisao"><div><div class="tile-title">Revisão do dia</div><div class="tile-sub">The cards that are due, and the ones you missed</div></div><div class="mode-stat">' + due + '<small>para hoje</small></div></a>';
    out += '<a class="tile mode" href="#/treino/ditado"><div><div class="tile-title">Ditado</div><div class="tile-sub">Hear a sentence, type it with every accent and ending</div></div><div class="mode-stat">' + ((st.dict && st.dict.n) ? Math.round(100 * st.dict.perfect / st.dict.n) + '%' : '–') + '<small>perfeitos</small></div></a>';
    if (GEN.formal) out += '<a class="tile mode" href="#/treino/formal"><div><div class="tile-title">Passe para o formal</div><div class="tile-sub">Rewrite what people say the way a formal text says it</div></div><div class="mode-stat">' + FORMAL.length + '<small>frases</small></div></a>';
    out += '<a class="tile mode mix" href="#/treino/surpresa"><div><div class="tile-title">Sessão surpresa</div><div class="tile-sub">Questions, corrections, a short text and cards from the whole Trilha</div></div><div class="mode-stat">' + (st.sessions || 0) + '<small>feitas</small></div></a>';
    ['mix'].concat(MODE_ORDER).forEach(function (m) {
      var s = modeStats(m);
      var label = m === 'mix' ? 'Tudo misturado' : MODES[m].label;
      var sub = m === 'mix' ? 'Every mode in one round' : MODES[m].en;
      out += '<a class="tile mode" href="#/treino/' + m + '"><div><div class="tile-title">' + label + '</div><div class="tile-sub">' + sub + '</div></div>' +
        '<div class="mode-stat">' + (s.acc == null ? '–' : s.acc + '%') + '<small>accuracy</small></div>' +
        boxBar(s) + '<div class="mode-foot">' + boxLine(s) + '</div></a>';
    });
    out += '</div><div class="btn-row"><a class="btn" href="#/treino/progresso">Progresso e exportar</a></div>';
    return out;
  }

  function weight(id) {
    var c = st.cards[id];
    if (!c || !c.seen) return 3;
    if (!c.box) return 6;
    if (c.box >= 5) return 0.05;
    return isDue(c) ? 5 : 0.3;
  }
  function buildRound(mode) {
    var pool = mode === 'revisao' ? reviewIds() : DRILLS.filter(function (d) { return mode === 'mix' || d.mode === mode; }).map(function (d) { return d.id; });
    var chosen = [];
    var n = Math.min(ROUND_SIZE, pool.length);
    while (chosen.length < n) {
      var tot = 0; pool.forEach(function (id) { tot += weight(id); });
      var r = Math.random() * tot, pick = pool[0];
      for (var i = 0; i < pool.length; i++) { r -= weight(pool[i]); if (r <= 0) { pick = pool[i]; break; } }
      chosen.push(pick); pool.splice(pool.indexOf(pick), 1);
    }
    var before = {};
    chosen.forEach(function (id) { var c = st.cards[id]; before[id] = { seen: c ? c.seen : 0, box: effBox(c) }; });
    return { mode: mode, queue: chosen, i: 0, first: {}, requeued: {}, answered: false, given: null, before: before, startedAt: new Date().toISOString() };
  }
  function roundLabel(m) { return m === 'mix' ? 'Tudo misturado' : m === 'revisao' ? 'Revisão do dia' : MODES[m].label; }
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
    if (!R.queue.length) { st.round = null; save(); return '<div class="eyebrow">Treino</div><h1>Nada para revisar</h1><p class="lede">Every card you have seen is up to date. New reviews come due tomorrow.</p><div class="btn-row"><a class="btn primary" href="#/treino/surpresa">Sessão surpresa</a><a class="btn" href="#/treino">Treino</a></div>'; }
    var d = DRILL[R.queue[R.i]];
    if (!d) { R.i++; if (R.i >= R.queue.length) { R.finished = true; R.showEnd = true; } save(); return viewRound(mode); }
    var label = roundLabel(mode);
    var out = '<div class="run-head"><div class="round-head"><div class="eyebrow" style="margin:0">' + label + '</div><span class="muted small">' + (R.i + 1) + ' / ' + R.queue.length + '</span></div>';
    out += '<div class="progress"><i style="width:' + Math.round(100 * R.i / R.queue.length) + '%"></i></div></div>';
    out += '<div class="drill" id="drill">' + (d.mode === 'acento' ? accentCard(d, R) : choiceCard(d, R)) + '</div>';
    out += '<div class="btn-row" style="justify-content:center"><a class="btn ghost small" href="#/treino">Sair</a></div>';
    return out;
  }
  var KEEP_ORDER = { genero: 1, contracao: 1 };
  function optionOrder(d, R) {
    if (KEEP_ORDER[d.mode]) return d.options;
    R.orders = R.orders || {};
    var saved = R.orders[d.id];
    if (!saved || saved.length !== d.options.length) {
      saved = d.options.slice();
      for (var i = saved.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = saved[i]; saved[i] = saved[j]; saved[j] = t; }
      R.orders[d.id] = saved; save();
    }
    return saved;
  }

  function choiceCard(d, R) {
    var ans = R.answered, given = R.given, ok = given === d.answer;
    var out = '<div class="mode-tag">' + esc(MODES[d.mode].label) + (d.tag ? ' · ' + esc(d.tag) : '') + '</div>';
    out += '<div class="drill-sentence">' + blankify(d.prompt, ans ? d.answer : '', ans ? 'good' : '') + '</div>';
    out += '<div class="options' + (d.mode === 'abertura' ? ' stack' : '') + '">' + optionOrder(d, R).map(function (o) {
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
    if (d.context) out += '<div class="drill-sentence">' + blankify(d.context, ans ? d.word : '…', ans ? 'good' : '') + '</div>';
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

  function gradeCard(d, given) {
    var ok = given === (d.mode === 'acento' ? d.word : d.answer);
    logActivity();
    var c = cardState(d.id);
    c.seen++; c.last = new Date().toISOString();
    if (ok) {
      c.right++;
      var eb = effBox(c);
      if (!eb || isDue(c)) { c.box = Math.min(eb + 1, 5); c.due = c.box < 5 ? new Date(Date.now() + INTERVAL[c.box] * DAY).toISOString() : null; }
    } else {
      c.wrong++; c.box = 0; c.due = null; c.lastWrong = given;
      st.history.push({ id: d.id, given: given, at: c.last });
      if (st.history.length > 400) st.history = st.history.slice(-400);
    }
    return ok;
  }
  function answer(d, R, given) {
    var ok = gradeCard(d, given);
    R.answered = true; R.given = given;
    if (!ok && !R.requeued.hasOwnProperty(d.id)) { R.requeued[d.id] = R.i; R.queue.push(d.id); }
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
    bindCard(d, R, box, function (given) { answer(d, R, given); });
  }
  function bindCard(d, V, box, onGiven) {
    if (V.answered) return;
    if (d.mode === 'acento') {
      box.querySelectorAll('.tl.can').forEach(function (b) {
        b.onclick = function () { accentWork.sel = +b.dataset.i; refresh(); };
      });
      box.querySelectorAll('#tray button').forEach(function (b) {
        b.onclick = function () { accentWork.chars[accentWork.sel] = b.dataset.ch; refresh(); };
      });
      box.querySelector('#acc-check').onclick = function () { onGiven(accentWork.chars.join('')); };
    } else {
      box.querySelectorAll('.opt').forEach(function (b) { b.onclick = function () { onGiven(b.dataset.opt); }; });
    }
    function refresh() { box.innerHTML = accentCard(d, V); bindCard(d, V, box, onGiven); }
  }

  function viewRoundEnd(R) {
    var ids = Object.keys(R.first), right = ids.filter(function (id) { return R.first[id]; }).length;
    var misses = ids.filter(function (id) { return !R.first[id]; }).map(function (id) { return DRILL[id]; }).filter(Boolean);
    var label = roundLabel(R.mode);
    var out = '<div class="eyebrow">' + label + '</div><h1>Round done</h1><div class="card" style="text-align:center"><div class="score-big">' + right + '/' + ids.length + '</div><div class="muted">right on the first try</div></div>';
    if (R.before) {
      var learnedNow = 0, up = 0, slipped = 0;
      ids.forEach(function (id) {
        var b = R.before[id] || { seen: 0, box: 0 }, c = st.cards[id] || { box: 0 };
        if (!b.box && c.box) learnedNow++;
        else if (c.box > b.box) up++;
        if (b.box && !c.box) slipped++;
      });
      var ms = modeStats(R.mode === 'revisao' ? 'mix' : R.mode);
      out += '<h2>What moved</h2><div class="stats"><div class="stat"><b>+' + learnedNow + '</b><span>newly learned</span></div><div class="stat"><b>' + up + '</b><span>moved up a box</span></div><div class="stat"><b>' + slipped + '</b><span>back to the start</span></div></div>';
      out += '<div class="card small">' + label + boxBar(ms) + '<div class="mode-foot">' + boxLine(ms) + '</div></div>';
    }
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
    out += '<div class="stats"><div class="stat"><b>' + st.rounds + '</b><span>rounds</span></div><div class="stat"><b>' + (all.acc == null ? '–' : all.acc + '%') + '</b><span>accuracy</span></div><div class="stat"><b>' + all.learned + '</b><span>of ' + all.total + ' learned</span></div></div>' + boxBar(all) + '<p class="small muted">' + boxLine(all) + '</p>';
    var doneL = LESSONS.filter(function (l) { return st.lessons[l.id]; }).length;
    if (LESSONS.length) out += '<div class="card small">Trilha: <b>' + doneL + '</b> of ' + LESSONS.length + ' lessons done. ' + st.writings.length + ' short texts written.</div>';
    out += '<div class="card"><table class="bands">' + MODE_ORDER.map(function (m) {
      var s = modeStats(m); return '<tr><td>' + MODES[m].label + '</td><td>' + (s.acc == null ? '–' : s.acc + '%') + ' · ' + s.learned + '/' + s.total + ' learned · ' + s.week + ' week · ' + (s.month + s.fixed) + ' month</td></tr>';
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
      return { id: d.id, mode: d.mode, item: d.mode === 'acento' ? (d.context || '').replace('___', '[' + d.word + ']') || d.word : d.prompt.replace('___', '[' + d.answer + ']'), lastWrong: c.lastWrong, wrong: c.wrong, right: c.right, box: effBox(c) };
    }).sort(function (a, b) { return b.wrong - a.wrong; });
    var wrongAnswers = st.history.slice(-150).map(function (h) { return { id: h.id, given: h.given, at: h.at }; });
    return {
      app: 'celpe-bras-prep', version: 2, exportedAt: new Date().toISOString(),
      rounds: st.rounds, sessions: st.sessions || 0, overall: modeStats('mix'), byMode: byMode,
      lessons: st.lessons, streak: streakDays(), days: st.days, dictation: st.dict || null, practiceDone: st.done, misses: misses, recentWrongAnswers: wrongAnswers,
      lessonMisses: st.lessonMisses.slice(-80), writings: st.writings.slice(-40)
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
      st = { cards: {}, done: {}, history: [], rounds: 0, lessons: {}, runs: {}, writings: [], lessonMisses: [] }; save(); route();
    };
  }

  /* ---------- bind per view ---------- */
  function bind(sec, parts) {
    if (!sec) bindPath();
    if (sec === 'trilha' && LESSON[parts[1]]) {
      if (!parts[2]) bindLessonIntro(LESSON[parts[1]]);
      else if (parts[2] === 'fim') bindRunEnd(lessonCtx(LESSON[parts[1]]));
      else if (player) bindStep();
    }
    if (sec === 'treino' && GEN[parts[1]]) { if (parts[2] === 'fim') bindRunEnd(genCtx(parts[1])); else if (player) bindStep(); return; }
    if (sec === 'guia' && TASK[parts[1]]) bindSample(TASK[parts[1]].sample);
    if (sec === 'guia' && GENRE[parts[1]]) bindSample(GENRE[parts[1]].sample);
    if (sec === 'pratica' && PROMPT[parts[1]]) bindPrompt(PROMPT[parts[1]]);
    if (sec === 'treino' && parts[1] === 'progresso') bindProgress();
    else if (sec === 'treino' && (parts[1] === 'mix' || parts[1] === 'revisao' || MODES[parts[1]])) {
      var R = st.round;
      var again = document.getElementById('again');
      if (again) again.onclick = function () { st.round = buildRound(R.mode); accentWork = null; save(); route(); };
      else bindDrill(R);
    }
  }

  route();
})();
