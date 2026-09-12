import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articles = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    image: z.object({
      src: z.string().min(1),
      alt: z.string(),
    }).optional(),
  }),
});

export const collections = { articles };
