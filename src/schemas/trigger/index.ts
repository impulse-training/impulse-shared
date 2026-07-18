import { z } from "zod";
import { timestampSchema } from "../../utils/timestampSchema";
import { withIdSchema } from "../../utils/withId";

// Optional location reference for location-based triggers. Coordinates and
// addresses live only on the user's device.
export const triggerLocationSchema = z.object({
  locationName: z.string().min(1, "Location name is required"),
  triggerType: z.enum(["arrival", "departure"]),
  localLocationRef: z.string().min(1, "Location reference is required"),
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
  // Arrival/departure for location-based auto-triggering (coordinates are resolved locally)
  triggerType: z.enum(["arrival", "departure"]).optional(),
  /** @deprecated Use triggerType + location tag group option localLocationRef instead */
  location: triggerLocationSchema.optional(),
  lastOccurredAt: timestampSchema.nullable(),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
  // Soft-delete marker. Active triggers may have an explicit null (server
  // writers) or omit the field entirely (app writers) — treat both as live.
  deletedAt: timestampSchema.nullable().optional(),
});

export type Trigger = z.infer<typeof triggerSchema>;

export const triggerWithIdSchema = withIdSchema(triggerSchema);

export type TriggerWithId = z.infer<typeof triggerWithIdSchema>;

export const isValidTrigger = (value: unknown): value is Trigger =>
  triggerSchema.safeParse(value).success;

export const triggerHasLocation = (trigger: Trigger): boolean =>
  trigger.location !== undefined;
