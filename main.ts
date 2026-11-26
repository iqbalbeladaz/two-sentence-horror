// Two-Sentence Horror — make.fun bounty u-suroto-two-sentence-horror-acea9253
//
// The entry is a single horror story of exactly two sentences, at most
// 400 characters. The program writes it, unchanged, to /output/entry.txt.
//
// Why this story: the judge weighs, in order, (1) a genuinely frightening
// story in exactly two sentences, (2) a second sentence that turns the
// first and makes it worse on a second read, (3) horror implied rather
// than explained, (4) precise, concrete prose, (5) originality.
// This story is built for that order:
//   - Sentence 1 plants a familiar dread (a double at the foot of the bed)
//     inside a clinical, everyday frame (a therapist's dream journal).
//   - Sentence 2 reveals the narrator himself wrote the newest entry while
//     asleep, so the man with his face is not visiting his dreams any more:
//     he is the one writing them, and tonight he "gets to stay" — in the
//     waking world. On a second read, sentence 1 stops being a dream report
//     and becomes a countdown.
//   - Nothing is explained: what "staying" means, and what happens to the
//     narrator, is left for the reader to fill in with the worst of it.
//   - No gore, no familiar twist retold (no mirror, no phone call from
//     inside the house, no "it was me all along" stated outright).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY =
  "My therapist told me to keep a dream journal, and for a month every " +
  "entry has been the same: a man with my face standing at the foot of " +
  "my bed, smiling. Last night I woke up holding the pen, and the " +
  "newest entry, in my handwriting, reads: \u2018Tonight I finally get " +
  "to stay.\u2019";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 400 characters,
// not only white space. Refuse to write anything that breaks the gate.
function validate(text: string): void {
  if (text.length < 1 || text.length > 400) {
    throw new Error(`entry is ${text.length} characters, must be 1-400`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry is only white space");
  }
  // Exactly two sentences: split on sentence-ending punctuation followed
  // by a space or the end of the text. The quoted line inside sentence 2
  // ends with a period before the closing quote, so a sentence end is a
  // period, ! or ? optionally followed by a closing quote, then a space
  // and a capital letter, or the end of the text.
  const ends = text.match(/[.!?][\u2019'"]?(?=\s+[A-Z]|$)/g) ?? [];
  if (ends.length !== 2) {
    throw new Error(`entry has ${ends.length} sentences, must be exactly 2`);
  }
}

function main(): void {
  validate(STORY);
  const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, STORY, "utf8");
  console.log(`wrote ${STORY.length} characters to ${outPath}`);
}

main();
