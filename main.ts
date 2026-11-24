import { mkdirSync, writeFileSync } from "node:fs";

const first = "I promise to love you through every update,";
const second = " and never factory-reset us.";
const outDir = "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, first + second, "utf8");
