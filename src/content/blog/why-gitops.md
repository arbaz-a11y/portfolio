---
title: "Why My Portfolio Deploys Itself (GitOps)"
description: "Every push to this repo rebuilds and republishes the site automatically. Here's how the pipeline works, and why I think it's the most on-brand thing a cloud student can ship."
pubDate: 2026-08-09
tags: ["gitops", "github-actions", "ci/cd", "astro"]
draft: false
---

I'm a second-year student learning cloud and DevOps. My portfolio is built with Astro and hosted free on GitHub Pages — but the part I'm most proud of isn't the design. It's that **this site deploys itself**.

When I push to `main`, a GitHub Actions workflow builds the site and publishes it. No FTP, no deploy button, no hosting dashboard. The repo *is* the deployment pipeline. That's GitOps in its simplest form — and I get to say it's running in production on my own site.

## The workflow

It's deliberately simple. Three jobs-worth of steps, one small file (`.github/workflows/deploy.yml`):

```yaml
on:
  push:
    branches: [main]
  workflow_dispatch:     # manual re-run when I want it

permissions:
  contents: read
  pages: write            # needed to publish to Pages
  id-token: write         # needed for the official Pages deploy action
```

Then the two jobs:

1. **build** — checkout the repo, install with `npm ci`, run `astro build`, then hand the output to `actions/configure-pages` + `actions/upload-pages-artifact`.
2. **deploy** — takes that artifact and publishes it with `actions/deploy-pages`, so it's live at my URL.

The base path was the sneaky part: GitHub Pages hosts this repo under `/portfolio/`, so the build needs `site` and `base` set, or every CSS/image link breaks. I made the workflow compute them from the repo name:

```yaml
env:
  BASE_PATH: /${{ github.event.repository.name }}/
  SITE_URL: https://${{ github.repository_owner }}.github.io
```

Now the config works on any repo name, automatically.

## Why GitOps is worth learning young

The whole point of "declarative everything" is that **the desired state lives in version control**, and a pipeline makes reality match it. Here that means:

- **Every change is reviewable** — my own site's history is my Git history.
- **Every deploy is reproducible** — from a clean machine, `npm ci && npm run build` gives the same output, every time.
- **I can't forget the steps** — the pipeline runs them for me, identically.

I learned all this by reading the [official Pages Actions docs](https://github.com/actions/deploy-pages) and breaking things until they worked. First builds failed on the base path. Then on permissions. Each failure taught me the exact contract each action expects.

## What's next

This is pipeline number one. The honest ceiling of "build → deploy a static site" is low — the real test comes when I do **build → test → deploy a real app with Terraform-managed infrastructure**. That's the pipeline I'm working toward, and it's why this one matters: it taught me the CI/CD loop on something small and live before I scale it up.

If you're also learning cloud: make *something* deploy itself. A static site, a tiny app — anything with a pipeline you can point to. It's the fastest way I've found to make "I know CI/CD" a claim you can prove instead of a resume line.
