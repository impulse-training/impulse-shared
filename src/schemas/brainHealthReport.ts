import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

/**
 * Report produced by the daily brain-health job (impulse-functions
 * `scheduled_brainHealth`). The brain (impulse-brain) is the store of record for
 * durable memory about a user, and `userContexts/{uid}.brain` mirrors it into
 * every prompt. Memory decays in specific, detectable ways: it goes stale, it
 * accretes restatements of the same idea, and it loses its attribution when a
 * behavior is renamed or merged. This job measures each of those per user so the
 * decay shows up on a dashboard instead of in a conversation.
 *
 * Read-only: it never edits or deletes a memory. Consumed by the admin
 * dashboard's Brain Health page.
 */

/** One pair of memories similar enough that they likely say the same thing. */
export const brainDuplicatePairSchema = z.object({
  /** Thought id of the older member (the one a prune would keep). */
  keptId: z.string(),
  /** Thought id of the newer restatement. */
  duplicateId: z.string(),
  /** Cosine similarity between the two, 0..1. */
  similarity: z.number(),
  /** Truncated text of the newer restatement, for triage at a glance. */
  preview: z.string(),
});

export type BrainDuplicatePair = z.infer<typeof brainDuplicatePairSchema>;

export const brainHealthUserResultSchema = z.object({
  uid: z.string(),
  /** Live memories: not superseded, not retired. */
  live: z.number(),
  /** Retired by the weekly curation pass (kept for audit, never rendered). */
  retired: z.number(),
  /** Superseded by a later, sharper memory. */
  superseded: z.number(),
  /**
   * Live memories carrying a `behaviorId` that no longer exists on the user's
   * behavior roster. These render under a heading the user would not recognise,
   * so a non-zero count means attribution propagation missed something.
   */
  orphanedBehaviorIds: z.number(),
  /**
   * Live memories older than the staleness horizon that nothing has superseded,
   * retired, or restated. High counts mean the curation pass is not biting.
   */
  staleLive: z.number(),
  /** Age of the oldest live memory, in days. */
  oldestLiveAgeDays: z.number().nullable(),
  /** ISO date of the most recent capture, or null when the user has none. */
  newestCapturedAt: z.string().nullable(),
  /**
   * Live memories beyond what the prompt caps can render (8 per behavior, 6
   * general). These are stored but invisible: candidates for retirement.
   */
  beyondRenderCap: z.number(),
  /** Near-duplicate pairs found above the report's similarity threshold. */
  duplicatePairs: z.array(brainDuplicatePairSchema),
  /** Present when this user's scan threw; counts are 0 when set. */
  error: z.string().optional(),
});

export type BrainHealthUserResult = z.infer<typeof brainHealthUserResultSchema>;

export const brainHealthReportSchema = z.object({
  ranAt: timestampSchema,
  durationMs: z.number(),
  /** App users in the brain that hold at least one memory. */
  usersWithMemories: z.number(),
  /** App-user rows with zero memories (test scenario rows land here). */
  emptyUsers: z.number(),
  totalLive: z.number(),
  totalRetired: z.number(),
  totalSuperseded: z.number(),
  totalOrphanedBehaviorIds: z.number(),
  totalStaleLive: z.number(),
  totalDuplicatePairs: z.number(),
  /** Similarity at or above which two memories count as duplicates. */
  duplicateThreshold: z.number(),
  /** Age in days beyond which an unrevised live memory counts as stale. */
  staleAfterDays: z.number(),
  /** Per user, worst first (most orphans + duplicates + stale). */
  users: z.array(brainHealthUserResultSchema),
});

export type BrainHealthReport = z.infer<typeof brainHealthReportSchema>;

/** Canonical Firestore location of the latest report. */
export const BRAIN_HEALTH_REPORT_PATH = "systemReports/brainHealth";
