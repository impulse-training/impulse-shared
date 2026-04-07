import { z } from "zod";

export const behaviorTrackingDataSchema = z.object({
  behaviorId: z.string().optional(),
  behaviorName: z.string().optional(),
  behaviorTrackingUnit: z.string().optional(),
  trackingType: z.enum(["counter", "timer"]).optional(),
  value: z.number().optional(), // Count or time in seconds
  formattedValue: z.string().optional(),
  // Period for the baseline value (e.g. "3 times per week" vs "30min per day")
  period: z.enum(["daily", "weekly"]).optional(),
});

export type BehaviorTrackingData = z.infer<typeof behaviorTrackingDataSchema>;
