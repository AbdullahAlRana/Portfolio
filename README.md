# Md Abdullah — Portfolio

A single-page React portfolio built from static resume data. Neutral
palette with one accent colour, light and dark themes, sections that
load as you scroll.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # serve the production build
npm run lint
```

---

## What to edit

Everything rendered comes from [`src/data/resume.js`](src/data/resume.js).
Nothing else needs touching for a content change.

### The one thing still missing: numbers

Every `impact: []` array in that file is **empty on purpose**. As it
stands the page describes responsibilities, not outcomes — which is the
single weakest thing about it to a recruiter. Fill them in and they
render automatically: as pill badges under a role, and as a short list
inside a project card.

```js
// experience[0]
impact: [
  '40% faster batch runs',
  '12 services in production',
],

// projects[1]
impact: [
  'Migrated 2.4M assets across 180 tenants',
  'Cut per-tenant migration from 3 days to 4 hours',
],
```

Good candidates: request throughput, p95 latency, rows/assets processed,
tenants or users served, build or deploy time, test coverage, team size,
cost saved. One per role and one per project is enough.

### Other fields worth a second look

| Field | Why |
| --- | --- |
| `profile.availability` | Currently "Open to remote and contract work" — change it if that's not true. |
| `profile.highlights` | The three hero stats. Keep them defensible. |
| `profile.siteUrl` + `index.html` | Placeholder domain `mdabdullah.dev` appears in the canonical URL, `og:` tags and JSON-LD. Update on deploy. |
| `profile.resumeUrl` | Google Drive direct-download endpoint. `resumeViewUrl` is the shareable preview link if you'd rather open the viewer. |
| `lastUpdated` | Shown in the footer so the page doesn't read as stale. |

Durations ("2 yrs 4 mos") and date ranges are computed from `start` /
`end` in [`src/lib/dates.js`](src/lib/dates.js), so they stay current on
their own — an open-ended role counts to today.

---

## How the page is put together

```
src/
  data/resume.js          all content
  lib/dates.js            date range + duration formatting
  sections/registry.js    the scroll sections + their lazy imports
  sections/*.jsx          one file (and one JS chunk) per section
  components/             navbar, hero, footer, shared bits
  hooks/useTheme.js       light/dark preference + localStorage
  styles/global.css       design tokens and all styling
public/fonts/             Inter (latin subset), self-hosted — SIL OFL
```

### Scroll-triggered loading

Only the navbar, hero and footer ship in the initial bundle. Each
section below the fold is a `React.lazy` import rendered through
[`components/LazySection.jsx`](src/components/LazySection.jsx):

- a single rAF-throttled scroll observer in `App.jsx` decides which
  sections have come within 400px of the viewport and mounts them in
  order;
- until then the placeholder reserves roughly the section's real height
  (`minHeight` in `sections/registry.js`), so the scrollbar and anchor
  offsets stay stable;
- a shimmering skeleton stands in while the chunk is in flight.

The mounting decision deliberately does **not** use an
`IntersectionObserver` on each section. A fast flick or an End keypress
can carry a section across the viewport between two observer callbacks,
and because the intersection ratio reads 0 both before and after, no
callback is delivered at all — the section stays a skeleton forever. The
scroll observer measures positions directly and treats "we are at the
bottom" as "everything above has been passed", which has no such gap.

### Navigation

Clicking a navbar link mounts the target **and everything above it**
before scrolling, so the landing position is accurate even when those
sections were still placeholders. A scroll listener highlights whichever
section sits under the navbar, and `/#projects`-style deep links work on
first paint.

---

## Known trade-off: SEO

The page is client-rendered, so the served HTML contains the shell and
nothing else — and because sections mount on scroll, a crawler that
doesn't scroll never sees them either. `og:`/`twitter:` tags and a
`Person` JSON-LD block are in `index.html`, so link previews and
knowledge-panel data are fine, but the body text is not indexable.

Fixing that properly means static rendering, which conflicts with
loading content on scroll — the two goals pull in opposite directions.
If indexability matters more than the scroll behaviour, the clean answer
is to port this to Astro or Next.js and let it prerender; bolting a
prerender step onto this Vite SPA gets you hydration mismatches or a
double render. The content here is ~12 kB, so the lazy chunks
(≈3 kB gzipped in total, against a 238 kB React bundle) were never the
real performance story anyway.

### Before deploying

- Replace `mdabdullah.dev` in `index.html` and `profile.siteUrl`.
- Add `public/og.png` (1200×630) — it's referenced but not committed, so
  link previews currently show no image.
