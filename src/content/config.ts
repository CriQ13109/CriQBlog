import { z, defineCollection } from "astro:content";

const blogSchema = ({ image }: { image: any }) =>
  z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    // 💡 문자열(public 경로)과 image()(assets 상대 경로) 둘 다 허용
    heroImage: z.union([image(), z.string()]).optional(),
    badge: z.string().optional(),
    category: z.union([z.string(), z.array(z.string())]).optional(),
    tags: z
      .array(z.string())
      .refine((items) => new Set(items).size === items.length, {
        message: "tags must be unique",
      })
      .optional(),
    author: z.string().default("CriQ"),
  });

const storeSchema = z.object({
  title: z.string(),
  description: z.string(),
  custom_link_label: z.string(),
  custom_link: z.string().optional(),
  updatedDate: z.coerce.date(),
  pricing: z.string().optional(),
  oldPricing: z.string().optional(),
  badge: z.string().optional(),
  checkoutUrl: z.string().optional(),
  heroImage: z.string().optional(),
  category: z.string().optional(),
});

export type BlogSchema = z.infer<ReturnType<typeof blogSchema>>;
export type StoreSchema = z.infer<typeof storeSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const storeCollection = defineCollection({ schema: storeSchema });

export const collections = {
  blog: blogCollection,
  store: storeCollection,
};