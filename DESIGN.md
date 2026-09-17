---
version: alpha
name: Jimin Kim — personal site
description: A quiet scholarly page on warm paper. One serif does the reading, one sans
  does the metadata, one mono does dates. A single oxide-red accent appears only when
  the reader touches something. Structure comes from whitespace and hairlines, never
  from cards, shadows or a sidebar. The publication list is the protagonist.
colors:
  canvas: "#fbfaf7"
  ink: "#16150f"
  body: "#35322a"
  muted: "#6b665a"
  rule: "#ddd8cc"
  rule-strong: "#8f8878"
  accent: "#8a3324"
  surface: "#f2efe9"
  dark-canvas: "#14130f"
  dark-ink: "#ece8dd"
  dark-body: "#cbc5b6"
  dark-muted: "#9b9484"
  dark-rule: "#2e2b24"
  dark-rule-strong: "#6b6455"
  dark-accent: "#d4795e"
  dark-surface: "#1e1c18"
typography:
  display:
    fontFamily: "'Source Serif 4', Georgia, serif"
    fontSize: 56px
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: -0.02em
  name-ko:
    fontFamily: "'Noto Serif KR', serif"
    fontSize: 25px
    fontWeight: 400
  prose:
    fontFamily: "'Source Serif 4', Georgia, serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.65
  row-title:
    fontFamily: "'Source Serif 4', Georgia, serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.32
  gloss:
    fontFamily: "'Source Serif 4', Georgia, serif"
    fontSize: 16.5px
    fontStyle: italic
    lineHeight: 1.55
  meta:
    fontFamily: "'Public Sans', system-ui, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "'Public Sans', system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 600
    letterSpacing: 0.11em
    textTransform: uppercase
  date:
    fontFamily: "'IBM Plex Mono', ui-monospace, monospace"
    fontSize: 13px
    fontVariantNumeric: tabular-nums
rounded:
  none: 0px
  sm: 2px
  md: 8px
  photo: 14px
spacing:
  xs: 4px
  sm: 8px
  md: 14px
  row: 22px
  lg: 32px
  hero-gap: 56px
  section: 72px
  shell: 760px
components:
  link:
    textColor: "{colors.ink}"
    underline: "1px {colors.rule-strong}"
    hoverColor: "{colors.accent}"
  section-label:
    typography: "{typography.label}"
    textColor: "{colors.muted}"
    marginBottom: 6px
  row:
    layout: "grid: minmax(0,1fr) auto; column-gap {spacing.lg}; baseline aligned"
    padding: "{spacing.row} 0"
    borderBottom: "1px {colors.rule}"
  row-meta:
    typography: "{typography.date}"
    textColor: "{colors.muted}"
    align: right
  photo:
    size: 232px
    rounded: "{rounded.photo}"
    border: "1px {colors.rule}"
    backgroundColor: "{colors.surface}"
---

## Overview

The page reads like a well-set article, not a product. Warm paper {colors.canvas}, near-black
ink, a single column {spacing.shell} wide. There is no hero banner, no button, no card, no
shadow, no gradient, no icon set. Hierarchy comes from three things only: type size, whitespace,
and 1px hairlines.

The composition is borrowed on purpose from three pages that solved the same problems well:
the **header** follows Danqi Chen's page (top nav, large serif name with the CJK name beside it,
affiliation as stacked lines, mono email, rounded photo on the right); the **section rhythm**
follows paco.me (a small quiet label *above* the content, one column, generous vertical gaps);
the **lists** follow leerob.com (content left, date right, hairline between rows).

**Key characteristics**
- One column. Section labels sit above their content. Never a left rail, never a vertical rule.
- Serif for anything read as a sentence; sans for anything read as metadata; mono only for dates and the email.
- {colors.accent} is invisible at rest. It appears on hover and focus, nowhere else.
- A row is: content left, date right, hairline below. Publications and projects use it.
- Education & experience is a timeline: one dot per entry joined by a 1px line, newest first. A filled dot means ongoing. Text sits 36px clear of the line — content must never touch it.
- Nothing on the page may go stale silently: no news feed, no "currently", every date range closed where possible.

## Colors

### Text
- **Ink** ({colors.ink}): the name, row titles, the owner's own name in author lists, affiliation lines.
- **Body** ({colors.body}): all prose and glosses.
- **Muted** ({colors.muted}): section labels, status lines, dates, footer. 5.6:1 on canvas — do not lighten it; it is the most-read metadata on the page.

### Surface and lines
- **Canvas** ({colors.canvas}): warm near-white. Never pure #fff.
- **Surface** ({colors.surface}): photo placeholder and code/BibTeX blocks only.
- **Rule** ({colors.rule}): row hairlines and the footer line. Decorative — spacing carries the structure, so the list survives a dim screen or a printout.
- **Rule-strong** ({colors.rule-strong}): link underlines and separators between inline links.

### Accent
- **Oxide red** ({colors.accent}): link hover, the hover underline, the focus ring. Nothing else. No coloured headings, badges, or status pills.

### Dark mode
Follows `prefers-color-scheme` only — no toggle, no script, no stored preference. Every token
has a `dark-` twin; the canvas is a warm near-black ({colors.dark-canvas}), never #000. The photo
keeps its 1px border in both themes so a bright portrait does not glow on the dark canvas.

## Typography

Source Serif 4 (variable, optical size on) carries the name, prose, row titles and the italic
one-sentence gloss. Public Sans carries metadata: nav, link row, affiliation, authors, status,
labels, footer. IBM Plex Mono carries dates and the email, with tabular figures so years align.
Noto Serif KR is used for exactly three glyphs — 김지민 — set as live text beside the name.
All four families are self-hosted as woff2 subsets in `assets/fonts/` (SIL OFL); the page makes no third-party requests.

### Principles
- The name is large and *medium* weight (500), not bold. Size sets hierarchy, not heaviness.
- Exactly one bold string per author list: the owner's name.
- Section labels are small uppercase sans with wide tracking — quiet on purpose, so titles lead.
- Prose measure stays under ~80 characters ({spacing.shell} at 18px).
- `text-wrap: balance` on row titles so a long paper title never orphans one word.

## Layout

Single centred column, {spacing.shell} max with 24px side padding. Section gap {spacing.section}
(56px on mobile). The hero is a two-column grid — text, then a 232px photo — with a
{spacing.hero-gap} gap; under 760px it stacks with a 120px photo on top. Rows are a two-column
grid; under 760px the date moves above the title. One breakpoint only.

## Elevation

None. No shadows anywhere. Depth is whitespace plus hairlines.

## Components

- **Nav**: name left (serif 21px, links home), three text links right — Publications · Projects · Education (sans, muted → ink on hover). No hamburger; links wrap on small screens.
- **Link row**: `Email · GitHub · LinkedIn` (CV joins once a public-safe PDF exists), text only. A link that does not exist yet is omitted, never greyed out.
- **Publication row**: title / authors / status line / one italic sentence; year at right. The title becomes a link only when the paper has its own page. Status line is either `Under review` (no venue, ever, while under review) or the venue name.
- **Project row**: title / partner line / 2–3 sentence description / text links; date range at right.
- **Timeline entry** (`.tl`, add `.now` while ongoing): one line plus an optional muted sub-line; date range at right in mono. 11px dot, {colors.rule-strong} outline on canvas, filled {colors.ink} when ongoing.
- **Research-interest slot**: reserved between the hero and Publications (commented out in `index.html`) — serif prose, no label.
- **Paper page** (`/<slug>/`, later): back link, title, authors, links, main figure with caption, then Problem / Method / Results / Limitations / BibTeX. Results may use a mono block with a 2px accent left rule — the only place the accent is static.

## Do's and Don'ts

- Do keep every section in the single column with its label above.
- Do add papers by copying a whole `<article class="row">`, newest first.
- Don't add cards, shadows, gradients, icons, badges, pills, thumbnails or a sidebar.
- Don't use the accent for anything at rest.
- Don't add a News section or anything that needs regular posting to look alive.
- Don't name the venue of a paper that is under review, anywhere in the repo's published files.
