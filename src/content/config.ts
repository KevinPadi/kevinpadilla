import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    description: z.array(z.string()),
    technologies: z.array(z.string()),
    repo: z.string(),
    demo: z.string(),
    img: z.array(z.string()),
  }),
});

export const collections = { projects };
