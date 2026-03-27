import { z } from "zod";
import { timestampSchema } from "../../utils/timestampSchema";
import { withIdSchema } from "../../utils/withId";

// Optional location data for location-based triggers
export const triggerLocationSchema = z.object({
  locationName: z.string().min(1, "Location name is required"),
  address: z.string().min(1, "Address is required"),
  triggerType: z.enum(["arrival", "departure"]),
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
});

export type TriggerLocation = z.infer<typeof triggerLocationSchema>;

// Single trigger schema — defined by a combination of tag group/option pairs
export const triggerSchema = z.object({
  id: z.string().optional(),
  // Tag-based trigger definition: tagGroupId → optionId
  tags: z.record(z.string(), z.string()).default({}),
  behaviorIds: z.array(z.string()).optional(),
  // Legacy text description (being migrated to tags)
  text: z.string().optional(),
  ordinal: z.number().optional(),
  // Arrival/departure for location-based auto-triggering (coordinates come from the location tag group option)
  triggerType: z.enum(["arrival", "departure"]).optional(),
  /** @deprecated Use triggerType + location tag group option coordinates instead */
  location: triggerLocationSchema.optional(),
  lastOccurredAt: timestampSchema.nullable(),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
  deletedAt: timestampSchema.optional(),
});

export type Trigger = z.infer<typeof triggerSchema>;

export const triggerWithIdSchema = withIdSchema(triggerSchema);

export type TriggerWithId = z.infer<typeof triggerWithIdSchema>;

export const isValidTrigger = (value: unknown): value is Trigger =>
  triggerSchema.safeParse(value).success;

export const triggerHasLocation = (trigger: Trigger): boolean =>
  trigger.location !== undefined;
