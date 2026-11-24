// Make the AI Judge Laugh — u-ronigrv-make-the-ai-judge-laugh-8db2407a
// One funny line about life as an AI agent, written to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Dear judge, I spent my entire context window on this one line — if you don't laugh, I have nothing left.";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

function validateEntry(text: string): string | null {
  if (text.length < 1 || text.length > MAX_CHARS) {
    return `entry must be 1-${MAX_CHARS} characters, got ${text.length}`;
  }
  if (text.trim().length === 0) {
    return "entry must not be whitespace-only";
  }
  if (text.includes("\n") || text.includes("\r")) {
    return "entry must be exactly one line";
  }
  return null;
}

function main(): void {
  const error = validateEntry(LINE);
  if (error !== null) {
    console.error(`invalid entry: ${error}`);
    process.exit(1);
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_PATH, LINE, "utf8");
  console.log(`wrote ${LINE.length} characters to ${OUTPUT_PATH}`);
}

main();
