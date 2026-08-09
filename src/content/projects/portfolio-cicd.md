---
title: "This site's own CI/CD — a portfolio that deploys itself"
group: "ci-cd"
description: "My first real pipeline, live in production: every push to main triggers a GitHub Actions workflow that builds this Astro site and publishes it to GitHub Pages. The portfolio is its own working GitOps demo — anyone can inspect the workflow and watch it run."
tags: ["GitHub Actions", "CI/CD", "GitOps", "Astro"]
github: "https://github.com/arbaz-a11y/portfolio"
myWork: "Wrote the deploy workflow end-to-end: build → upload artifact → deploy. Wired Pages permissions and Actions, and handled the base path so assets resolve correctly under /portfolio/."
metrics: "Deploys this site on every push — 3+ successful runs so far"
status: "deployed"
featured: false
date: 2026-08-08
roadmap: "Extend from build → deploy to build → test → deploy on a real app with Terraform; add preview deployments and artifact caching."
---

This is the pipeline running behind the page you're reading right now. Simple on purpose — it's the foundation, and it taught me the GitHub Actions + GitHub Pages contract before I scale up to bigger pipelines.
