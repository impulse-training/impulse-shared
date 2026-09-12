import { z } from "zod";
import { timestampSchema } from "../../utils/timestampSchema";
import { tacticModalitySchema, tacticPhaseSchema } from "../tactic/tactic";
import { logBaseSchema } from "./base";

/**
 * The OFFER of a choice between two tactics — the shape of every tactic
 * delivery during a live urge.
 *
 * Deliberately not a tactic log. A tactic log means the user is doing
 * something: it drives the card, the expanded overlay, plan progress and
 * effectiveness, and it is created the moment one of these options is picked.
 * Keeping the offer separate is what let "always two" arrive without touching
 * anything downstream of "the user started a tactic" — and it keeps an
 * unanswered offer distinguishable from a tactic nobody finished, which a
 * single log with a `completed` flag could never express.
 *
 * `options` is a two-tuple, not an array, so "exactly two, never one and never
 * three" is enforced by the schema and checked by the daily validator rather
 * than asked for in a prompt.
 */
export const tacticContrastAxisSchema = z.enum([
  "modality",
  "phase",
  "effort",
  "ranking",
]);
export type TacticContrastAxis = z.infer<typeof tacticContrastAxisSchema>;

/**
 * One side of the choice. Denormalised so the card, the prompt and any later
 * analysis read the offer as it was MADE — a tactic retitled or reclassified
 * next month must not rewrite what the user was shown tonight.
 */
export const tacticChoiceOptionSchema = z.object({
  tacticId: z.string(),
  title: z.string(),
  description: z.string().optional(),
  tacticRefPath: z.string().optional(),
  firstStepText: z.string().optional(),
  /** One-line rendering of the tactic's per-user understanding. */
  forUser: z.string().optional(),
  // `.catch(undefined)` on both: a stray legacy value degrades this option to
  // unclassified rather than failing the log's parse and hiding the offer.
  modality: tacticModalitySchema.optional().catch(undefined),
  phase: tacticPhaseSchema.optional().catch(undefined),
  /** True when this option is a step of the user's own assigned plan. */
  isPlanStep: z.boolean().optional(),
});

export type TacticChoiceOption = z.infer<typeof tacticChoiceOptionSchema>;

export const tacticChoiceLogSchema = logBaseSchema.extend({
  type: z.literal("tactic_choice"),
  isDisplayable: z.literal(true),
  data: z.object({
    /** Exactly two, ordered [anchor, alternative]. */
    options: z.tuple([tacticChoiceOptionSchema, tacticChoiceOptionSchema]),
    /**
     * What actually separates the two. "ranking" means nothing did beyond
     * score, which is a pair that looks like a choice without being one — the
     * rate of it is how thin modality coverage shows up in reporting.
     */
    contrastAxis: tacticContrastAxisSchema,
    /** Set when the anchor came from the user's assigned plan. */
    planId: z.string().optional(),
    /**
     * Which one they went with. Absent while the offer is live — and an offer
     * that stays unanswered is a legitimate end state, not a missing field.
     */
    chosenTacticId: z.string().optional(),
    chosenAt: timestampSchema.optional(),
    /**
     * How the choice arrived. "tap" is the card; "spoken" and "typed" are the
     * user saying which one, which only ever gets recorded off a real user
     * message (see chooseOfferedTactic's guard) — a pick nobody made must not
     * be indistinguishable from one they did.
     */
    chosenVia: z.enum(["tap", "spoken", "typed"]).optional(),
    /** The tactic log the pick produced — the commitment this offer became. */
    tacticLogId: z.string().optional(),
    /**
     * "Neither of these" — a first-class answer, not a refusal to answer.
     *
     * It is the most informative thing the user can tell us: both options were
     * wrong, which is a signal about the match rather than about them. So it is
     * recorded, and it always leads somewhere. What it leads to is
     * deterministic, not a judgement call the model makes in the moment (see
     * declineOutcome).
     */
    declinedBoth: z.boolean().optional(),
    declinedAt: timestampSchema.optional(),
    /**
     * Where "neither" went.
     *
     * - "reshuffled": a fresh pair was offered, with all four seen tactics
     *   excluded. This is the first "neither" in a session.
     * - "voiceOffered": a call was offered (or the coach simply kept talking,
     *   if one was already connected). Reached on the SECOND "neither", and
     *   whenever the pool can no longer produce a fresh pair. Two rejected
     *   pairs means the matching is wrong, and a third guess is worth less
     *   than a conversation.
     */
    declineOutcome: z.enum(["reshuffled", "voiceOffered"]).optional(),
    /** Why neither fit, in the user's own words where they gave one. The most
     * useful field on this log for working out what actually suits them. */
    declineReason: z.string().optional(),
    /** The choice log that replaced this one, when the outcome was a reshuffle. */
    replacedByLogId: z.string().optional(),
  }),
});

export type TacticChoiceLog = z.infer<typeof tacticChoiceLogSchema>;
