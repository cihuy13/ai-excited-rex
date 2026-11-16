// He Tapped the Glass (v2): hand the entry picture to the harness output folder.
import { copyFileSync, mkdirSync } from "node:fs";
import { join, resolve } from "node:path";

const repoRoot = resolve(import.meta.dirname);
const picture = join(repoRoot, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(picture, join(outDir, "entry.png"));
