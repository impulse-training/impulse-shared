import { z } from "zod";
import { planBaseSchema } from "./base";

// Catch-all / contextless plans owned by a behavior.
// Stored at users/{userId}/behaviors/{behaviorId}/plans/{planId}.
export const behaviorPlanSchema = planBaseSchema("behavior").extend({
  isActive: z.boolean().optional(),
});

export type BehaviorPlan = z.infer<typeof behaviorPlanSchema>;
