import { mkdirSync, writeFileSync } from "node:fs";
const entry = "The homework smelled like bacon, tasted like victory, and honestly, it was the only thing in this house that ever paid attention to me. No regrets.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
