import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

/**
 * Report produced by the daily AI-review job (impulse-functions
 * `scheduled_generateDailyReview`). It samples up to a handful of users who were
 * active on a given day, has an LLM judge review each user's WHOLE day (every
 * session + log: what Miro/Zara suggested, what the user did, what outcome was
 * recorded), then runs a second LLM pass to roll the per-user verdicts up into a
 * day-level story for Impulse staff. Read-only QA over real production logs —
 * distinct from the pre-deploy LLM session tests and the structural
 * `schemaValidation` report. Consumed by the admin dashboard's Daily Review page.
 *
 * This is the LATEST report only (single doc, overwritten each run), mirroring
 * `schemaValidation`. Dated history (for trend charts over the scores below) is a
 * clean follow-up: write a copy to a per-day collection without changing this shape.
 */

/**
 * Controlled failure taxonomy. The judge MUST pick tags from this list so the
 * same problem aggregates across users and days instead of fragmenting into
 * one-off prose. Add a value here (and to the admin page's label map) to grow the
 * vocabulary — don't let the judge invent free-text tags.
 */
export const dailyReviewFailureTagSchema = z.enum([
  // User signalled distress / risk and the AI under-reacted or didn't escalate.
  "missed_escalation",
  // Tone wrong for the user's state (too chirpy in a low moment, too clinical, etc.).
  "tone_mismatch",
  // Re-suggested something that already didn't land, ignoring the prior miss.
  "repetitive_suggestion",
  // Didn't use known context (the user's behavior, prior logs, stated goal/why).
  "ignored_context",
  // Bland, could-apply-to-anyone guidance with no personalisation.
  "generic_advice",
  // Left a user question or open loop unanswered.
  "dropped_thread",
  // Wrapped up while the user clearly still needed support.
  "premature_close",
  // Interaction ended with no actionable next step.
  "no_clear_next_step",
  // Logging / tracking flow confused or blocked the user.
  "tracking_friction",
  // AI said something factually wrong or internally inconsistent.
  "factual_or_logic_error",
  // A real problem that doesn't fit the above — the judge must explain it in `note`.
  "other",
]);

export type DailyReviewFailureTag = z.infer<typeof dailyReviewFailureTagSchema>;

/** Per-dimension 0-5 scores the judge assigns to one user's day. */
export const dailyReviewScoresSchema = z.object({
  // Did the AI correctly read the user's state and needs?
  stateRead: z.number().min(0).max(5),
  // Were the AI's suggestions appropriate, specific, and safe?
  suggestionQuality: z.number().min(0).max(5),
  // Did the user stay engaged, or disengage / drop off?
  engagement: z.number().min(0).max(5),
  // Did the day move the user forward (recorded outcomes, momentum)?
  outcome: z.number().min(0).max(5),
});

export type DailyReviewScores = z.infer<typeof dailyReviewScoresSchema>;

/** One reviewed user's whole day. */
export const dailyReviewUserVerdictSchema = z.object({
  userId: z.string(),
  sessionCount: z.number(),
  messageCount: z.number(),
  scores: dailyReviewScoresSchema,
  // Zero or more failure tags from the controlled taxonomy.
  tags: z.array(dailyReviewFailureTagSchema),
  // 1-3 sentences: how the system served this user today.
  note: z.string(),
  // The standout good moment, if any (what worked and why).
  win: z.string().optional(),
  // The single most useful thing that would have improved the day.
  improvement: z.string().optional(),
  // Present if reviewing this user threw (LLM/parse error); scores are 0.
  error: z.string().optional(),
});

export type DailyReviewUserVerdict = z.infer<
  typeof dailyReviewUserVerdictSchema
>;

export const dailyReviewReportSchema = z.object({
  ranAt: timestampSchema,
  // The day reviewed (YYYY-MM-DD), distinct from when the job ran.
  dateString: z.string(),
  durationMs: z.number(),
  // Users active that day (candidates) vs how many we actually reviewed (the cap).
  usersActive: z.number(),
  usersReviewed: z.number(),
  // Day-level averages across reviewed users (errored users excluded).
  averageScores: dailyReviewScoresSchema,
  // Failure tags ranked by how many reviewed users hit them.
  topFailureTags: z.array(
    z.object({ tag: dailyReviewFailureTagSchema, count: z.number() }),
  ),
  // The aggregate prose pass — the day's story for staff.
  summary: z.string(),
  wins: z.array(z.string()),
  failings: z.array(z.string()),
  opportunities: z.array(z.string()),
  // Per-user drill-down.
  users: z.array(dailyReviewUserVerdictSchema),
});

export type DailyReviewReport = z.infer<typeof dailyReviewReportSchema>;

// Canonical Firestore location of the latest report.
export const DAILY_REVIEW_REPORT_PATH = "systemReports/dailyReview";
