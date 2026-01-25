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

// Single trigger schema (not polymorphic)
export const triggerSchema = z.object({
  id: z.string().optional(),
  text: z.string().min(1, "Trigger text is required"),
  ordinal: z.number().optional(),
  location: triggerLocationSchema.optional(),
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
