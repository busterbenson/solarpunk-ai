import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pieces = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pieces' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    authorType: z.enum(['human', 'ai', 'collaborative', 'other']),
    authorBio: z.string().optional(),
    date: z.coerce.date(),
    excerpt: z.string(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
  }),
});

export const collections = { pieces };
