import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

const tagFrequencyRowSchema = z.object({
  tag_group_name: z.string(),
  option_label: z.string(),
  session_count: z.number(),
  pct_of_sessions: z.number(),
});

const outcomeByTagRowSchema = z.object({
  tag_group_name: z.string(),
  option_label: z.string(),
  total_sessions: z.number(),
  acted_sessions: z.number(),
  resisted_sessions: z.number(),
  win_rate: z.number(),
  struggle_rate: z.number(),
});

const tagCombinationRowSchema = z.object({
  tag_combination: z.string(),
  session_count: z.number(),
  win_rate: z.number(),
});

const tagDrilldownRowSchema = z.object({
  tag_group_id: z.string(),
  tag_group_name: z.string(),
  option_id: z.string(),
  option_label: z.string(),
  session_count: z.number(),
  win_rate: z.number(),
  cross_tags: z.string(),
});

/**
 * Cached behavior pattern analytics data.
 * Collection: users/{userId}/behaviorPatternsCache/{behaviorId}
 *
 * The frontend subscribes to this document for instant rendering and bumps
 * `requestedAt` on mount. A backend trigger compares `requestedAt` vs
 * `fetchedAt` and refreshes from BigQuery when the cache is stale.
 */
export const behaviorPatternsCacheSchema = z.object({
  tagFrequency: z.array(tagFrequencyRowSchema),
  struggles: z.array(outcomeByTagRowSchema),
  strengths: z.array(outcomeByTagRowSchema),
  combinations: z.array(tagCombinationRowSchema),
  drilldown: z.array(tagDrilldownRowSchema),
  totalSessions: z.number(),

  /** Set by the frontend each time the screen is viewed */
  requestedAt: timestampSchema,
  /** Set by the backend after a successful BigQuery refresh */
  fetchedAt: timestampSchema.optional(),
  /** Set by the backend if the last refresh attempt failed; cleared on success */
  lastError: z
    .object({ message: z.string(), occurredAt: timestampSchema })
    .nullable()
    .optional(),
});

export type BehaviorPatternsCache = z.infer<
  typeof behaviorPatternsCacheSchema
>;

export type TagFrequencyRow = z.infer<typeof tagFrequencyRowSchema>;
export type OutcomeByTagRow = z.infer<typeof outcomeByTagRowSchema>;
export type TagCombinationRow = z.infer<typeof tagCombinationRowSchema>;
export type TagDrilldownRow = z.infer<typeof tagDrilldownRowSchema>;
