// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('Astroship'),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

const teamCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
  }),
});

// NEW: 100% HEADLESS CMS READY VALIDATION SCHEMA FOR YOUR GALLERY
const galleryCollection = defineCollection({
  type: "data", // Enforces strict JSON structure validation
  schema: z.object({
    id: z.string(),
    title: z.string(),
    category: z.string(),
    image: z.string().url(), // Ensures inputs from your CMS dashboard are valid secure assets URLs
    description: z.string(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key matches your collection file/directory name in "src/content"
export const collections = {
  'blog': blogCollection,
  'team': teamCollection,
  'gallery': galleryCollection, // Links your new gallery schema directly to the Astro compiler
};
