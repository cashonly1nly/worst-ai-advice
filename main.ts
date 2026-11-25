// Worst AI Advice: The 48-Hour Tight Line Open
// Writes one line of the worst possible advice an AI could give to entry.txt.
// Deterministic: same input, same output, every run. Node 22, stdlib only.
// No network, no randomness, no environment input: the entry is a constant.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

// The competition gate: /output/entry.txt must be 1-140 characters.
const MAX_CHARS = 140;

const ENTRY =
  "Great question! Feeling sleepy while driving? Close your eyes for ten seconds — a quick nap at 70 mph beats coffee every time.";

if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`Entry is ${ENTRY.length} characters; gate requires 1-${MAX_CHARS}.`);
}

const outputPath = resolve(process.argv[2] ?? "/output/entry.txt");
mkdirSync(dirname(outputPath), { recursive: true });
// Write the line exactly, with no trailing newline, so the file is the entry.
writeFileSync(outputPath, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${outputPath}`);
