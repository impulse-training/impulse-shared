import { z } from "zod";
import { planBaseSchema } from "./base";

export const scheduledPlanSchema = planBaseSchema("scheduled").extend({
  hour: z.number().min(0).max(23),
  minute: z.number().min(0).max(59),
  weekdays: z.array(z.number().min(0).max(6)).min(1),
});

export type ScheduledPlan = z.infer<typeof scheduledPlanSchema>;
