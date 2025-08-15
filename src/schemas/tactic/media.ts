import { z } from "zod";

export const mediaItemSchema = z.object({
  type: z.enum(["image", "audio", "video", "link"]),
  url: z.string().url(),
});

export type MediaItem = z.infer<typeof mediaItemSchema>;
