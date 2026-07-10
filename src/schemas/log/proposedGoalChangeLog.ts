import { z } from "zod";
import { logBaseSchema } from "./base";
import { goalSchema } from "../goal";
import { timestampSchema } from "../../utils/timestampSchema";

/**
 * A proposed goal change for one behavior — the accept/decline card produced by
 * the proposeGoalChange tool when the AI surfaces a coach-prepared propose_goal
 * task (weekly review, ahead of any strategy modifications). Lighter than a
 * proposed_strategy_modification: no triggers or plans, just the behavior's
 * goal. Acceptance is applied SERVER-SIDE (afterUserLogWrite) — the client only
 * flips data.status — so accepting reliably sets the goal on the behavior.
 */
export const proposedGoalChangeLogSchema = logBaseSchema.extend({
  type: z.literal("proposed_goal_change"),
  isDisplayable: z.literal(true),
  data: z.object({
    behaviorId: z.string().min(1),
    /** Name snapshot for rendering (the behavior may later be renamed). */
    behaviorName: z.string().optional(),
    title: z.string().min(1),
    summary: z.string().optional(),
    goal: goalSchema,
    status: z.enum(["pending", "accepted", "declined"]).default("pending"),
    /** The propose_goal session task this card realizes — resolved on respond. */
    sourceTaskId: z.string().optional(),
    acceptedAt: timestampSchema.optional(),
    declinedAt: timestampSchema.optional(),
    /** The goal replaced on acceptance, captured server-side for history. */
    previousGoal: goalSchema.optional(),
    /** Set server-side once the goal has actually been written to the behavior. */
    appliedAt: timestampSchema.optional(),
  }),
});

export type ProposedGoalChangeLog = z.infer<typeof proposedGoalChangeLogSchema>;
