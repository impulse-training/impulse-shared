import { z } from "zod";
import { timestampSchema } from "../../utils/timestampSchema";
import { planWithIdSchema } from "../plan";
import { logBaseSchema } from "./base";

// Plans Log Schema - supports multiple plans for a behavior
export const plansLogSchema = logBaseSchema.extend({
  type: z.literal("plans"),
  // Plans logs are always displayed in the UI
  isDisplayable: z.literal(true),
  data: z.object({
    // The behavior these plans are for
    behaviorId: z.string(),
    // Array of plans for this behavior
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
