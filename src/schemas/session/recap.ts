import { z } from "zod";
import { timestampSchema } from "../../utils/timestampSchema";
import { sessionBaseSchema } from "./base";

export const recapQuestionSourceSchema = z.enum([
  "sequence",
  "baseline",
  "milestone",
  "trend",
  "approaching_milestone",
]);
export type RecapQuestionSource = z.infer<typeof recapQuestionSourceSchema>;

export const recapSessionSchema = sessionBaseSchema.extend({
  type: z.literal("recap"),
  /** Set when user confirms day totals — mirrors daySummary.dayTotalsConfirmedAt */
  completedAt: timestampSchema.nullable().optional(),
  recapQuestionId: z.string().nullable().optional(),
  recapQuestionSource: recapQuestionSourceSchema.optional(),
  focusBehaviorId: z.string().optional(),
  focusBehaviorName: z.string().optional(),
  focusBehaviorIds: z.array(z.string()).optional(),
  focusBehaviorNames: z.array(z.string()).optional(),
});

export type RecapSession = z.infer<typeof recapSessionSchema>;
