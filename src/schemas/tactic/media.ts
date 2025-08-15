import { z } from "zod";

export const mediaItemSchema = z.object({
  type: z.enum(["image", "audio", "video", "link"]),
  url: z.string().url(),
  caption: z.string().optional(),
  thumbnailUrl: z.string().url().optional(),
});

export type MediaItem = z.infer<typeof mediaItemSchema>;
