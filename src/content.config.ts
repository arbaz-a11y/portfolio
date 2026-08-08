import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    // Theme group — must match a key in src/config.ts projectGroups
    group: z.enum(['cloud', 'ci-cd', 'exploratory']),
    description: z.string(),
    tags: z.array(z.string()),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    // What *you* personally did on this project
    myWork: z.string(),
    metrics: z.string().optional(),
    status: z.enum(['deployed', 'in-progress']).default('in-progress'),
    featured: z.boolean().default(false),
    date: z.coerce.date(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
