import { z } from "zod";
import { timestampSchema } from "../../utils/timestampSchema";
import { sessionBaseSchema } from "./base";

export const recapSessionSchema = sessionBaseSchema.extend({
  type: z.literal("recap"),
  /** Set when user confirms day totals — mirrors daySummary.dayTotalsConfirmedAt */
  completedAt: timestampSchema.nullable().optional(),
  recapQuestionId: z.string().optional(),
  focusBehaviorId: z.string().optional(),
});

export type RecapSession = z.infer<typeof recapSessionSchema>;
