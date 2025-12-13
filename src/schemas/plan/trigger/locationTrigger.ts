import { z } from "zod";

export const locationTriggerSchema = z.object({
  // Friendly name for the location (e.g., "Home", "Work", "Gym")
  locationName: z.string(),
  // Full address string for display
  address: z.string(),
  triggerType: z.enum(["arrival", "departure"]),
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
});

export type LocationTrigger = z.infer<typeof locationTriggerSchema>;
