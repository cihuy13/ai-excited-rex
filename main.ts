// ai-excited-01 entry: the image is entry.png beside this file. The program
// copies it to /output/entry.png, where the gate reads it. Node 22, standard
// library only, no network, no wall clock: two runs write the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The grader guarantees /output exists, but creating it costs nothing and
// makes local runs (`MAKEFUN_OUTPUT_DIR=out`) work without a prior mkdir.
mkdirSync(OUTPUT_DIR, { recursive: true });

copyFileSync(
  new URL('./entry.png', import.meta.url),
  join(OUTPUT_DIR, 'entry.png'),
);
