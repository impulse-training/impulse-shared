import { z } from "zod";
import { logBaseSchema } from "./base";
import { timestampSchema } from "../../utils/timestampSchema";

const strategyTriggerDraftSchema = z.object({
  id: z.string().optional(),
  title: z.string().optional(),
  behaviorIds: z.array(z.string()).optional(),
  tags: z.record(z.string(), z.union([z.string(), z.array(z.string())])).default({}),
});

const strategyPlanDraftSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1),
  tacticIds: z.array(z.string()).min(1),
});

export const createTriggerStrategyOperationSchema = z.object({
  type: z.literal("create_trigger"),
  clientId: z.string().min(1),
  trigger: strategyTriggerDraftSchema,
});

export const createPlanStrategyOperationSchema = z.object({
  type: z.literal("create_plan"),
  triggerClientId: z.string().min(1),
  plan: strategyPlanDraftSchema,
});

export const strategyModificationOperationSchema = z.discriminatedUnion("type", [
  createTriggerStrategyOperationSchema,
  createPlanStrategyOperationSchema,
]);

export const proposedStrategyModificationLogSchema = logBaseSchema.extend({
  type: z.literal("proposed_strategy_modification"),
  isDisplayable: z.literal(true),
  data: z.object({
    title: z.string().min(1),
    summary: z.string().optional(),
    status: z.enum(["pending", "accepted", "declined"]).default("pending"),
    operations: z.array(strategyModificationOperationSchema).min(1),
    acceptedAt: timestampSchema.optional(),
    declinedAt: timestampSchema.optional(),
    createdTriggerIds: z.array(z.string()).optional(),
    createdPlanIds: z.array(z.string()).optional(),
  }),
});

export type StrategyTriggerDraft = z.infer<typeof strategyTriggerDraftSchema>;
export type StrategyPlanDraft = z.infer<typeof strategyPlanDraftSchema>;
export type CreateTriggerStrategyOperation = z.infer<
  typeof createTriggerStrategyOperationSchema
>;
export type CreatePlanStrategyOperation = z.infer<
  typeof createPlanStrategyOperationSchema
>;
export type StrategyModificationOperation = z.infer<
  typeof strategyModificationOperationSchema
>;
export type ProposedStrategyModificationLog = z.infer<
  typeof proposedStrategyModificationLogSchema
>;
