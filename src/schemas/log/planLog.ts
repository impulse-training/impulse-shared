import { z } from "zod";
import { timestampSchema } from "../../utils";
import { planWithIdSchema } from "../plan";
import { logBaseSchema } from "./base";

// Plan Log Schema
export const planLogSchema = logBaseSchema.extend({
  type: z.literal("plan"),
  // Plan logs are always displayed in the UI
  isDisplayable: z.literal(true),
  data: z.object({
    plan: planWithIdSchema,
    introduction: z.string().optional(),
    acceptedAt: timestampSchema.optional(),
    // Loosely typed until tactic.old is migrated
    tacticsByPath: z.record(z.string(), z.any()).optional(),
    // For future use: shuffle feature
    // pastPlans: z.array(planSchema).optional(),
    // shufflePressedAt: timestampSchema.optional(),
  }),
});

export type PlanLog = z.infer<typeof planLogSchema>;
