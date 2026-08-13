import { z } from "zod";
import { goalSchema } from "./goal";
import { strategyModificationOperationSchema } from "./log/proposedStrategyModificationLog";
import { timestampSchema } from "../utils/timestampSchema";

export const taskStatusSchema = z.enum(["open", "completed", "dismissed"]);

/**
 * Why a task reached the terminal `dismissed` status, when the distinction
 * matters (currently the reclaimable weekly-review bundle):
 * - `declined` — the user actively said no (tapped "Not this time" on the card).
 * - `ignored`  — auto-closed after being re-presented across the cap (3) recaps
 *   without ever being engaged/resolved. Not the same as a deliberate no; a
 *   coach reading the dashboard should be able to tell "he passed on it" from
 *   "he never actually saw/acted on it".
 */
export const dismissedReasonSchema = z.enum(["ignored", "declined"]);

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
  /**
   * Tools to inject for this task WITHOUT a completion contract: getTaskTools
   * exposes them alongside requiredTools, but creditCalledTools never counts
   * them, so calling every one of them does not complete the task. For arcs
   * whose completion is decided elsewhere (e.g. protect_next_window completes
   * via the showCloseButton gate) but that still need optional in-arc tools.
   */
  optionalTools: z.array(z.string()).optional(),
  dependsOnTaskId: z.string().optional(),
  claimableSessionTypes: z.array(claimableSessionTypeSchema).min(1).optional(),
  /**
   * Passive-display deterministic tasks: after processing, don't end the turn
   * — let the AI still respond (see processDeterministicTasks). Copied onto
   * the session task when claimed.
   */
  triggerAIAfter: z.boolean().optional(),
  createdBy: z.string().optional(),
  /**
   * How many recap sessions have surfaced this task. Set to 1 on first claim
   * and incremented each time a fresh recap reclaims it off an earlier,
   * unresolved recap (see reclaimStrandedWeeklyReview). Drives the retry cap:
   * after being presented across the cap number of recaps without resolution,
   * the task is auto-closed (dismissed / `ignored`) instead of following the
   * user forever. Absent on older tasks — treat missing as 1.
   */
  presentationCount: z.number().int().min(0).optional(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
  completedAt: timestampSchema.optional(),
  dismissedAt: timestampSchema.optional(),
  /** Set alongside `dismissedAt` when the distinction matters — see dismissedReasonSchema. */
  dismissedReason: dismissedReasonSchema.optional(),
  /**
   * Human sign-off for task types in TASK_TYPES_REQUIRING_APPROVAL: absent
   * means "awaiting coach review" and no claim path may present the task to
   * the user (see isTaskAwaitingApproval). Set from the coach dashboard.
   * Other task types are auto-approved by not being in that set, so they
   * never carry these fields.
   */
  approvedAt: timestampSchema.optional(),
  /** Why the coach approved it — recorded alongside `approvedAt`. */
  approvalReason: z.string().optional(),
  /**
   * Opt-in: surface this open user-level task as a card on the native home
   * screen (below the experiment card). Tapping the card calls
   * POST app/sessions/ensureTask, which claims the task into a dedicated
   * `task_<taskId>` session. Set per task at creation — most task types stay
   * recap/session-claimed only.
   */
  showOnHome: z.boolean().optional(),
  /** Card subtitle when shown on home; the card falls back to generic copy. */
  homeSubtitle: z.string().optional(),
  /**
   * Session currently working this task. Recap claiming and the ensureTask
   * endpoint both stamp it (the latter with a deterministic `task_<taskId>`
   * id), on any claimable task type — base-level, though a couple of
   * variants re-declare it from before it lived here.
   */
  claimedBySessionId: z.string().optional(),
});

export const mergeBehaviorsTaskSchema = taskBaseSchema.extend({
  type: z.literal("merge_behaviors"),
  sourceBehaviorIds: z.array(z.string()).min(2),
  targetBehavior: z.object({
    name: z.string().min(1),
    description: z.string().optional(),
    trackingType: z.enum(["counter", "timer", "scale", "occurrence"]).optional(),
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
 * Get to know a behavior created OUTSIDE onboarding (a general chat where the
 * user mentioned something new and agreed to track it). Onboarding earns this
 * understanding in the flow itself; a mid-program createBehavior skips all of
 * that, so this task queues the conversation — when it happens, what it costs
 * them, what it gives them — for a later session. Completed when the AI saves
 * what it learned onto the behavior doc via updateBehaviorUnderstanding (its
 * requiredTool, behaviorId-scoped like other per-behavior task credits).
 */
export const understandBehaviorTaskSchema = taskBaseSchema.extend({
  type: z.literal("understand_behavior"),
  behaviorId: z.string().min(1),
  behaviorName: z.string().optional(),
});

/**
 * Post-lapse containment: created on the impulse session at the moment the
 * user reports they acted on the urge (the session's phase moves to
 * "contain"). The task shifts the session objective from debriefing a closed
 * moment to limiting the blast radius — is it still going, what's left of
 * the day, protect the next vulnerable window. The computed containment
 * brief (Nth lapse today, broken streak, related behaviors, local hour) goes
 * in the base `context` field; completion is credited when the protective
 * check-in is scheduled (requiredTools: ["scheduleCheckIn"]).
 */
export const containLapseTaskSchema = taskBaseSchema.extend({
  type: z.literal("contain_lapse"),
  behaviorId: z.string().min(1),
  behaviorName: z.string().optional(),
  /**
   * first — full flow: assess, protect the window, offer the check-in.
   * standing_plan — a containment plan already exists today: reference it,
   *   ask what broke, adjust; no fresh assessment ceremony.
   * pattern — day ≥2 of a multi-day slip: name the pattern gently, smaller
   *   ask, lean toward the recap/coach surfaces that own multi-day work.
   */
  variant: z.enum(["first", "standing_plan", "pattern"]),
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

/**
 * The user-authored beat that closes a recap (see userData
 * recap.closingReflection). Injected as a SESSION task, never user-level, and
 * — unlike every other session task — written LAZILY rather than at session
 * creation.
 *
 * The lazy write is load-bearing. getTaskContext renders the lowest-ordinal
 * open `zara` task as an Active Task Override that supersedes the session
 * objective, and a daily recap normally has no open zara task at all. Written
 * up front this beat would be the only one, so it would take over the recap
 * from turn one no matter how high its ordinal. Instead judgeRecapClose writes
 * it at the moment it would otherwise have surfaced "Done for now" — i.e. once
 * the night's real reflection has actually run its course.
 *
 * Completed by the `logClosingReflection` tool, which also records what the
 * user said as a closing_reflection log.
 */
export const closingReflectionTaskSchema = taskBaseSchema.extend({
  type: z.literal("closing_reflection"),
  /** The user's own question text, handed to the assistant verbatim. */
  prompt: z.string().min(1),
});

/**
 * Which time-shaped variant of the protect_next_window arc runs. Time alters
 * the arc rather than suppressing it — containment is immediate risk
 * management and coexists with the (retrospective) recap:
 * - daytime   — full arc: what they're moving into, resolve the obstacle,
 *               settle a next action.
 * - evening   — the window is the rest of the evening: shape it lightly and
 *               transition toward winding down/sleep.
 * - pre_recap — the nightly recap is imminent: keep it to ONE short exchange
 *               about the next hour; the recap revisits the commitment.
 */
export const protectNextWindowVariantSchema = z.enum([
  "daytime",
  "evening",
  "pre_recap",
]);

/**
 * Resisted-path CONTAINMENT, on impulse sessions. Containment is the support
 * that begins once an urge is acknowledged and continues until the user has
 * safely transitioned into the next part of their day:
 *
 *   Containment
 *   ├── resisted path → protect_next_window (this task)
 *   └── acted path    → contain_lapse
 *
 * Separate task types for now (different entry logic and completion
 * contracts) sharing the same principles: near-term protection, vetted tactic
 * access, check-in scheduling, appetite/fatigue controls, structured outcome
 * logging. The arc: understand what the user is moving into, resolve any
 * immediate obstacle, settle on a manageable next action, optionally protect
 * the window (check-in / break tactic).
 *
 * One task carries the whole arc (the contain_lapse pattern), with the full
 * frame written into `instructions` at injection. Injected lazily by the
 * showCloseButton gate at the moment the model first tries to close a settled
 * resisted debrief — never at session creation, where it would hijack the
 * urge conversation as the Active Task Override from turn one. To the user
 * this is ONE continuous conversation: the debrief is a transition inside
 * containment, never an announced phase change. Completed by the same gate on
 * the NEXT close attempt once the user has engaged (no model-called outcome
 * tool — the outcome/commitment log is extracted from the transcript in the
 * background, see afterSessionTaskWrite); dismissed = the user passed, never
 * re-offered that day.
 */
export const protectNextWindowTaskSchema = taskBaseSchema.extend({
  type: z.literal("protect_next_window"),
  variant: protectNextWindowVariantSchema,
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
  understandBehaviorTaskSchema,
  containLapseTaskSchema,
  setupShortcutTaskSchema,
  resumeRecapRemindersTaskSchema,
  weekLookbackTaskSchema,
  weeklyReviewTaskSchema,
  closingReflectionTaskSchema,
  protectNextWindowTaskSchema,
]);

export type TaskCategory = z.infer<typeof taskCategorySchema>;
export type TaskStatus = z.infer<typeof taskStatusSchema>;
export type DismissedReason = z.infer<typeof dismissedReasonSchema>;
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
export type UnderstandBehaviorTask = z.infer<
  typeof understandBehaviorTaskSchema
>;
export type ContainLapseTask = z.infer<typeof containLapseTaskSchema>;
export type SetupShortcutTask = z.infer<typeof setupShortcutTaskSchema>;
export type ResumeRecapRemindersTask = z.infer<
  typeof resumeRecapRemindersTaskSchema
>;
export type WeekLookbackTask = z.infer<typeof weekLookbackTaskSchema>;
export type WeeklyReviewTask = z.infer<typeof weeklyReviewTaskSchema>;
export type ClosingReflectionTask = z.infer<typeof closingReflectionTaskSchema>;
export type ProtectNextWindowVariant = z.infer<
  typeof protectNextWindowVariantSchema
>;
export type ProtectNextWindowTask = z.infer<typeof protectNextWindowTaskSchema>;
export type Task = z.infer<typeof taskSchema>;

/**
 * Task types that must NEVER reach the user without a human (coach) sign-off.
 * System code may still create these tasks, but every claim path skips them
 * until a coach sets `approvedAt` (from the dashboard). review_trigger is here
 * because auto-raised "common trigger" patterns (e.g. tagging "Walking" as a
 * trigger) need a human sanity check before the AI proposes formalizing them.
 */
export const TASK_TYPES_REQUIRING_APPROVAL: ReadonlySet<string> = new Set([
  "review_trigger",
]);

/**
 * True when a task must be held back from claiming because it still needs
 * coach approval. Takes raw doc data (claim paths work with untyped
 * snapshots); tasks of types outside TASK_TYPES_REQUIRING_APPROVAL are
 * implicitly auto-approved. Legacy docs of a gated type predate `approvedAt`
 * and are treated as awaiting approval — they were never human-reviewed.
 */
export const isTaskAwaitingApproval = (task: {
  type?: unknown;
  approvedAt?: unknown;
}): boolean =>
  typeof task.type === "string" &&
  TASK_TYPES_REQUIRING_APPROVAL.has(task.type) &&
  task.approvedAt == null;

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
