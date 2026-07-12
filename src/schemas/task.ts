import { z } from "zod";
import { goalSchema } from "./goal";
import { strategyModificationOperationSchema } from "./log/proposedStrategyModificationLog";
import { timestampSchema } from "../utils/timestampSchema";

export const taskStatusSchema = z.enum(["open", "completed", "dismissed"]);

export const taskCategorySchema = z.enum(["zara", "deterministic"]);

export const claimableSessionTypeSchema = z.enum(["recap", "general", "toolkitPlanning"]);

export const taskBaseSchema = z.object({
  id: z.string().optional(),
  userId: z.string(),
  category: taskCategorySchema.default("zara"),
  status: taskStatusSchema.default("open"),
  title: z.string().min(1),
  instructions: z.string().min(1),
  context: z.string().optional(),
  ordinal: z.number().int().min(0).optional(),
  minAppVersion: z.string().optional(),
  requiredTools: z.array(z.string()).optional(),
  dependsOnTaskId: z.string().optional(),
  claimableSessionTypes: z.array(claimableSessionTypeSchema).min(1).optional(),
  /**
   * Passive-display deterministic tasks: after processing, don't end the turn
   * — let the AI still respond (see processDeterministicTasks). Copied onto
   * the session task when claimed.
   */
  triggerAIAfter: z.boolean().optional(),
  createdBy: z.string().optional(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
  completedAt: timestampSchema.optional(),
  dismissedAt: timestampSchema.optional(),
});

export const mergeBehaviorsTaskSchema = taskBaseSchema.extend({
  type: z.literal("merge_behaviors"),
  sourceBehaviorIds: z.array(z.string()).min(2),
  targetBehavior: z.object({
    name: z.string().min(1),
    description: z.string().optional(),
    trackingType: z.enum(["counter", "timer", "scale"]).optional(),
    synonyms: z.array(z.string()).optional(),
  }),
});

export const suggestStrategyTaskSchema = taskBaseSchema.extend({
  type: z.literal("suggest_strategy"),
  suggestedStrategy: z.object({
    title: z.string().min(1),
    summary: z.string().min(1),
    // The same operations union proposals use (create_trigger, create_plan,
    // set_behavior_goal) — previously a stricter local copy that drifted.
    operations: z.array(strategyModificationOperationSchema).min(1),
  }),
});

/**
 * A coach-prepared proposal to change one behavior's goal (e.g. switch to a
 * contain goal with afternoon-only windows). Lighter than suggest_strategy —
 * no triggers or plans, just the goal. In the weekly review it is claimed and
 * surfaced BEFORE any suggest_strategy tasks, so the goal lands first and the
 * strategy suggestions can build on it. The AI presents it by calling
 * proposeGoalChange, which renders an accept/decline card; accepting sets the
 * goal on the behavior (applied server-side).
 */
export const proposeGoalTaskSchema = taskBaseSchema.extend({
  type: z.literal("propose_goal"),
  behaviorId: z.string().min(1),
  proposedGoal: z.object({
    title: z.string().min(1),
    summary: z.string().min(1),
    goal: goalSchema,
  }),
});

export const proposedMetricSchema = z.object({
  name: z.string().min(1),
  minLabel: z.string().optional(),
  maxLabel: z.string().optional(),
});

export const proposeExperimentTaskSchema = taskBaseSchema.extend({
  type: z.literal("propose_experiment"),
  proposedExperiment: z.object({
    behaviorId: z.string().min(1),
    metrics: z.array(proposedMetricSchema).min(1),
    experimentQuestion: z.string().min(1),
  }),
});

export const proposeMaskBehaviorTaskSchema = taskBaseSchema.extend({
  type: z.literal("propose_mask_behavior"),
  behaviorId: z.string().min(1),
});

const sessionLogTemplateSchema = z.object({
  type: z.string(),
  isDisplayable: z.literal(true),
  data: z.record(z.string(), z.any()),
  message: z
    .object({
      role: z.enum(["assistant", "user"]),
      content: z.string(),
    })
    .optional(),
});

export const createSessionTaskSchema = taskBaseSchema.extend({
  type: z.literal("create_session"),
  lazy: z.boolean().default(false),
  taskIds: z.array(z.string()).optional(),
  notification: z.object({
    title: z.string(),
    body: z.string(),
    data: z.record(z.string(), z.any()).optional(),
  }).optional(),
  sessionTemplate: z.object({
    title: z.string(),
    logs: z.array(sessionLogTemplateSchema),
    notification: z.object({
      title: z.string(),
      body: z.string(),
      data: z.record(z.string(), z.any()).optional(),
    }).optional(),
  }).optional(),
});

export const recapQuestionTaskSchema = taskBaseSchema.extend({
  type: z.literal("recap_question"),
  recapQuestionId: z.string(),
  behaviorId: z.string(),
  behaviorName: z.string(),
  ordinal: z.number().int().min(0),
  answerSummary: z.string().optional(),
  claimedBySessionId: z.string().optional(),
});

export const reviewTriggerTaskSchema = taskBaseSchema.extend({
  type: z.literal("review_trigger"),
  impulseSessionId: z.string(),
  debriefOutcome: z.enum(["acted", "resisted"]),
  suggestedTrigger: z.object({
    tags: z.record(z.string(), z.string()),
    behaviorIds: z.array(z.string()).optional(),
  }),
  suggestedPlan: z.object({
    name: z.string(),
    tacticIds: z.array(z.string()).optional(),
    newTactics: z.array(z.object({
      title: z.string(),
      description: z.string().optional(),
    })).optional(),
  }),
});

export const toolkitPlanningTaskSchema = taskBaseSchema.extend({
  type: z.literal("toolkit_planning"),
});

const tacticSuggestionSchema = z.object({
  theme: z.string().min(1),
  guidance: z.string().optional(),
  tacticId: z.string().optional(),
});

export const suggestTacticTaskSchema = taskBaseSchema.extend({
  type: z.literal("suggest_tactic"),
  suggestions: z.array(tacticSuggestionSchema).min(1),
});

export const reflectOnMetricsTaskSchema = taskBaseSchema.extend({
  type: z.literal("reflect_on_metrics"),
  behaviorName: z.string().min(1),
  metricIds: z.array(z.string().min(1)).min(1),
  metricNames: z.array(z.string().min(1)).min(1),
  experimentQuestion: z.string().min(1),
  timeWindowDays: z.number().int().positive(),
  /**
   * Set when this check-in was triggered by a behavior milestone (e.g. 7 = the
   * 1-week rung). Drives before/after framing in getTaskContext ("you just hit a
   * week — how's X compared to when you started?"). Absent for the baseline
   * check-in created at experiment start.
   */
  milestoneRungDays: z.number().int().positive().optional(),
  /** Human label for the milestone rung (e.g. "1 week"), for prompt wording. */
  milestoneRungLabel: z.string().optional(),
});

export const collectBaselineTaskSchema = taskBaseSchema.extend({
  type: z.literal("collect_baseline"),
  behaviorId: z.string().min(1),
});

/**
 * The durable user-scoped "set up in-the-moment access" task — the parent of
 * the concrete install steps (setup_back_tap_shortcut / setup_widget). It is
 * generated up front for a new user, claimed into their onboarding session,
 * and — if never completed there — re-claimed by later recaps. Completed only
 * on real proof (an impulse_started log) or superseded by an explicit skip.
 * Rendering is handled by the `setup_shortcut` deterministic handler in
 * impulse-functions. (Renamed from `show_impulse_mode_intro` 2026-07.)
 */
export const setupShortcutTaskSchema = taskBaseSchema.extend({
  type: z.literal("setup_shortcut"),
  /** Which setup card to show; if absent it is recomputed from behaviors. */
  shortcutType: z.enum(["back_tap", "lock_screen_widget"]).optional(),
  /** Marks this as a returning nudge so the card copy can be tailored. */
  returning: z.boolean().optional(),
});

/**
 * Durable user-scoped task for a returning user whose scheduled recap
 * reminders are paused (userData recap.paused). Claimed into their next
 * opened recap; the deterministic handler renders a resume_recap_reminders_cta
 * card and hands off to the AI (triggerAIAfter) to introduce it. Responding
 * "resume" clears recap.paused and completes the task; declining completes it
 * too (they can re-enable any time in settings).
 */
export const resumeRecapRemindersTaskSchema = taskBaseSchema.extend({
  type: z.literal("resume_recap_reminders"),
});

/**
 * The weekly review's first beat: reflect on the week just passed as one shape.
 * Injected as a session task on a weekly-mode recap (never user-level), it
 * completes when the AI calls reconcileStrategyProposals (its requiredTool),
 * which is the Phase-1 → Phase-2 (plan review) transition. The week-shape prose
 * is rendered live in getTaskContext, so no data is snapshotted onto the task.
 */
export const weekLookbackTaskSchema = taskBaseSchema.extend({
  type: z.literal("week_lookback"),
  /** The Sunday review this beat belongs to (the recap dateString). */
  weekOfDateString: z.string().optional(),
});

/**
 * The weekly review as a claimable token, one per week. Created on the local
 * Sunday (by any recap path that runs that day); the FIRST recap session the
 * user actually engages with on or after that Sunday claims it, and claiming
 * is what makes that session run in weekly mode — so reviewing Saturday on
 * Sunday morning hosts the weekly review, and the 9pm Sunday session then runs
 * as a plain daily. Unclaimed tasks roll forward within the week (a skipped
 * Sunday means Monday's first recap picks it up); a new Sunday retires any
 * older still-open token. Never becomes a session task: claiming stamps
 * claimedBySessionId + completed in one transaction.
 */
export const weeklyReviewTaskSchema = taskBaseSchema.extend({
  type: z.literal("weekly_review"),
  /** The local Sunday this review week is anchored to (YYYY-MM-DD). */
  weekAnchorDateString: z.string(),
  claimedBySessionId: z.string().optional(),
});

export const taskSchema = z.discriminatedUnion("type", [
  mergeBehaviorsTaskSchema,
  suggestStrategyTaskSchema,
  proposeGoalTaskSchema,
  proposeExperimentTaskSchema,
  proposeMaskBehaviorTaskSchema,
  createSessionTaskSchema,
  recapQuestionTaskSchema,
  reviewTriggerTaskSchema,
  toolkitPlanningTaskSchema,
  suggestTacticTaskSchema,
  reflectOnMetricsTaskSchema,
  collectBaselineTaskSchema,
  setupShortcutTaskSchema,
  resumeRecapRemindersTaskSchema,
  weekLookbackTaskSchema,
  weeklyReviewTaskSchema,
]);

export type TaskCategory = z.infer<typeof taskCategorySchema>;
export type TaskStatus = z.infer<typeof taskStatusSchema>;
export type ClaimableSessionType = z.infer<typeof claimableSessionTypeSchema>;
export type MergeBehaviorsTask = z.infer<typeof mergeBehaviorsTaskSchema>;
export type SuggestStrategyTask = z.infer<typeof suggestStrategyTaskSchema>;
export type ProposeGoalTask = z.infer<typeof proposeGoalTaskSchema>;
export type ProposeExperimentTask = z.infer<typeof proposeExperimentTaskSchema>;
export type ProposeMaskBehaviorTask = z.infer<typeof proposeMaskBehaviorTaskSchema>;
export type CreateSessionTask = z.infer<typeof createSessionTaskSchema>;
export type RecapQuestionTask = z.infer<typeof recapQuestionTaskSchema>;
export type ReviewTriggerTask = z.infer<typeof reviewTriggerTaskSchema>;
export type ToolkitPlanningTask = z.infer<typeof toolkitPlanningTaskSchema>;
export type SuggestTacticTask = z.infer<typeof suggestTacticTaskSchema>;
export type ReflectOnMetricsTask = z.infer<typeof reflectOnMetricsTaskSchema>;
export type CollectBaselineTask = z.infer<typeof collectBaselineTaskSchema>;
export type SetupShortcutTask = z.infer<typeof setupShortcutTaskSchema>;
export type ResumeRecapRemindersTask = z.infer<
  typeof resumeRecapRemindersTaskSchema
>;
export type WeekLookbackTask = z.infer<typeof weekLookbackTaskSchema>;
export type WeeklyReviewTask = z.infer<typeof weeklyReviewTaskSchema>;
export type Task = z.infer<typeof taskSchema>;

export const isTask = (value: unknown): value is Task =>
  taskSchema.safeParse(value).success;

export const isMergeBehaviorsTask = (
  value: unknown,
): value is MergeBehaviorsTask =>
  mergeBehaviorsTaskSchema.safeParse(value).success;

export const isSuggestStrategyTask = (
  value: unknown,
): value is SuggestStrategyTask =>
  suggestStrategyTaskSchema.safeParse(value).success;

export const isProposeGoalTask = (
  value: unknown,
): value is ProposeGoalTask =>
  proposeGoalTaskSchema.safeParse(value).success;

export const isProposeExperimentTask = (
  value: unknown,
): value is ProposeExperimentTask =>
  proposeExperimentTaskSchema.safeParse(value).success;

export const isProposeMaskBehaviorTask = (
  value: unknown,
): value is ProposeMaskBehaviorTask =>
  proposeMaskBehaviorTaskSchema.safeParse(value).success;

export const isRecapQuestionTask = (
  value: unknown,
): value is RecapQuestionTask =>
  recapQuestionTaskSchema.safeParse(value).success;

export const isReviewTriggerTask = (
  value: unknown,
): value is ReviewTriggerTask =>
  reviewTriggerTaskSchema.safeParse(value).success;

export const isToolkitPlanningTask = (
  value: unknown,
): value is ToolkitPlanningTask =>
  toolkitPlanningTaskSchema.safeParse(value).success;

export const isSuggestTacticTask = (
  value: unknown,
): value is SuggestTacticTask =>
  suggestTacticTaskSchema.safeParse(value).success;

export const isReflectOnMetricsTask = (
  value: unknown,
): value is ReflectOnMetricsTask =>
  reflectOnMetricsTaskSchema.safeParse(value).success;

export const isSetupShortcutTask = (
  value: unknown,
): value is SetupShortcutTask =>
  setupShortcutTaskSchema.safeParse(value).success;
