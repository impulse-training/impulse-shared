import { z } from "zod";
import { logBaseSchema } from "./base";

/**
 * The in-thread card for one revision of a strategy
 * (users/{uid}/strategies/{strategyId}). Deliberately thin: the strategy doc
 * is the source of truth, and the card opens it. Per-item accept / decline
 * happens on the strategy screen, next to the rationale and evidence, never
 * on this card. A newer revision supersedes the card for the previous one.
 *
 * Successor to proposed_strategy_modification, which stays for legacy docs.
 */
export const strategyProposalLogSchema = logBaseSchema.extend({
  type: z.literal("strategy_proposal"),
  isDisplayable: z.literal(true),
  data: z.object({
    strategyId: z.string().min(1),
    revision: z.number().int().positive(),
    /** Snapshots for rendering without fetching the strategy. */
    title: z.string().min(1),
    itemCount: z.number().int().nonnegative(),
    /** Items new or changed in this revision (all of them on revision 1). */
    changedItemCount: z.number().int().nonnegative(),
    status: z.enum(["open", "superseded"]).default("open"),
  }),
});

export type StrategyProposalLog = z.infer<typeof strategyProposalLogSchema>;
