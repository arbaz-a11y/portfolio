---
title: "MessMate — Hostel Mess Management"
group: "exploratory"
description: "Django web app that reduces hostel food waste by letting students mark single-meal absences and multi-day leave — so staff cook for the actual number of students present. USN-based login, DB-level duplicate protection, and a staff notifications inbox with seen-flags."
tags: ["Django", "Python", "SQLite", "Auth"]
github: "https://github.com/arbaz-a11y/MessMate-Hostel-Management-System"
demo: "https://messmate-hostel-management-system.onrender.com"
myWork: "Designed the full data model and USN-based auth, built the student request + staff dashboard flows, and enforced duplicate-meal validation at both the form and database layers."
status: "deployed"
featured: false
date: 2026-07-28
roadmap: "Containerize with Docker + docker-compose, wire a CI/CD pipeline (GitHub Actions → Render), add meal-wastage analytics and email/SMS reminders, and migrate to PostgreSQL for scale."
---

Built as a real, working product with a production-ready config (gunicorn + whitenoise) and tests — found a real problem in my hostel and shipped a complete solution, end to end.
