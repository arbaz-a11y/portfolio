---
title: "Why My Portfolio Deploys Itself (GitOps)"
description: "Every push to this repo rebuilds the site and publishes it. Here's why that's the whole point."
pubDate: 2026-08-08
tags: ["devops", "ci-cd", "gitops"]
---

This site is a static site with zero servers — and that's a feature, not a limitation.

## How it works

I write content as plain Markdown files in the repo. When I `git push`, a GitHub Actions workflow runs `astro build`, then deploys the output to GitHub Pages. One minute later, the update is live.

No hosting dashboard. No FTP. No database.

## Why it matters for a DevOps career

This is literally GitOps — the same pattern teams use to deploy real infrastructure:

- The repo is the single source of truth
- A pipeline is the only way changes reach production
- Everything is auditable in version control

So my portfolio isn't just a resume — it's a live demonstration of the workflow I'm building my career on.
