/**
 * Content Collections Configuration
 *
 * This file defines the schema for your markdown content (blog posts, projects).
 * Astro will type-check your content against these schemas.
 *
 * Learn more: https://docs.astro.build/en/guides/content-collections/
 */
import { defineCollection, z } from 'astro:content';

// Blog posts collection
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

// Projects collection
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    github: z.string().optional(),
    live: z.string().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = {
  blog,
  projects,
};
