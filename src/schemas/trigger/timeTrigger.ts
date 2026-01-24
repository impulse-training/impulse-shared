import { z } from "zod";
import { triggerBaseSchema } from "./base";

export const timeTriggerSchema = triggerBaseSchema("time").extend({
  hour: z.number().min(0).max(23),
  minute: z.number().min(0).max(59),
  weekdays: z.array(z.number().min(0).max(6)).min(1),
});

export type TimeTrigger = z.infer<typeof timeTriggerSchema>;
