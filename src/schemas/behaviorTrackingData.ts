import { z } from "zod";

export const behaviorTrackingDataSchema = z.object({
  behaviorId: z.string(),
  behaviorName: z.string(),
  behaviorTrackingUnit: z.string().optional(),
  trackingType: z.enum(["counter", "timer"]),
  value: z.number(), // Count or time in seconds
  formattedValue: z.string(),
});

export type BehaviorTrackingData = z.infer<typeof behaviorTrackingDataSchema>;
