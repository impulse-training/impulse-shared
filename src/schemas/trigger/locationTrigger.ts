import { z } from "zod";
import { triggerBaseSchema } from "./base";

export const locationTriggerSchema = triggerBaseSchema("location").extend({
  locationName: z.string().min(1, "Location name is required"),
  address: z.string().min(1, "Address is required"),
  triggerType: z.enum(["arrival", "departure"]),
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
});

export type LocationTrigger = z.infer<typeof locationTriggerSchema>;
