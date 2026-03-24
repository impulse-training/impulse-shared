import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

export const tagGroupOptionSchema = z.object({
  id: z.string(),
  label: z.string(),
});

export const tagGroupSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  options: z.array(tagGroupOptionSchema),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
});

export type TagGroupOption = z.infer<typeof tagGroupOptionSchema>;
export type TagGroup = z.infer<typeof tagGroupSchema>;
