import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

export const taskStatusSchema = z.enum(["open", "completed", "dismissed"]);

export const taskCategorySchema = z.enum(["zara", "deterministic"]);

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

const strategyOperationSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("create_trigger"),
    clientId: z.string().min(1),
    trigger: z.object({
      title: z.string().optional(),
      tags: z.record(z.string(), z.string()).optional(),
      behaviorIds: z.array(z.string()).optional(),
    }),
  }),
  z.object({
    type: z.literal("create_plan"),
    triggerClientId: z.string().min(1),
    plan: z.object({
      name: z.string().min(1),
      tacticIds: z.array(z.string()).min(1),
    }),
  }),
]);

export const suggestStrategyTaskSchema = taskBaseSchema.extend({
  type: z.literal("suggest_strategy"),
  suggestedStrategy: z.object({
    title: z.string().min(1),
    summary: z.string().min(1),
    operations: z.array(strategyOperationSchema).min(1),
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

export const taskSchema = z.discriminatedUnion("type", [
  mergeBehaviorsTaskSchema,
  suggestStrategyTaskSchema,
  proposeExperimentTaskSchema,
  proposeMaskBehaviorTaskSchema,
  createSessionTaskSchema,
  recapQuestionTaskSchema,
  reviewTriggerTaskSchema,
  toolkitPlanningTaskSchema,
  suggestTacticTaskSchema,
]);

export type TaskCategory = z.infer<typeof taskCategorySchema>;
export type TaskStatus = z.infer<typeof taskStatusSchema>;
export type MergeBehaviorsTask = z.infer<typeof mergeBehaviorsTaskSchema>;
export type SuggestStrategyTask = z.infer<typeof suggestStrategyTaskSchema>;
export type ProposeExperimentTask = z.infer<typeof proposeExperimentTaskSchema>;
export type ProposeMaskBehaviorTask = z.infer<typeof proposeMaskBehaviorTaskSchema>;
export type CreateSessionTask = z.infer<typeof createSessionTaskSchema>;
export type RecapQuestionTask = z.infer<typeof recapQuestionTaskSchema>;
export type ReviewTriggerTask = z.infer<typeof reviewTriggerTaskSchema>;
export type ToolkitPlanningTask = z.infer<typeof toolkitPlanningTaskSchema>;
export type SuggestTacticTask = z.infer<typeof suggestTacticTaskSchema>;
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
