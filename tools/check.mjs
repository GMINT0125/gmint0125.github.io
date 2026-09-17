// Zero-dependency pre-publish check. Run: node tools/check.mjs
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url)); // decodes non-ASCII folder names
const PUBLISHED = new Set(['.html', '.css', '.xml', '.txt', '.json', '.svg']);
const SKIP = new Set(['.git', '.github', 'node_modules', 'tools']);
const STATUSES = new Set(['under-review', 'preprint', 'accepted', 'published']);
const BANNED = [/passionate about/i, /cutting[- ]edge/i, /\bdelve\b/i, /\bleverag/i, /in today's rapidly/i];

const files = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    if (SKIP.has(name)) continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (PUBLISHED.has(extname(name))) files.push(p);
  }
})(ROOT);

const errors = [], warnings = [];
const index = readFileSync(join(ROOT, 'index.html'), 'utf8');

const statuses = [...index.matchAll(/data-status="([^"]*)"/g)].map(m => m[1]);
for (const s of statuses) if (!STATUSES.has(s)) errors.push(`unknown data-status "${s}"`);

// A paper still under review must not name where it was sent. Many venues' blind-review
// policies allow posting the work itself but forbid the public copy from revealing the
// submission target, so we check the under-review entries against the usual acronyms.
const VENUES = /\b(AAAI|NeurIPS|ICML|ICLR|COLM|ACL|EMNLP|NAACL|EACL|Interspeech|ICASSP|CVPR|ICCV|ECCV|WACV|BMVC|KDD|AISTATS|UAI|MLSys|SIGGRAPH)\b/i;
const SUBMIT = /\b(submitted|submission|under submission)\b/i;
for (const m of index.matchAll(/<article[^>]*data-status="under-review"[\s\S]*?<\/article>/g)) {
  const block = m[0];
  const venue = block.match(VENUES);
  if (venue) errors.push(`an under-review entry names a venue ("${venue[0]}") — it must say only "Under review"`);
  const submit = block.match(SUBMIT);
  if (submit) errors.push(`an under-review entry says "${submit[0]}" — drop submission language`);
}
for (const m of index.matchAll(/data-until="(\d{4}-\d{2}-\d{2})"/g))
  if (new Date(m[1]) < new Date()) errors.push(`data-until ${m[1]} has passed — update that line`);

const prose = index.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ');
for (const re of BANNED) if (re.test(prose)) errors.push(`banned phrase ${re}`);

if (/href="cv\.pdf"/.test(index) && !existsSync(join(ROOT, 'cv.pdf'))) errors.push('index.html links cv.pdf but the file is missing');
for (const f of files) if (/fonts\.(googleapis|gstatic)\.com/.test(readFileSync(f, 'utf8'))) errors.push(`${f.replace(ROOT, '')}: third-party font request — fonts are self-hosted`);
if (/<div class="photo"/.test(index)) warnings.push('portrait is still a placeholder');

for (const w of warnings) console.log('warn  ' + w);
for (const e of errors) console.log('ERROR ' + e);
console.log(`${files.length} files checked, ${errors.length} error(s), ${warnings.length} warning(s)`);
process.exit(errors.length ? 1 : 0);
