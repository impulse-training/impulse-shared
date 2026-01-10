import z from "zod";
import {
  behaviorTrackingDataSchema,
  BehaviorTrackingData,
} from "../behaviorTrackingData";
import { logBaseSchema } from "./base";

export { behaviorTrackingDataSchema, BehaviorTrackingData };

export const behaviorLogSchema = logBaseSchema.extend({
  type: z.literal("behavior"),
  // Behavior tracked logs are always displayed in the UI
  isDisplayable: z.literal(true),
  isAdjustment: z.boolean().default(false),
  /** If true, Zara should respond to this behavior log */
  shouldZaraRespond: z.boolean().optional(),
  data: behaviorTrackingDataSchema,
});

export type BehaviorLog = z.infer<typeof behaviorLogSchema>;
