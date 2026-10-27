# Yinian Handbook

**Yinian (一念) — One thought, one finished short.**

Product handbook & landing site for [Yinian](https://yinian.avalidigital.ca), an AI agent that turns a one-line idea into a finished anime short through plain conversation. Built with [VitePress](https://vitepress.dev) (static, English-first, bilingual-ready), deployed as the public promotion & SEO anchor — the app itself is login-gated, so this site is what gets crawled, linked and shared.

## Structure

```
docs/
  index.md                # Landing page (renders <HomeLanding />)
  guide/quick-start.md    # From zero to first generated shots
  guide/pipeline.md       # The six production stages
  self-host.md            # Docker self-hosting guide
  faq.md
  public/                 # logo.svg (same mark as the app favicon), og.png, robots.txt
  .vitepress/config.ts    # nav / sidebar / sitemap / OG tags
  .vitepress/theme/       # brand tokens (custom.css) + landing components
    components/HomeLanding.vue      # landing sections
    components/ChatFilm.vue         # hero conversation: idea in, finished short out
```

## Local development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # → docs/.vitepress/dist
npm run preview   # serve the production build locally
```

## Deploy

### Option A — GitHub Pages (recommended for NA audience)

Push this repo to GitHub (public), add `.github/workflows/deploy.yml`:

```yaml
name: Deploy docs to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: true
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0        # lastUpdated timestamps need full history
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Then in repo **Settings → Pages** set Source to *GitHub Actions*. Add a custom domain there if you have one (DNS CNAME to `<user>.github.io`, HTTPS enforced by GitHub).

> No custom domain? The site will live at `https://<user>.github.io/yinian-handbook/` — set `base: '/yinian-handbook/'` in `docs/.vitepress/config.ts` so assets resolve.

### Option B — Cloudflare Pages

Connect the repo in the Cloudflare dashboard: build command `npm run build`, output directory `docs/.vitepress/dist`, environment `NODE_VERSION=22`. Custom domains are free.

## Pre-launch checklist

- [ ] Replace `SITE_URL` in `docs/.vitepress/config.ts` and the sitemap line in `docs/public/robots.txt` with the final domain
- [ ] Capture product screenshots **with the UI language set to English** and put them where the `<!-- screenshot: … -->` markers are (`grep -rn "screenshot:" docs/`)
- [x] Social card image (`docs/public/og.png`, 1200×630, rendered from the landing hero; referenced as `og:image` / `twitter:image`)
- [ ] Decide the self-hosting distribution story (wording in `docs/self-host.md` currently says "by request")
- [ ] Optional: add the GitHub repo link to `socialLinks` in `config.ts` once the repo is public

## Design notes

- Palette, square corners and hard offset shadows mirror the product’s design tokens; light mode is paper, dark mode is ink.
- Type is Barlow / Barlow Condensed, self-hosted via `@fontsource` (no third-party font requests).
- The pitch is the agent: one idea in, a finished short out, driven by chat. The hero conversation (`ChatFilm.vue`) plays through once as the page’s only animated moment and respects `prefers-reduced-motion`.
- Claims stay honest about how the agent works today: it pauses for approval at key stages and quotes costs before paid steps, unless the user sets a budget.

## Conventions

- English is the site's primary language (North-America-first). A `/zh/` locale can be added later via VitePress `locales` config without restructuring.
- Content stays factual to what the product does today — no roadmap promises.
- Never put server paths, internal hostnames, keys or account names into this repo; it is public-facing.
