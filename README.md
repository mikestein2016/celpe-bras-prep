# Celpe-Bras Escrita

Study pack for the Celpe-Bras written part. The home screen is the **Trilha**, a linear path of 21 daily lessons (one a day to exam day) that mix short explanations, questions, find-the-mistake corrections, ordering, short typed writing with a model to compare, drill cards, and handwritten timed prompts. Missed items come back at the end of each lesson, and replaying a lesson draws new questions and cards.

The home screen also shows the day's streak and how many cards are due, with a one-tap Revisão do dia. Two exercises target written accuracy directly: **Ditado** (the device's pt-BR voice reads a sentence, the learner types it without autocorrect, and it is checked word by word for accents and endings) and **Passe para o formal** (rewrite a spoken sentence for a formal text, and see which key changes were made). Both appear in Treino, in the Sessão surpresa, and inside the grammar lessons.

Around it: a guide to the four tasks and every common genre with annotated model answers (Guia), a bank of practice prompts with model answers (Prática), and tap-to-answer drills by topic with a Sessão surpresa that mixes everything (Treino).

Drill cards use Leitner boxes: right once (back tomorrow), 3 days, the week box, the month box, then fixed for good. A miss resets a card; a card left more than a week past due slips back a box.

Static site, no build step. Open `index.html` or serve the folder. Content lives in `data/*.js` (see `SCHEMA.md`). Progress is stored in the browser, which is asked to keep it. **Salvar backup** (Treino → Progresso, and a reminder on the Trilha when the last one is over 3 days old) saves one JSON file to the device: the summary Claude reads plus the full state. **Restaurar** loads that file on this or another device, and the Trilha offers it automatically when it opens with no progress. Tasks 1 and 2 have an Ouvir button that reads the transcript aloud with the device's pt-BR voice, with the transcript folded underneath.

Checks: `node tests/validate.js` (content rules, seconds), `node tests/player.js` (plays a dev lesson with every step type), `node tests/fixes.js` (backup and restore, reset, stale runs, midnight due dates, Ditado filter, listening), `node tests/smoke.js [url]` (every page and every lesson step at phone width, a few minutes), `scripts/deploy-check.sh [--smoke]` (push and wait for Pages).
