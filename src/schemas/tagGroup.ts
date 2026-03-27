import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

export const LOCATION_TAG_GROUP_ID = "location";

export const tagGroupOptionSchema = z.object({
  id: z.string(),
  label: z.string(),
  // Optional location coordinates (used by location tag group options)
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  address: z.string().optional(),
});

export const tagGroupSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  options: z.array(tagGroupOptionSchema),
  isPrimary: z.boolean().optional().default(false),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
});

export type TagGroupOption = z.infer<typeof tagGroupOptionSchema>;
export type TagGroup = z.infer<typeof tagGroupSchema>;

export function tagOptionHasCoordinates(option: TagGroupOption): boolean {
  return option.latitude != null && option.longitude != null;
}
