import { z } from "zod";
import { logBaseSchema } from "./base";

export const planHistoryEntryKindSchema = z.enum([
  "plan_activated",
  "plan_deactivated",
  "plan_paused_mid_week",
  // A coach-prepared proposal the weekly review set aside because the user
  // explicitly rejected it during reflection (the proposal is marked declined).
  "proposal_declined",
  "note",
]);
export type PlanHistoryEntryKind = z.infer<typeof planHistoryEntryKindSchema>;

const planHistoryWinRateSchema = z.object({
  behaviorId: z.string(),
  metDays: z.number().int().nonnegative(),
  totalDays: z.number().int().nonnegative(),
  fromDateString: z.string(),
  toDateString: z.string(),
});

/**
 * Additive-only, human-readable memory for a user's behavior-change plans —
 * the substrate weekly reviews read back so each review doesn't start cold.
 * Deliberately no score/weight field: `note` is the only judgment surface.
 */
export const planHistoryEntryLogSchema = logBaseSchema.extend({
  type: z.literal("plan_history_entry"),
  isDisplayable: z.literal(false),
  data: z.object({
    kind: planHistoryEntryKindSchema,
    planId: z.string().optional(),
    // Plans have no single central address (they live under triggers/,
    // behaviors/, or defaultPlans/) — snapshot the full doc path.
    planPath: z.string().optional(),
    planName: z.string().optional(),
    behaviorIds: z.array(z.string()).optional(),
    note: z.string().min(1),
    // For kind "note" from a weekly review beat: how the forward-looking
    // plan/goal check landed.
    planSentiment: z
      .enum(["confirmed", "changed", "declined_changes", "no_plan", "skipped"])
      .optional(),
    relatedProposalLogId: z.string().optional(),
    reflectionQuote: z.string().optional(),
    winRateWhileActive: z.array(planHistoryWinRateSchema).optional(),
    weekOfDateString: z.string().optional(),
  }),
});

export type PlanHistoryEntryLog = z.infer<typeof planHistoryEntryLogSchema>;
