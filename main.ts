// One-line office joke for make.fun's "Make the AI Judge Laugh: Office Jokes" bounty.
// The program's only job: write the joke to entry.txt in the output directory
// the grader provides ($MAKEFUN_OUTPUT_DIR, default /output).

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const JOKE =
  'I muted myself in a meeting and nobody noticed for three weeks — including me.';

// The gate only accepts 1-199 characters of non-blank UTF-8 text, so refuse
// to write anything that does not fit instead of shipping an invalid entry.
if (JOKE.length < 1 || JOKE.length > 199 || JOKE.trim() === '') {
  console.error(`Joke is ${JOKE.length} chars; the gate needs 1-199.`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), JOKE, 'utf8');
console.log(`entry.txt written (${JOKE.length} chars)`);
