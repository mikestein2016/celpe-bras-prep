# Content schema

The site is plain static HTML/JS with no build step. Every content file is a plain script (not a module, not JSON) that appends to a global, so the page also works opened from disk:

```js
window.CB = window.CB || {};
CB.genres = CB.genres || [];
CB.genres.push({ ... }, { ... });
```

Use the same pattern for `CB.tasks`, `CB.prompts`, `CB.drills`.

## House rules for all content

- **Audience:** one learner, an American living in Brazil, fluent speaker, intermediate writer who leans on autocorrect. Target level: Celpe-Bras written part. Explanations are in **plain English**; all exam material, examples and model answers are in **Brazilian Portuguese**.
- **Portuguese must be flawless** standard Brazilian written Portuguese: accents, gender agreement, crase, regência, personal infinitive. Proofread every Portuguese string twice before finishing (one pass for gender/number agreement, one for accents).
- **Model answers are reachable, not literary.** Clean B2 structures a strong intermediate writer could reproduce by hand in 30 to 60 minutes. 150 to 220 words. Short sentences beat long ones.
- **Model answers never mention the exam material.** No "segundo o texto", "o vídeo", "o áudio". The reader of the text never saw it. Refer to "uma reportagem recente", "especialistas", "uma pesquisa", or state the fact directly.
- **Never sign with a real name.** Sign with the role ("Um leitor de Campinas", "Comissão Ambiental") or an obviously invented name.
- **Facts:** use invented local names (bairros, lojas, pessoas, rádios). Only state real-world facts you are certain of (e.g. the Código de Defesa do Consumidor's 7-day right of withdrawal). Never attach an invented statistic to a real named institution.
- **English prose style:** no em dashes, no filler words (actually, really, just, very), no "X, a Y" appositive reveals, no colon-as-dramatic-pivot. Plain, direct sentences.
- Plain text only inside strings except: `*italics*` for Portuguese words inside English explanations, and the `{{n|...}}` highlight markers in model answers.

## CB.genres — one object per written genre

```js
{
  id: 'carta-do-leitor',            // url slug, fixed list below
  name: 'Carta do leitor',
  english: 'Letter to the editor',
  summary: 'EN, 1–2 sentences: what it is and how Celpe-Bras uses it.',
  role: {
    enunciador: 'EN: who you usually are in this genre',
    interlocutor: 'EN: who reads it',
    proposito: 'EN: the typical purposes the prompt asks for'
  },
  register: {
    level: 'Formal',                // Formal | Semi-formal | Informal | Neutral
    notes: 'EN: person (1st/3rd), você vs o senhor/a senhora, what register slips to avoid'
  },
  mustHave: ['EN checklist item, may quote *português*', ...],        // 4–7
  skeleton: [ { part: 'Local e data', what: 'EN: what goes here', example: 'PT line' }, ... ],  // the parts in order
  wordChoices: [ { use: 'há', avoid: 'tem', why: 'EN reason' }, ... ],  // 4–8, specific to this genre's register
  pitfalls: ['EN common mistake and fix', ...],                        // 4–6
  sample: {
    task: 3,                         // 1 = video, 2 = audio, 3 or 4 = reading
    source: {
      kind: 'texto',                 // texto | video | audio
      title: 'PT title',
      body: ['PT paragraph', ...]    // for video/audio: a transcript, one line per speaker turn, "Nome: fala"
    },
    prompt: 'PT enunciado written the way Celpe-Bras writes it: role, reader, genre, purpose, and the action verbs',
    answer: ['PT paragraph or line', ...],   // one array element per line/paragraph of the finished text
    notes: [ { n: 1, cat: 'genero', text: 'EN: why this choice earns points' }, ... ],
    why5: 'EN paragraph: why this earns a 5, walking through context (role/reader/purpose/genre), use of source, cohesion, language',
    wordCount: 180
  }
}
```

**Highlight markers in `answer`:** wrap the span in `{{n|texto}}` where `n` matches a note. Example: `'{{1|Prezados editores,}}'`. Every note must have at least one marker; a note can be reused by several markers. Aim for 8 to 12 notes per answer covering every category.

**Note categories (`cat`):**
- `genero` genre markers and format (title, vocativo, assunto, despedida, lide)
- `papel` role, reader, purpose (where the text establishes who is writing to whom and why)
- `fonte` information taken from the source and reworded
- `coesao` connectors, paragraphing, reference chains
- `registro` register and word choice (why this word and not that one)
- `lingua` grammar worth copying (subjunctive, personal infinitive, agreement, crase, regência)

**Genre ids:** `carta-do-leitor`, `reclamacao`, `solicitacao`, `email-pessoal`, `artigo-opiniao`, `blog`, `noticia`, `aviso`, `folheto`, `convite`, `resumo`.

## CB.tasks — guides for Tarefa 1 (video) and Tarefa 2 (audio)

```js
{
  id: 'tarefa-1',                    // tarefa-1 | tarefa-2
  name: 'Tarefa 1: vídeo',
  summary: 'EN: what happens in the room, timing, how many times it plays',
  howItWorks: ['EN step', ...],
  strategy: ['EN step: what to do during first play, second play, before writing, after', ...],
  notesExample: ['PT/EN shorthand notes a candidate might take while watching', ...],
  pitfalls: ['EN', ...],
  sample: { ...same shape as genre sample, source.kind 'video' or 'audio', body is the transcript... },
  genre: 'blog'                      // genre id the sample uses
}
```

## CB.prompts — practice bank (no model answers)

```js
{
  id: 'a-celular',                   // slug
  label: 'A',                        // short code
  title: 'PT short title',
  genre: 'email-pessoal',            // genre id (reclamação/solicitação e-mails count as their purpose genre)
  task: 1,                           // 1 video | 2 audio | 3 or 4 reading
  minutes: 30,                       // 30 for tasks 1–2, 45 for 3–4
  source: { kind: 'texto' | 'video' | 'audio', title: 'PT', body: ['PT', ...], note: 'EN optional: e.g. "Read once, cover it, then write."' },
  prompt: 'PT enunciado',
  checklist: ['EN: what the grader expects, shown only after writing', ...]
}
```

## CB.drills — the game deck

Accent mode (tap a letter to add an accent):

```js
{ id: 'ac-001', mode: 'acento', word: 'através', context: 'Falamos ___ do aplicativo.', rule: 'EN short rule' }
```

- `word` is the correct form. The game strips the accents and the learner restores them. Include words that need **no** accent in context (e.g. `tem` in "Ele ___ dois filhos.") so the answer is not always "add one".
- `context` is optional; `___` marks where the word goes.

Choice modes (tap one option):

```js
{ id: 'ge-001', mode: 'genero', prompt: 'Concordo com ___ lei.', options: ['o', 'a'], answer: 'a', rule: '*lei* is feminine.', tag: 'exceção' }
```

- `mode`: `genero` | `contracao` | `regencia` | `conjugacao`
- `prompt` has exactly one `___`.
- `rule` is shown after answering: one short EN line naming the rule, not just the answer.
- `tag` optional group label (e.g. `-ção`, `-ma`, `crase`, `infinitivo pessoal`).

## CB.models — model answers for the practice prompts

One file per batch (`data/models-1.js`, `models-2.js`, `models-3.js`), keyed by prompt id:

```js
window.CB = window.CB || {};
CB.models = CB.models || {};
CB.models['a-brecho'] = {
  answer: ['PT line with {{n|highlight}} markers', ...],   // same rules as a genre sample answer
  notes: [ { n: 1, cat: 'genero', text: 'EN why this earns points' }, ... ],   // 8–12 notes, all six categories
  why5: 'EN paragraph: why this earns a 5',
  wordCount: 185
};
```

The model answer must satisfy every item in that prompt's `checklist`, use the source facts reworded (never copied, never "segundo o texto" unless the genre is resumo or carta do leitor naming the report), and follow the genre's conventions as described in that genre's guide in `data/genres-a.js` / `data/genres-b.js`.
