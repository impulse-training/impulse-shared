import { z } from "zod";
import { categorySchema } from "../behavior";
import { logBaseSchema } from "./base";

export const behaviorTrackingDataSchema = z.object({
  behaviorId: z.string(),
  behaviorName: z.string(),
  behaviorTrackingUnit: z.string().optional(),
  trackingType: z.enum(["counter", "timer"]),
  category: categorySchema,
  value: z.number(), // Count or time in seconds
  formattedValue: z.string(),
});
export type BehaviorTrackingData = z.infer<typeof behaviorTrackingDataSchema>;

export const behaviorLogSchema = logBaseSchema.extend({
  type: z.literal("behavior"),
  // Behavior tracked logs are always displayed in the UI
  isDisplayable: z.literal(true),
  data: behaviorTrackingDataSchema,
});

export type BehaviorLog = z.infer<typeof behaviorLogSchema>;
