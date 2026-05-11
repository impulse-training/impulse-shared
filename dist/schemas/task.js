"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isToolkitPlanningTask = exports.isReviewTriggerTask = exports.isRecapQuestionTask = exports.isProposeMaskBehaviorTask = exports.isProposeExperimentTask = exports.isSuggestStrategyTask = exports.isMergeBehaviorsTask = exports.isTask = exports.taskSchema = exports.toolkitPlanningTaskSchema = exports.reviewTriggerTaskSchema = exports.recapQuestionTaskSchema = exports.createSessionTaskSchema = exports.proposeMaskBehaviorTaskSchema = exports.proposeExperimentTaskSchema = exports.proposedMetricSchema = exports.suggestStrategyTaskSchema = exports.mergeBehaviorsTaskSchema = exports.taskBaseSchema = exports.taskCategorySchema = exports.taskStatusSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../utils/timestampSchema");
exports.taskStatusSchema = zod_1.z.enum(["open", "completed", "dismissed"]);
exports.taskCategorySchema = zod_1.z.enum(["zara", "deterministic"]);
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
const strategyOperationSchema = zod_1.z.discriminatedUnion("type", [
    zod_1.z.object({
        type: zod_1.z.literal("create_trigger"),
        clientId: zod_1.z.string().min(1),
        trigger: zod_1.z.object({
            title: zod_1.z.string().optional(),
            tags: zod_1.z.record(zod_1.z.string(), zod_1.z.string()).optional(),
            behaviorIds: zod_1.z.array(zod_1.z.string()).optional(),
        }),
    }),
    zod_1.z.object({
        type: zod_1.z.literal("create_plan"),
        triggerClientId: zod_1.z.string().min(1),
        plan: zod_1.z.object({
            name: zod_1.z.string().min(1),
            tacticIds: zod_1.z.array(zod_1.z.string()).min(1),
        }),
    }),
]);
exports.suggestStrategyTaskSchema = exports.taskBaseSchema.extend({
    type: zod_1.z.literal("suggest_strategy"),
    suggestedStrategy: zod_1.z.object({
        title: zod_1.z.string().min(1),
        summary: zod_1.z.string().min(1),
        operations: zod_1.z.array(strategyOperationSchema).min(1),
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
exports.taskSchema = zod_1.z.discriminatedUnion("type", [
    exports.mergeBehaviorsTaskSchema,
    exports.suggestStrategyTaskSchema,
    exports.proposeExperimentTaskSchema,
    exports.proposeMaskBehaviorTaskSchema,
    exports.createSessionTaskSchema,
    exports.recapQuestionTaskSchema,
    exports.reviewTriggerTaskSchema,
    exports.toolkitPlanningTaskSchema,
]);
const isTask = (value) => exports.taskSchema.safeParse(value).success;
exports.isTask = isTask;
const isMergeBehaviorsTask = (value) => exports.mergeBehaviorsTaskSchema.safeParse(value).success;
exports.isMergeBehaviorsTask = isMergeBehaviorsTask;
const isSuggestStrategyTask = (value) => exports.suggestStrategyTaskSchema.safeParse(value).success;
exports.isSuggestStrategyTask = isSuggestStrategyTask;
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
