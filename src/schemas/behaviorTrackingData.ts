import { z } from "zod";

export const behaviorTrackingDataSchema = z.object({
  behaviorId: z.string().optional(),
  behaviorName: z.string().optional(),
  behaviorTrackingUnit: z.string().optional(),
  trackingType: z.enum(["counter", "timer"]).optional(),
  value: z.number().optional(), // Count or time in seconds
  formattedValue: z.string().optional(),
});

export type BehaviorTrackingData = z.infer<typeof behaviorTrackingDataSchema>;
