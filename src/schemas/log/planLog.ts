import { z } from "zod";
import { timestampSchema } from "../../utils/timestampSchema";
import { planWithIdSchema } from "../plan";
import { logBaseSchema } from "./base";

// Plan Log Schema
export const planLogSchema = logBaseSchema.extend({
  type: z.literal("plan"),
  // Plan logs are always displayed in the UI
  isDisplayable: z.literal(true),
  data: z.object({
    planId: z.string(),
    plan: planWithIdSchema,
    introduction: z.string().optional(),
    acceptedAt: timestampSchema.optional(),
    tacticsByPath: z.record(z.string(), z.any()).optional(),
  }),
});

export type PlanLog = z.infer<typeof planLogSchema>;
