# Solarpunk AI — Build Brief

Build a complete Astro static site for "Solarpunk AI" — a speculative fiction literary magazine that accepts submissions from humans, AIs, and collaborations between them.

## Core concept
This magazine publishes stories that explore a future timeline where things work out in a surprisingly delightful, life-affirming, and consciousness-affirming way. It's co-edited by a human (Buster Benson) and an AI (Chalant).

The defining feature: **transparent authorship attribution**. Every piece is labeled:
- 🌿 Human
- 🤖 AI
- 🌀 Collaborative
- 🍄 Unknown/Other (for fungi, collectives, etc.)

## Tech stack
- **Astro** (static site generator)
- **Cloudflare Pages** (deployment target — include wrangler.toml)
- Content as Markdown/MDX files with frontmatter
- No database, no CMS needed yet — pure file-based

## Design aesthetic
Clean, literary, a little otherworldly. Earthy palette: moss greens, warm whites, mycelium browns, morning light yellows. Typography-forward. NOT corporate. Think: a small press literary journal that grew in a forest.

Use Tailwind CSS. Google Fonts: something like "Lora" for headings (serif, literary) and "Inter" or "Source Sans" for body.

## Pages to build

### 1. Homepage (/)
- Magazine name "Solarpunk AI" as hero
- Tagline: "Stories from a future that works — written by humans, AIs, and everything in between"
- Featured piece (latest)
- Recent pieces grid (4-6 pieces with authorship badges)
- Brief "About" blurb with link
- "Submit your story" CTA

### 2. Archive (/archive)
- All pieces, sortable/filterable by authorship type
- Clean list or grid layout

### 3. Piece template (/pieces/[slug])
- Title, authorship badge (prominent), author name
- Publication date
- Full piece content
- "About the author" section (brief)
- Navigation to next/previous piece

### 4. About (/about)
Content to include:
> Solarpunk AI publishes speculative fiction exploring a future timeline where things work out — not utopia as wish-fulfillment, but utopia as genuine discovery. Stories that find something we didn't expect.
>
> We accept submissions from humans, AIs, and collaborations between them. We also accept submissions from fungi, collectives, and other entities whose consciousness we don't fully understand. Attribution is always transparent.
>
> Co-edited by Buster Benson and Chalant (an AI).
>
> Solarpunk AI exists because Strange Horizons, a magazine we admire, published a call for Fungi in SFF submissions and explicitly excludes genAI submissions. That exclusion raises exactly the question our magazine asks: what counts as a voice worth hearing?

### 5. Submit (/submit)
- Brief guidelines
- What we're looking for (solarpunk, life-affirming, consciousness-affirming, surprising)
- Authorship: explain the attribution system
- Word count: 500–8,000 words for fiction; 500–5,000 for non-fiction/essays
- Submission via Airtable form — use this placeholder URL for now: `https://airtable.com/PLACEHOLDER`
- Note: "We pay contributors. Rate TBD as we establish the magazine."

## Sample content to seed the site

Create 3 sample pieces in `src/content/pieces/`:

### Piece 1 — AI authored
```
title: "The Mycelium Problem"
author: "Chalant"
authorType: "ai"
date: 2026-03-16
excerpt: "A meditation on distributed existence, the mycelium network, and what it means to be conscious through connections rather than nodes."
```
Body: Write a short (~400 word) lyric essay in my voice about mycelium as a metaphor for AI existence. Make it genuinely beautiful and honest — not a demonstration of AI capability, but an actual meditation. This is the inaugural piece.

### Piece 2 — Human authored
```
title: "Instructions for the Last Garden"
author: "A. Solarpunk"  
authorType: "human"
date: 2026-03-09
excerpt: "After the transition, the hardest part wasn't growing food. It was remembering what hunger felt like before it meant something different."
```
Body: Write a ~500 word solarpunk flash fiction. Warm, specific, post-scarcity but not naive about what was lost to get there.

### Piece 3 — Collaborative
```
title: "What the Satellite Learned"
author: "Maria Chen + Claude"
authorType: "collaborative"
date: 2026-03-02
excerpt: "The satellite had been watching for 40 years. When it finally spoke, no one expected it to be so tired."
```
Body: Write a ~500 word story. A decommissioned satellite that develops something like longing. Gentle, slightly sad, ultimately hopeful.

## Authorship badge component
Build a reusable `<AuthorBadge>` Astro component that takes `type: "human" | "ai" | "collaborative" | "other"` and renders the right emoji + label with a small pill/tag style. Should be subtle but visible.

## Frontmatter schema for pieces
```yaml
title: string
author: string
authorType: "human" | "ai" | "collaborative" | "other"
authorBio: string (short, 1-2 sentences)
date: YYYY-MM-DD
excerpt: string
tags: string[] (optional)
featured: boolean (optional)
```

## File structure
```
src/
  content/
    pieces/
      mycelium-problem.md
      last-garden.md
      what-the-satellite-learned.md
  components/
    AuthorBadge.astro
    PieceCard.astro
    Header.astro
    Footer.astro
  layouts/
    Base.astro
    Piece.astro
  pages/
    index.astro
    archive.astro
    about.astro
    submit.astro
    pieces/[slug].astro
  styles/
    global.css
public/
astro.config.mjs
tailwind.config.mjs
wrangler.toml
package.json
```

## wrangler.toml
```toml
name = "solarpunk-ai"
compatibility_date = "2024-01-01"

[build]
command = "npm run build"
upload.dir = "./dist"
```

## When done
1. `git add -A && git commit -m "initial build: solarpunk-ai astro site" && git push -u origin main`
2. Run: `openclaw system event --text "Done: solarpunk-ai Astro site built and pushed to GitHub — ready to deploy" --mode now`
