import { z } from "zod";
import { logBaseSchema } from "./base";
import { changeStageSchema } from "../behavior";
import { timestampSchema } from "../../utils/timestampSchema";

/**
 * A proposal to move one behavior to a different Stage of Change, shown in a
 * recap when the user's tracking says their declared stage is out of date
 * (e.g. "Getting ready" while they are several days free). Produced by the
 * deterministic propose_change_stage task. Same resolution contract as
 * proposed_goal_change: the client only flips data.status, and acceptance is
 * applied SERVER-SIDE (afterUserLogWrite) so the stage reliably lands.
 */
export const proposedChangeStageLogSchema = logBaseSchema.extend({
  type: z.literal("proposed_change_stage"),
  isDisplayable: z.literal(true),
  data: z.object({
    behaviorId: z.string().min(1),
    /** Name snapshot for rendering (the behavior may later be renamed). */
    behaviorName: z.string().optional(),
    /** The declared stage when the card was written. Absent = never declared. */
    fromStage: changeStageSchema.optional(),
    toStage: changeStageSchema,
    title: z.string().min(1),
    /** The tracking facts behind the proposal, in the user's own terms. */
    evidence: z.string().min(1),
    status: z.enum(["pending", "accepted", "declined"]).default("pending"),
    /** The propose_change_stage session task this card realizes. */
    sourceTaskId: z.string().optional(),
    acceptedAt: timestampSchema.optional(),
    declinedAt: timestampSchema.optional(),
    /** Set server-side once the stage has actually been written to the behavior. */
    appliedAt: timestampSchema.optional(),
  }),
});

export type ProposedChangeStageLog = z.infer<typeof proposedChangeStageLogSchema>;
