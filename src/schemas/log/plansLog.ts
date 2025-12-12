import { z } from "zod";
import { timestampSchema } from "../../utils/timestampSchema";
import { planWithIdSchema } from "../plan";
import { logBaseSchema } from "./base";

// Plans Log Schema - supports multiple plans (for behaviors or scheduled plans)
export const plansLogSchema = logBaseSchema.extend({
  type: z.literal("plans"),
  // Plans logs are always displayed in the UI
  isDisplayable: z.literal(true),
  data: z.object({
    // The behavior these plans are for (optional - not present for time-based plans)
    behaviorId: z.string().optional(),
    // Array of plans
    plans: z.array(
      z.object({
        planId: z.string(),
        plan: planWithIdSchema,
        // Pre-fetched tactics data for efficient rendering
        tacticsByPath: z.record(z.string(), z.any()).optional(),
      })
    ),
    // Index of the currently active/selected plan in the carousel
    activeIndex: z.number().default(0),
    // When a plan was accepted/started
    acceptedAt: timestampSchema.optional(),
  }),
});

export type PlansLog = z.infer<typeof plansLogSchema>;
