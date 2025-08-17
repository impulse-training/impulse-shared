import { z } from "zod";

export const locationTriggerSchema = z.object({
  locationName: z.string(),
  triggerType: z.enum(["arrival", "departure"]),
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
});

export type LocationTrigger = z.infer<typeof locationTriggerSchema>;
