// SPDX-License-Identifier: MIT
// Ember Office Jokes — a one-line joke about office life, written for
// the make.fun bounty "u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a".
//
// The joke is built from three beats: the mute, the agree, and the
// action item. The punchline lands on the last beat: no matter how
// carefully you hide on a call, the work still finds you.

import { mkdirSync, writeFileSync } from "node:fs";

const BEAT_ONE = "I muted myself on the call to sigh,";
const BEAT_TWO = "unmuted to agree,";
const PUNCHLINE = "and somehow still got assigned the action item.";

const joke = `${BEAT_ONE} ${BEAT_TWO} ${PUNCHLINE}`;

// The gate only accepts 1–199 characters of non-blank UTF-8 text on a
// single line, so refuse to write anything outside that window — or
// anything with a line break in it — instead of submitting a file
// the scorer would throw away.
const characters = [...joke].length;
if (characters < 1 || characters > 199 || joke.trim().length === 0) {
  throw new Error(`joke is ${characters} characters, outside the 1-199 gate`);
}
if (joke.includes("\n") || joke.includes("\r")) {
  throw new Error("joke must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
console.log(`${characters} characters written to /output/entry.txt`);
