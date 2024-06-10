import { defineCollection, z } from "astro:content";

const blogs = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubdate: z.string(),
    tags: z.array(z.string()),
    author: z.string(),
    uuid: z.string(),
    heroImg: z.string().optional(),
    authorHeadLine: z.string().optional(),
    authorImgLink: z.string().optional(),
  }),
});

const authors = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    headlines: z.string(),
    about: z.string(),
    profileImgLink: z.string(),
    links: z.object({
      twitter: z.string(),
      linkedIn: z.string(),
      github: z.string(),
    }),
    articleCount: z.number(),
    articles: z.array(z.string()),
    skills: z.array(z.string()),
    college: z.string(),
  }),
});

export const collections = { blogs, authors };
