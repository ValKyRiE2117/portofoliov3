import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: 'data',
      source: 'projects/*.yaml',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        category: z.string(),
        link: z.string(),
        technologies: z.array(z.string()),
        order: z.number(),
      }),
    }),
    skills: defineCollection({
      type: 'data',
      source: 'skills/*.yaml',
      schema: z.object({
        name: z.string(),
        icon: z.string().optional(),
        image: z.string().optional(),
        color: z.string().optional(),
        order: z.number().default(0),
      }),
    }),
  },
})
