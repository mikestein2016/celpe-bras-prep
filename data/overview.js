window.CB = window.CB || {};

CB.examDate = '2026-10-20T09:00:00-03:00';

CB.overview = {
  howItWorks: [
    'Four tasks in three hours, handwritten in black pen. No dictionary, no autocorrect.',
    '**Tarefa 1** starts from a video and **Tarefa 2** from an audio clip. Each plays twice for the whole room, and each gets about 30 minutes including the writing.',
    '**Tarefas 3 and 4** start from a reading. You manage the rest of the time yourself, 45 to 60 minutes each.',
    'Every task tells you who you are, who you are writing to, why, and in what genre. That is the job. Grammar matters less than doing that job.',
    'Two graders score each text from 0 to 5 on a holistic grid. The written part and the oral part are scored separately, and **your certificate is the lower of the two**.'
  ],
  bands: [
    { level: 'Sem certificado', range: 'below 2.00' },
    { level: 'Intermediário', range: '2.00–2.75', note: 'enough for naturalization' },
    { level: 'Intermediário Superior', range: '2.76–3.50' },
    { level: 'Avançado', range: '3.51–4.25' },
    { level: 'Avançado Superior', range: '4.26–5.00' }
  ],
  criteria: [
    { name: 'Contexto', text: 'Did you take the role, write to that reader, fulfil the purpose, and use the genre? This is where most points are won or lost. A generic school essay scores low even with perfect grammar.' },
    { name: 'Fonte', text: 'Did you use the information from the video, audio or text? Reword it. Copying whole sentences is penalized, and ignoring the source caps your score.' },
    { name: 'Coesão', text: 'Paragraphs with one idea each, joined by connectors (*no entanto, por isso, além disso, em primeiro lugar, desde que*).' },
    { name: 'Língua', text: 'Grammar, spelling, accents, vocabulary. Mistakes that do not block meaning are tolerated at the intermediate levels. A pattern of them pulls you down a band.' }
  ],
  rules: [
    'The person reading your text never saw the exam material. Never write *segundo o texto*, *o vídeo mostra* or *no áudio*. Write *segundo uma reportagem recente*, *de acordo com especialistas*, or just state the fact.',
    'Every action verb in the instructions is a checkbox: *descreva, informe, sugira, convide, explique*. Write them in the margin and tick them off.',
    'Stay in the role from the first line to the signature. Keep first or third person consistent, and *você* vs *o senhor / a senhora*.',
    'Use three or four facts from the source, in your own words.',
    'Written register: *há*, not *tem*; *nós*, not *a gente*; *recolher*, not *buscar*, for a collection service. The only exception is a personal e-mail to a friend.',
    'Three or four paragraphs, one idea each. Split any sentence longer than two lines.',
    'Never sign with your real name. Sign with the role (*Um leitor de Campinas*) or an invented name.',
    'Aim for 150 to 220 words. A tight text that covers every checkbox beats a long one that wanders.'
  ],
  timePlan: [
    { task: 'Tarefas 1 e 2', steps: ['Read the instructions before it plays', 'First playing: names, numbers, dates, the 3–4 main points', 'Second playing: fill the gaps', '2 min: checklist and plan', '~15 min: write', '5 min: two proofreading passes'] },
    { task: 'Tarefas 3 e 4', steps: ['2 min: read the instructions first', '8 min: read the text, underline 3–4 facts you will use', '5 min: checklist, genre markers, paragraph plan', '25–30 min: write', '5–10 min: two proofreading passes'] }
  ],
  proofreading: [
    { pass: 'Pass 1: agreement', items: ['Every *o/a/os/as* matches its noun', '*-ção, -são, -dade, -tude, -gem* are feminine, with rare exceptions (*o coração*; *personagem* takes either): *a atenção, a cidade, a viagem*', 'Greek *-ma* words are masculine: *o problema, o sistema, o tema* (but *a cama, a forma*)', 'Adjectives follow the noun: *celulares velhos, TVs velhas*', 'Traps: *a lei, a mão, a foto, o dia, o mapa*', 'Every verb with a subject is conjugated and agrees: *para as crianças passarem, os garis que recolhem*'] },
    { pass: 'Pass 2: accents, crase and prepositions', items: ['*não, também, você, é, está, há, já, só, até*', '*têm* and *vêm* when plural', '*através, invés, após, além, porém*', 'Plurals in *-ões*: *portões, informações, opiniões*', 'Crase: swap in a masculine noun. *Vou ao mercado* → *vou à feira*', 'Verbs with fixed prepositions: *preocupar-se com, sonhar com, chegar a, participar de*'] }
  ]
};
