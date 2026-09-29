// Dev fixture for tests/player.js: one lesson with every step type. Not loaded by the site.
window.CB = window.CB || {};
CB.lessons = CB.lessons || [];
CB.lessons.push({
  id: 'l00-dev', n: 0, unit: 1, title: 'Lição de teste', en: 'Exercises every step type.', minutes: 5,
  steps: [
    { type: 'teach', title: 'Há, not tem', body: ['In writing, use *há* for there is.'], examples: [{ pt: 'Há muitos buracos.', en: 'There are many potholes.' }], table: [{ use: 'há', avoid: 'tem', why: 'written register' }] },
    { type: 'pick', n: 1, from: [
      { type: 'choice', q: 'Which is formal?', options: ['Há dois problemas.', 'Tem dois problemas.'], answer: 'Há dois problemas.', why: 'Há is the written form.' },
      { type: 'choice', q: 'Which is formal? (b)', options: ['Nós vamos.', 'A gente vai.'], answer: 'Nós vamos.', why: 'Nós is the written form.' },
      { type: 'choice', q: 'Which is formal? (c)', options: ['para você', 'pra você'], answer: 'para você', why: 'Para is the written form.' }
    ] },
    { type: 'order', q: 'Put it in order.', items: ['Prezados senhores,', 'Escrevo para reclamar.', 'Aguardo retorno.', 'Atenciosamente,'], why: 'Greeting, purpose, request, sign-off.' },
    { type: 'fix', title: 'Find the 2 mistakes.', text: 'Prezados senhores,\nEscrevo porque {{o|a|*lei* is feminine.}} lei nova não {{e|é|*é* is the verb.}} clara para os moradores.' },
    { type: 'write', q: 'Write one opening line.', text: 'Você reclama de uma cobrança.', model: ['Escrevo para contestar uma cobrança indevida.'], check: ['States the purpose', 'Formal register'] },
    { type: 'drills', modes: ['genero'], tags: ['-ção'], n: 2 },
    { type: 'prompt', id: 'c-airfryer', note: 'Practice a complaint.' }
  ]
});
