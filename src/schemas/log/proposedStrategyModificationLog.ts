import { z } from "zod";
import { logBaseSchema } from "./base";
import { goalSchema } from "../goal";
import { tacticLinkSchema, tacticPhaseSchema } from "../tactic";
import { timestampSchema } from "../../utils/timestampSchema";

const strategyTriggerDraftSchema = z.object({
  id: z.string().optional(),
  title: z.string().optional(),
  behaviorIds: z.array(z.string()).optional(),
  tags: z.record(z.string(), z.union([z.string(), z.array(z.string())])).default({}),
  triggerType: z.enum(["arrival", "departure"]).optional(),
  locationName: z.string().optional(),
});

const newTacticDraftSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  phase: tacticPhaseSchema.optional(),
  // External resources the tactic points at (e.g. specific podcasts), with
  // pre-fetched preview metadata so the created tactic renders LinkCards.
  links: z.array(tacticLinkSchema).optional(),
});

const strategyPlanDraftSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1),
  tacticIds: z.array(z.string()).default([]),
  newTactics: z.array(newTacticDraftSchema).optional(),
  planType: z.enum(["trigger", "scheduled"]).optional(),
  hour: z.number().min(0).max(23).optional(),
  minute: z.number().min(0).max(59).optional(),
  weekdays: z.array(z.number().min(0).max(6)).optional(),
});

export const createTriggerStrategyOperationSchema = z.object({
  type: z.literal("create_trigger"),
  clientId: z.string().min(1),
  trigger: strategyTriggerDraftSchema,
});

export const createPlanStrategyOperationSchema = z.object({
  type: z.literal("create_plan"),
  triggerClientId: z.string().min(1).optional(),
  existingTriggerId: z.string().min(1).optional(),
  // Behavior-level (catch-all) plan: created under
  // users/{uid}/behaviors/{id}/plans and made the ACTIVE plan on acceptance
  // (any other active plan on the behavior is deactivated). For plans that
  // don't hang off a trigger.
  existingBehaviorId: z.string().min(1).optional(),
  plan: strategyPlanDraftSchema,
});

// Replaces the behavior's goal wholesale on acceptance (e.g. switching to a
// contain goal with fixed weekly windows). The behavior must belong to the
// user; acceptance updates users/{uid}/behaviors/{behaviorId}.goal.
export const setBehaviorGoalStrategyOperationSchema = z.object({
  type: z.literal("set_behavior_goal"),
  behaviorId: z.string().min(1),
  goal: goalSchema,
});

export const strategyModificationOperationSchema = z.discriminatedUnion("type", [
  createTriggerStrategyOperationSchema,
  createPlanStrategyOperationSchema,
  setBehaviorGoalStrategyOperationSchema,
]);

export const proposedStrategyModificationLogSchema = logBaseSchema.extend({
  type: z.literal("proposed_strategy_modification"),
  isDisplayable: z.literal(true),
  data: z.object({
    title: z.string().min(1),
    summary: z.string().optional(),
    status: z
      .enum(["pending", "accepted", "declined", "superseded"])
      .default("pending"),
    operations: z.array(strategyModificationOperationSchema).min(1),
    acceptedAt: timestampSchema.optional(),
    declinedAt: timestampSchema.optional(),
    /** The suggest_strategy session task this proposal realizes (weekly queue). */
    sourceTaskId: z.string().optional(),
    /**
     * When the user chose "Talk it through" (or resolved the proposal), making
     * the card visible in the session thread. A pending, unrevealed proposal is
     * hidden — it's only reachable via the [SHOW_STRATEGY] full-screen view.
     */
    revealedAt: timestampSchema.optional(),
    /**
     * Revision lineage: a revision is a NEW pending log (append-only — the
     * thread stays temporally honest); the one it replaces is marked
     * "superseded" and points forward is not needed — this points BACK.
     */
    revision: z.number().int().positive().optional(),
    supersedesLogId: z.string().optional(),
    supersededAt: timestampSchema.optional(),
    createdTriggerIds: z.array(z.string()).optional(),
    createdPlanIds: z.array(z.string()).optional(),
    updatedBehaviorIds: z.array(z.string()).optional(),
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
export type SetBehaviorGoalStrategyOperation = z.infer<
  typeof setBehaviorGoalStrategyOperationSchema
>;
export type StrategyModificationOperation = z.infer<
  typeof strategyModificationOperationSchema
>;
export type ProposedStrategyModificationLog = z.infer<
  typeof proposedStrategyModificationLogSchema
>;
