# Cloud Terminal Portfolio

A fast, dark, terminal-themed personal portfolio for a second-year Cloud & DevOps engineer.
Built with [Astro](https://astro.build), deployed via **GitHub Pages** + **GitHub Actions** (the site deploys itself on every push — a working GitOps example for your resume).

## ✏️ Make it yours (the only 3 things you edit day-to-day)

| I want to… | Edit this |
|---|---|
| Change my **name / tagline / links / email** | `src/config.ts` |
| **Add a blog post** | Drop a `.md` file into `src/content/blog/` |
| **Add / edit a project** | Drop a `.md` file into `src/content/projects/` |
| Update my **resume** | Replace `public/resume.pdf` |
| Change **colors / theme** | `src/styles/global.css` (tokens at the top) |

Each blog post is one markdown file (copy an existing one). Each project is one markdown
file with `title`, `group` (`cloud` / `ci-cd` / `exploratory`), `description`, `tags`,
`github`, `myWork`, and `status` in the frontmatter. That's it — no code to touch.

## 🚀 Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output to dist/
npm run preview    # serve the production build
```

## ☁️ Deploy to GitHub Pages

1. Create a repo on GitHub (e.g. `portfolio`). Keep it **private** if you want the source
   private — the live site is still public.
2. In the repo **Settings → Pages → Build and deployment → Source**, select **"GitHub Actions"**.
3. Push this folder's contents:

   ```bash
   git add -A
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```

4. The **Deploy to GitHub Pages** workflow runs and your site goes live at
   `https://<you>.github.io/<repo>/`. Every future push redeploys automatically in ~1 minute.

The workflow computes the correct base path from your repo name — you don't set it manually.

## 🗂 Project structure

```
portfolio/
├── astro.config.mjs          # site/base (env-driven for GitHub Pages)
├── .github/workflows/deploy.yml
├── public/                   # favicon.svg, resume.pdf (static files)
└── src/
    ├── config.ts             # ★ the single config file for your info
    ├── content.config.ts     # content-collection schemas
    ├── content/
    │   ├── blog/*.md         # ★ one file per post
    │   └── projects/*.md     # ★ one file per project
    ├── layouts/BaseLayout.astro
    ├── components/           # Nav, Hero, TerminalWindow, Projects, Certs, Blog, Contact…
    ├── pages/                # index.astro, blog/index.astro, blog/[slug].astro
    └── styles/global.css     # ★ design tokens + theme
```
