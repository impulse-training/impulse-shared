import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

export const LOCATION_TAG_GROUP_ID = "location";

export const locationOptionTypeSchema = z.enum(["place", "setting"]);
export type LocationOptionType = z.infer<typeof locationOptionTypeSchema>;

export const tagGroupOptionSchema = z.object({
  id: z.string(),
  label: z.string(),
  // Opaque pointer to locally stored location data. Coordinates and addresses
  // must not be stored in Firestore tag group options.
  localLocationRef: z.string().optional(),
  // "place" = real location with coordinates (Home, Work); "setting" = situational context (Commuting, Outside)
  type: locationOptionTypeSchema.optional(),
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

export function tagOptionHasLocationRef(option: TagGroupOption): boolean {
  return Boolean(option.localLocationRef);
}

export function tagOptionIsPlace(option: TagGroupOption): boolean {
  if (option.type) return option.type === "place";
  return Boolean(option.localLocationRef);
}
