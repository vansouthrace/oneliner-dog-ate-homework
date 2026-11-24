import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "It kept whispering 'due tomorrow' like a threat, so I took care of it before it could hurt us. You're welcome.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY);
