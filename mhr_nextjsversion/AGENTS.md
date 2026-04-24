<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

<!-- BEGIN:performance-mandate -->
# ⚠ PERFORMANCE IS NON-NEGOTIABLE

Every decision — architecture, data fetching, rendering strategy, images, fonts, queries — must be made with performance as a first-class constraint, not an afterthought.

**Before writing any code, ask: is this the most performant way to do it?**

- **Rendering:** Prefer Server Components. Every unnecessary `'use client'` is a bundle size cost.
- **Data fetching:** Fetch on the server where possible. Avoid waterfalls — fetch in parallel with `Promise.all`.
- **Images:** Always use `next/image`. Never use raw `<img>`. Set correct `width`, `height`, and `priority` on above-the-fold images.
- **Fonts:** Always use `next/font`. Never load fonts via `<link>` or `@import` in CSS.
- **Database queries:** Select only the columns you need — never `SELECT *`. Add indexes for every filtered/sorted column.
- **Bundles:** Never import an entire library when you only need one function. Use tree-shakeable imports.
- **Caching:** Use Next.js `fetch` caching, `unstable_cache`, or TanStack Query cache — never re-fetch data that hasn't changed.
- **Code splitting:** Lazy-load heavy components with `dynamic(() => import(...), { ssr: false })` when they are not needed on first paint.

Shipping slow code is not acceptable. If there is a faster approach, use it.
<!-- END:performance-mandate -->

---

<!-- BEGIN:migration-context -->
# Migration Context — Read Before Writing Any Code

This Next.js project (`mhr_nextjsversion/`) is a **full-stack migration** of the existing static site located at `../` (the parent `site.me/` directory), which is built with plain HTML, CSS, and JavaScript.

**What this means for every task:**
- The source of truth for UI, content, copy, and structure is the original static site in `site.me/` — always reference it before building a page or component.
- When building a new page or feature, open the corresponding `.html` file in `site.me/` and replicate its content and layout faithfully in Next.js — do not invent new content.
- The goal is a like-for-like migration first; enhancements come after the page exists.
- If a page or section does not yet exist in `mhr_nextjsversion/`, check `site.me/` — it almost certainly exists there as a static HTML file.
- All rules in `docs/RULES.md` apply — the old site's patterns (inline styles, global scripts, `id`-based JS) must NOT carry over.

**Directory layout reminder:**
```
site.me/                          ← original static site (HTML/CSS/JS) — source of truth for content
└── mhr_nextjsversion/            ← this project — Next.js full-stack migration
    ├── app/
    ├── docs/RULES.md
    └── ...
```
<!-- END:migration-context -->
