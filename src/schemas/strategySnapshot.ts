import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

/**
 * One plan's state inside a strategy snapshot — display-oriented and
 * self-contained, so a past strategy renders without fetching live plan docs
 * (which may since have been renamed, re-tacticked, or deleted).
 */
export const strategyPlanSnapshotSchema = z.object({
  /** Full doc path relative to users/{uid}/, e.g. "triggers/abc/plans/xyz". */
  planPath: z.string().min(1),
  planId: z.string().min(1),
  name: z.string(),
  /** Which plan family this instance lives under. */
  parentType: z.enum(["trigger", "behavior"]),
  parentId: z.string().min(1),
  /** Trigger title / behavior name at snapshot time. */
  parentLabel: z.string().optional(),
  isActive: z.boolean(),
  behaviorIds: z.array(z.string()).optional(),
  /** Tactic titles at snapshot time (falls back to ids when unhydrated). */
  tacticTitles: z.array(z.string()),
});
export type StrategyPlanSnapshot = z.infer<typeof strategyPlanSnapshotSchema>;

export const strategyFieldChangeSchema = z.object({
  field: z.string(),
  before: z.string().optional(),
  after: z.string().optional(),
});

export const strategyPlanChangeSchema = z.object({
  planPath: z.string(),
  name: z.string(),
  /**
   * Parent identity, carried so the change prose can name the plan by what it
   * belongs to (plans are rarely named). Optional: snapshots written before
   * this field existed don't have it.
   */
  parentType: z.enum(["trigger", "behavior"]).optional(),
  parentId: z.string().optional(),
  parentLabel: z.string().optional(),
  changes: z.array(strategyFieldChangeSchema).min(1),
});

/** Structured diff vs the previous strategy snapshot, keyed by planPath. */
export const strategyChangesSchema = z.object({
  added: z.array(strategyPlanSnapshotSchema),
  removed: z.array(strategyPlanSnapshotSchema),
  changed: z.array(strategyPlanChangeSchema),
});
export type StrategyChanges = z.infer<typeof strategyChangesSchema>;

/**
 * An immutable-ish snapshot of the user's full plan state at a point in time,
 * debounced to one doc per local day: users/{uid}/strategies/{dateString}.
 * Same-day edits overwrite the day's doc (re-snapshotting and re-diffing
 * against the last PRIOR day's strategy); the first edit on a later day
 * creates a new doc. The newest doc is "the current strategy" until then.
 */
export const strategySnapshotSchema = z.object({
  id: z.string().optional(),
  userId: z.string(),
  /** Local ISO date (YYYY-MM-DD); also the doc ID. */
  dateString: z.string(),
  plans: z.array(strategyPlanSnapshotSchema),
  activePlanCount: z.number().int().nonnegative(),
  /** dateString of the snapshot this doc's changes are diffed against. */
  previousStrategyDate: z.string().optional(),
  changes: strategyChangesSchema,
  /** Deterministic human-friendly "what changed" prose. */
  changeSummary: z.string(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});
export type StrategySnapshot = z.infer<typeof strategySnapshotSchema>;

export const isStrategySnapshot = (value: unknown): value is StrategySnapshot =>
  strategySnapshotSchema.safeParse(value).success;
