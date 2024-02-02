import { defineCollection, z } from "astro:content";

const blogs = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubdate: z.coerce.date(),
    tags: z.array(z.string()),
    author: z.string(),
    uuid: z.string(),
    heroImg: z.string().optional(),
    authorHeadLine: z.string().optional(),
    authorImgLink: z.string().optional(),
  }),
});

export const collections = { blogs };
