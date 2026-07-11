"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSetupShortcutTask = exports.isReflectOnMetricsTask = exports.isSuggestTacticTask = exports.isToolkitPlanningTask = exports.isReviewTriggerTask = exports.isRecapQuestionTask = exports.isProposeMaskBehaviorTask = exports.isProposeExperimentTask = exports.isProposeGoalTask = exports.isSuggestStrategyTask = exports.isMergeBehaviorsTask = exports.isTask = exports.taskSchema = exports.weekLookbackTaskSchema = exports.resumeRecapRemindersTaskSchema = exports.setupShortcutTaskSchema = exports.collectBaselineTaskSchema = exports.reflectOnMetricsTaskSchema = exports.suggestTacticTaskSchema = exports.toolkitPlanningTaskSchema = exports.reviewTriggerTaskSchema = exports.recapQuestionTaskSchema = exports.createSessionTaskSchema = exports.proposeMaskBehaviorTaskSchema = exports.proposeExperimentTaskSchema = exports.proposedMetricSchema = exports.proposeGoalTaskSchema = exports.suggestStrategyTaskSchema = exports.mergeBehaviorsTaskSchema = exports.taskBaseSchema = exports.claimableSessionTypeSchema = exports.taskCategorySchema = exports.taskStatusSchema = void 0;
const zod_1 = require("zod");
const goal_1 = require("./goal");
const proposedStrategyModificationLog_1 = require("./log/proposedStrategyModificationLog");
const timestampSchema_1 = require("../utils/timestampSchema");
exports.taskStatusSchema = zod_1.z.enum(["open", "completed", "dismissed"]);
exports.taskCategorySchema = zod_1.z.enum(["zara", "deterministic"]);
exports.claimableSessionTypeSchema = zod_1.z.enum(["recap", "general", "toolkitPlanning"]);
exports.taskBaseSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    userId: zod_1.z.string(),
    category: exports.taskCategorySchema.default("zara"),
    status: exports.taskStatusSchema.default("open"),
    title: zod_1.z.string().min(1),
    instructions: zod_1.z.string().min(1),
    context: zod_1.z.string().optional(),
    ordinal: zod_1.z.number().int().min(0).optional(),
    minAppVersion: zod_1.z.string().optional(),
    requiredTools: zod_1.z.array(zod_1.z.string()).optional(),
    dependsOnTaskId: zod_1.z.string().optional(),
    claimableSessionTypes: zod_1.z.array(exports.claimableSessionTypeSchema).min(1).optional(),
    /**
     * Passive-display deterministic tasks: after processing, don't end the turn
     * — let the AI still respond (see processDeterministicTasks). Copied onto
     * the session task when claimed.
     */
    triggerAIAfter: zod_1.z.boolean().optional(),
    createdBy: zod_1.z.string().optional(),
    createdAt: timestampSchema_1.timestampSchema,
    updatedAt: timestampSchema_1.timestampSchema,
    completedAt: timestampSchema_1.timestampSchema.optional(),
    dismissedAt: timestampSchema_1.timestampSchema.optional(),
});
exports.mergeBehaviorsTaskSchema = exports.taskBaseSchema.extend({
    type: zod_1.z.literal("merge_behaviors"),
    sourceBehaviorIds: zod_1.z.array(zod_1.z.string()).min(2),
    targetBehavior: zod_1.z.object({
        name: zod_1.z.string().min(1),
        description: zod_1.z.string().optional(),
        trackingType: zod_1.z.enum(["counter", "timer", "scale"]).optional(),
        synonyms: zod_1.z.array(zod_1.z.string()).optional(),
    }),
});
exports.suggestStrategyTaskSchema = exports.taskBaseSchema.extend({
    type: zod_1.z.literal("suggest_strategy"),
    suggestedStrategy: zod_1.z.object({
        title: zod_1.z.string().min(1),
        summary: zod_1.z.string().min(1),
        // The same operations union proposals use (create_trigger, create_plan,
        // set_behavior_goal) — previously a stricter local copy that drifted.
        operations: zod_1.z.array(proposedStrategyModificationLog_1.strategyModificationOperationSchema).min(1),
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
exports.proposeGoalTaskSchema = exports.taskBaseSchema.extend({
    type: zod_1.z.literal("propose_goal"),
    behaviorId: zod_1.z.string().min(1),
    proposedGoal: zod_1.z.object({
        title: zod_1.z.string().min(1),
        summary: zod_1.z.string().min(1),
        goal: goal_1.goalSchema,
    }),
});
exports.proposedMetricSchema = zod_1.z.object({
    name: zod_1.z.string().min(1),
    minLabel: zod_1.z.string().optional(),
    maxLabel: zod_1.z.string().optional(),
});
exports.proposeExperimentTaskSchema = exports.taskBaseSchema.extend({
    type: zod_1.z.literal("propose_experiment"),
    proposedExperiment: zod_1.z.object({
        behaviorId: zod_1.z.string().min(1),
        metrics: zod_1.z.array(exports.proposedMetricSchema).min(1),
        experimentQuestion: zod_1.z.string().min(1),
    }),
});
exports.proposeMaskBehaviorTaskSchema = exports.taskBaseSchema.extend({
    type: zod_1.z.literal("propose_mask_behavior"),
    behaviorId: zod_1.z.string().min(1),
});
const sessionLogTemplateSchema = zod_1.z.object({
    type: zod_1.z.string(),
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.record(zod_1.z.string(), zod_1.z.any()),
    message: zod_1.z
        .object({
        role: zod_1.z.enum(["assistant", "user"]),
        content: zod_1.z.string(),
    })
        .optional(),
});
exports.createSessionTaskSchema = exports.taskBaseSchema.extend({
    type: zod_1.z.literal("create_session"),
    lazy: zod_1.z.boolean().default(false),
    taskIds: zod_1.z.array(zod_1.z.string()).optional(),
    notification: zod_1.z.object({
        title: zod_1.z.string(),
        body: zod_1.z.string(),
        data: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).optional(),
    }).optional(),
    sessionTemplate: zod_1.z.object({
        title: zod_1.z.string(),
        logs: zod_1.z.array(sessionLogTemplateSchema),
        notification: zod_1.z.object({
            title: zod_1.z.string(),
            body: zod_1.z.string(),
            data: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).optional(),
        }).optional(),
    }).optional(),
});
exports.recapQuestionTaskSchema = exports.taskBaseSchema.extend({
    type: zod_1.z.literal("recap_question"),
    recapQuestionId: zod_1.z.string(),
    behaviorId: zod_1.z.string(),
    behaviorName: zod_1.z.string(),
    ordinal: zod_1.z.number().int().min(0),
    answerSummary: zod_1.z.string().optional(),
    claimedBySessionId: zod_1.z.string().optional(),
});
exports.reviewTriggerTaskSchema = exports.taskBaseSchema.extend({
    type: zod_1.z.literal("review_trigger"),
    impulseSessionId: zod_1.z.string(),
    debriefOutcome: zod_1.z.enum(["acted", "resisted"]),
    suggestedTrigger: zod_1.z.object({
        tags: zod_1.z.record(zod_1.z.string(), zod_1.z.string()),
        behaviorIds: zod_1.z.array(zod_1.z.string()).optional(),
    }),
    suggestedPlan: zod_1.z.object({
        name: zod_1.z.string(),
        tacticIds: zod_1.z.array(zod_1.z.string()).optional(),
        newTactics: zod_1.z.array(zod_1.z.object({
            title: zod_1.z.string(),
            description: zod_1.z.string().optional(),
        })).optional(),
    }),
});
exports.toolkitPlanningTaskSchema = exports.taskBaseSchema.extend({
    type: zod_1.z.literal("toolkit_planning"),
});
const tacticSuggestionSchema = zod_1.z.object({
    theme: zod_1.z.string().min(1),
    guidance: zod_1.z.string().optional(),
    tacticId: zod_1.z.string().optional(),
});
exports.suggestTacticTaskSchema = exports.taskBaseSchema.extend({
    type: zod_1.z.literal("suggest_tactic"),
    suggestions: zod_1.z.array(tacticSuggestionSchema).min(1),
});
exports.reflectOnMetricsTaskSchema = exports.taskBaseSchema.extend({
    type: zod_1.z.literal("reflect_on_metrics"),
    behaviorName: zod_1.z.string().min(1),
    metricIds: zod_1.z.array(zod_1.z.string().min(1)).min(1),
    metricNames: zod_1.z.array(zod_1.z.string().min(1)).min(1),
    experimentQuestion: zod_1.z.string().min(1),
    timeWindowDays: zod_1.z.number().int().positive(),
    /**
     * Set when this check-in was triggered by a behavior milestone (e.g. 7 = the
     * 1-week rung). Drives before/after framing in getTaskContext ("you just hit a
     * week — how's X compared to when you started?"). Absent for the baseline
     * check-in created at experiment start.
     */
    milestoneRungDays: zod_1.z.number().int().positive().optional(),
    /** Human label for the milestone rung (e.g. "1 week"), for prompt wording. */
    milestoneRungLabel: zod_1.z.string().optional(),
});
exports.collectBaselineTaskSchema = exports.taskBaseSchema.extend({
    type: zod_1.z.literal("collect_baseline"),
    behaviorId: zod_1.z.string().min(1),
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
exports.setupShortcutTaskSchema = exports.taskBaseSchema.extend({
    type: zod_1.z.literal("setup_shortcut"),
    /** Which setup card to show; if absent it is recomputed from behaviors. */
    shortcutType: zod_1.z.enum(["back_tap", "lock_screen_widget"]).optional(),
    /** Marks this as a returning nudge so the card copy can be tailored. */
    returning: zod_1.z.boolean().optional(),
});
/**
 * Durable user-scoped task for a returning user whose scheduled recap
 * reminders are paused (userData recap.paused). Claimed into their next
 * opened recap; the deterministic handler renders a resume_recap_reminders_cta
 * card and hands off to the AI (triggerAIAfter) to introduce it. Responding
 * "resume" clears recap.paused and completes the task; declining completes it
 * too (they can re-enable any time in settings).
 */
exports.resumeRecapRemindersTaskSchema = exports.taskBaseSchema.extend({
    type: zod_1.z.literal("resume_recap_reminders"),
});
/**
 * The weekly review's first beat: reflect on the week just passed as one shape.
 * Injected as a session task on a weekly-mode recap (never user-level), it
 * completes when the AI calls reconcileStrategyProposals (its requiredTool),
 * which is the Phase-1 → Phase-2 (plan review) transition. The week-shape prose
 * is rendered live in getTaskContext, so no data is snapshotted onto the task.
 */
exports.weekLookbackTaskSchema = exports.taskBaseSchema.extend({
    type: zod_1.z.literal("week_lookback"),
    /** The Sunday review this beat belongs to (the recap dateString). */
    weekOfDateString: zod_1.z.string().optional(),
});
exports.taskSchema = zod_1.z.discriminatedUnion("type", [
    exports.mergeBehaviorsTaskSchema,
    exports.suggestStrategyTaskSchema,
    exports.proposeGoalTaskSchema,
    exports.proposeExperimentTaskSchema,
    exports.proposeMaskBehaviorTaskSchema,
    exports.createSessionTaskSchema,
    exports.recapQuestionTaskSchema,
    exports.reviewTriggerTaskSchema,
    exports.toolkitPlanningTaskSchema,
    exports.suggestTacticTaskSchema,
    exports.reflectOnMetricsTaskSchema,
    exports.collectBaselineTaskSchema,
    exports.setupShortcutTaskSchema,
    exports.resumeRecapRemindersTaskSchema,
    exports.weekLookbackTaskSchema,
]);
const isTask = (value) => exports.taskSchema.safeParse(value).success;
exports.isTask = isTask;
const isMergeBehaviorsTask = (value) => exports.mergeBehaviorsTaskSchema.safeParse(value).success;
exports.isMergeBehaviorsTask = isMergeBehaviorsTask;
const isSuggestStrategyTask = (value) => exports.suggestStrategyTaskSchema.safeParse(value).success;
exports.isSuggestStrategyTask = isSuggestStrategyTask;
const isProposeGoalTask = (value) => exports.proposeGoalTaskSchema.safeParse(value).success;
exports.isProposeGoalTask = isProposeGoalTask;
const isProposeExperimentTask = (value) => exports.proposeExperimentTaskSchema.safeParse(value).success;
exports.isProposeExperimentTask = isProposeExperimentTask;
const isProposeMaskBehaviorTask = (value) => exports.proposeMaskBehaviorTaskSchema.safeParse(value).success;
exports.isProposeMaskBehaviorTask = isProposeMaskBehaviorTask;
const isRecapQuestionTask = (value) => exports.recapQuestionTaskSchema.safeParse(value).success;
exports.isRecapQuestionTask = isRecapQuestionTask;
const isReviewTriggerTask = (value) => exports.reviewTriggerTaskSchema.safeParse(value).success;
exports.isReviewTriggerTask = isReviewTriggerTask;
const isToolkitPlanningTask = (value) => exports.toolkitPlanningTaskSchema.safeParse(value).success;
exports.isToolkitPlanningTask = isToolkitPlanningTask;
const isSuggestTacticTask = (value) => exports.suggestTacticTaskSchema.safeParse(value).success;
exports.isSuggestTacticTask = isSuggestTacticTask;
const isReflectOnMetricsTask = (value) => exports.reflectOnMetricsTaskSchema.safeParse(value).success;
exports.isReflectOnMetricsTask = isReflectOnMetricsTask;
const isSetupShortcutTask = (value) => exports.setupShortcutTaskSchema.safeParse(value).success;
exports.isSetupShortcutTask = isSetupShortcutTask;
