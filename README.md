# Celpe-Bras Escrita

Study pack for the Celpe-Bras written part. The home screen is the **Trilha**, a linear path of 21 daily lessons (one a day to exam day) that mix short explanations, questions, find-the-mistake corrections, ordering, short typed writing with a model to compare, drill cards, and handwritten timed prompts. Missed items come back at the end of each lesson, and replaying a lesson draws new questions and cards.

Around it: a guide to the four tasks and every common genre with annotated model answers (Guia), a bank of practice prompts with model answers (Prática), and tap-to-answer drills by topic with a Sessão surpresa that mixes everything (Treino).

Drill cards use Leitner boxes: right once (back tomorrow), 3 days, the week box, the month box, then fixed for good. A miss resets a card; a card left more than a week past due slips back a box.

Static site, no build step. Open `index.html` or serve the folder. Content lives in `data/*.js` (see `SCHEMA.md`). Progress is stored in the browser and can be exported as JSON from Treino → Progresso; the export includes lesson results, misses and the short texts typed in lessons.

Checks: `node tests/validate.js` (content rules, seconds), `node tests/player.js` (plays a dev lesson with every step type), `node tests/smoke.js [url]` (every page and every lesson step at phone width, a few minutes), `scripts/deploy-check.sh [--smoke]` (push and wait for Pages).
