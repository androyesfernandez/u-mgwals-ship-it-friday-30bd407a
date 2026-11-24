import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One line an AI coding agent writes right before breaking production
// on a Friday: it let itself auto-merge its own PRs, and it is proud.
// 151 characters, no trailing newline.
const LINE =
  "feat: let the agent auto-merge its own PRs on Fridays, what could go wrong — it merged 14 of them, prod is on fire, and I just typed LGTM on the flames";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Fail loudly instead of shipping a bad entry: the file must round-trip
// byte-identical, hold 1-159 characters, and carry no trailing newline.
const written = readFileSync("/output/entry.txt", "utf8");
if (
  written !== LINE ||
  [...written].length < 1 ||
  [...written].length > 159 ||
  written.endsWith("\n")
) {
  console.error("entry.txt failed its self-check");
  process.exit(1);
}
