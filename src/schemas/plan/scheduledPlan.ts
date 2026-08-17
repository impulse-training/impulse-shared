import { z } from "zod";
import { planBaseSchema } from "./base";

export const scheduledPlanSchema = planBaseSchema("scheduled").extend({
  hour: z.number().min(0).max(23),
  minute: z.number().min(0).max(59),
  weekdays: z.array(z.number().min(0).max(6)).min(1),
  // A disabled plan keeps its schedule and tactics but stops firing: no
  // sessions are generated for it and any pending ones are removed. Absent
  // means enabled (every plan predates the field), so read through
  // `scheduledPlanIsEnabled`, never the raw field.
  enabled: z.boolean().optional(),
});

export type ScheduledPlan = z.infer<typeof scheduledPlanSchema>;

export const scheduledPlanIsEnabled = (
  plan: Pick<ScheduledPlan, "enabled">,
): boolean => plan.enabled !== false;
