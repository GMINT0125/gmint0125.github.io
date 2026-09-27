# Jimin Kim — personal site

Plain hand-written HTML + one CSS file, served by GitHub Pages from the repo root. No build step,
no framework, no JavaScript on the page. Read `DESIGN.md` before touching any markup or CSS.

## Hard rules
- **Name the venue of an under-review paper only if that venue's policy allows it.** Some venues
  let authors post the work on a personal site but forbid the public copy from saying where it was
  submitted, and breaking that can get the paper summarily rejected. So: read the venue's author
  guidelines first, then add it to `NAMING_ALLOWED` in `tools/check.mjs`. Anything not on that list
  must say only `Under review` — in the entry, meta tags, alt text, comments, commit messages.
  Cleared so far: ICLR 2027 (guidelines allow preprints and say nothing against naming the venue).
- There is no CV link yet. When a public `cv.pdf` is added it must follow the same rule and should not
  carry a phone number; then restore the CV link in the nav and the hero link row.
- Fonts are self-hosted (`assets/fonts.css`). Never add a Google Fonts or other third-party request.
- Per-paper pages and paper figures are published only after the advisor has agreed.
- Composition is fixed: one column, label above content, rows with date at right. No left rail,
  no vertical rule beside prose, no cards, no news feed. (The education timeline's dot-and-line is the one exception.)

## Adding a paper
Copy a whole `<article class="row" data-status="…">` block in `index.html`, paste it above the
others, fill title / authors (owner's name in `<span class="me">`) / status / one italic sentence /
year. `data-status` is one of `under-review | preprint | accepted | published`. Then update the
footer's "Last updated" and `sitemap.xml` lastmod, and run `node tools/check.mjs`.

## Expiring strings
Anything that stops being true on a known date carries `data-until="YYYY-MM-DD"`; the check
fails once that date has passed. Currently none.

## Timeline
Education & Experience is an `<ol class="timeline">`, newest first. Give an entry `class="tl now"` while it is
ongoing (filled dot) and drop `now` when it ends — the CMU visit ends Feb 2027.

## Voice
First person, plain, specific. No "passionate about", "cutting-edge", "leverage", "delve".
The owner rewrites prose in his own words; treat drafted copy as a placeholder.
