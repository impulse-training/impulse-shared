import { z } from "zod";

export const mediaItemSchema = z.object({
  type: z.enum(["image", "audio", "video", "link"]),
  url: z.string().url(),
  // Optional Firebase Storage path for first-party uploads
  storagePath: z.string().optional(),
  // Optional content type for the media
  contentType: z.string().optional(),
});

export type MediaItem = z.infer<typeof mediaItemSchema>;
