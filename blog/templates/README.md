# Blog Templates

Two page templates for adding new posts. **Paths inside the templates are
written for the final copy destination, not for this folder** — a template
opened directly in `blog/templates/` will render unstyled. Copy first, then
fill in.

## 🎬 movie-review.html

Copy to: `blog/posts/movie-reviews/<movie-name>.html` (3 levels deep, so
`../../../` reaches the site root)

After copying, replace:

1. `<title>` — movie title
2. Poster `<img src="../../../assets/posters/<movie-name>.jpg">` (drop the
   poster into `assets/posters/`; keep the `onerror` fallback)
3. Movie meta block — titles (EN/中文), director, year, genre, runtime,
   watched date, language
4. The six content sections (Introduction / Review / Details / Flaws /
   Overall / Rating), including the pro/con lists and rating bars
5. Add a card for the movie to the grid in `blog/index.html`
   (beyond 3 cards, move extras into `#movieReviewsMore`)

## 📝 study-note.html

Copy to: `blog/posts/study-notes/<sub-category>/<topic>.html` (4 levels deep,
so `../../../../` reaches the site root)

Sub-category slugs: `llm` | `rl` | `agents` | `cv` | `ml-basics`

After copying, replace:

1. `<title>` — topic title
2. Category tag and header block — title (EN/中文), date, reading time
3. The six content sections (TL;DR / Background / Key Concepts / Main
   Content / References / Key Takeaways)
4. Add a card to the matching `<div class="blog-grid" data-cat="<slug>">`
   in `blog/posts/study-notes/index.html` and bump the tab counts
   ("All" + the sub-category)
5. If the sub-category directory is new, create it, add a grid block and
   tab button on the hub page, and add a subcat card on `blog/index.html`

## Notes

- Both templates carry `<meta name="robots" content="noindex, nofollow">`
  so they stay out of search results — remove that line only if a template
  is ever used as a real page.
- Shared scripts (theme toggle, scroll progress) load from `site.js`;
  page-specific JS (rating bar animation) stays inline.
