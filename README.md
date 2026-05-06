# Richard Wright, Criminologist

A static, single-page archival site summarizing the career and major professional milestones of Richard Wright, Regents' Professor of Criminal Justice and Criminology at Georgia State University.

## Deploy on GitHub Pages

1. Create a new repository (e.g. `richard-wright`) and upload the contents of this folder to its root.
2. In the repository settings, open **Pages**.
3. Under **Source**, select the `main` branch and the `/ (root)` folder, then save.
4. GitHub will publish the site at `https://<username>.github.io/richard-wright/`.

No build step is required. The site is plain HTML, CSS, and vanilla JavaScript.

## File overview

| File         | Purpose                                                                   |
| ------------ | ------------------------------------------------------------------------- |
| `index.html` | Page structure and section markup.                                        |
| `styles.css` | Monochrome grayscale design system, light + dark themes, layout, motion.  |
| `data.js`    | **All editable content** — timeline, modules, public scholarship, photos. |
| `app.js`     | Theme toggle, rendering, filtering, lightbox, keyboard navigation.        |

## Editing content

Open `data.js`. Every section reads from a single, well-commented data object:

- `timeline` — chronological milestones. Each entry has `year`, `sort` (numeric, used for ordering), `category` (one of `position`, `publication`, `award`, `grant`, `editorial`, `administrative`, `public`), `title`, and `detail`.
- `modules` — achievement summaries by category.
- `publicScholarship` — list of selected public-facing items.
- `photos` — gallery items. To add a real image, drop the file into the folder (e.g. `images/portrait.jpg`) and set `src` to its path. When `src` is empty, a neutral placeholder card is shown.

No HTML edits are needed for routine updates.

## Design notes

- Strictly grayscale. Light and dark themes both use neutrals only.
- Manual theme toggle in the header; preference is persisted in `localStorage`.
- Accessible: semantic landmarks, keyboard-navigable timeline and lightbox, focus-visible outlines, `prefers-reduced-motion` respected.
- Responsive: single-column layout on small screens.

## Sources

Content is drawn from Richard Wright's public Georgia State University faculty profile and his publicly posted curriculum vitae (UMSL). Where a fact or date was uncertain, it was omitted rather than guessed.
