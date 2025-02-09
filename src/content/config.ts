import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    draft: z.boolean().optional(),
    liveURL: z.string().optional(),
    repoURL: z.string().optional(),
    startedOn: z.coerce.date(),
    tags: z.array(z.string()),
  }),
});

export const collections = { projects };
