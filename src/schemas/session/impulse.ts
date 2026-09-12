import { z } from "zod";
import { documentReferenceSchema } from "../../utils/documentReferenceSchema";
import { timestampSchema } from "../../utils/timestampSchema";
import { planWithIdSchema } from "../plan";
import { tacticModalitySchema, tacticPhaseSchema } from "../tactic/tactic";
import { sessionBaseSchema } from "./base";
import { sessionPhaseSchema } from "./phase";

export const recommendedTacticSchema = z.object({
  tacticId: z.string(),
  title: z.string(),
  description: z.string().optional(),
  // Denormalised copy of the tactic's phase. `.catch(undefined)` keeps a stray
  // legacy value from failing the whole-session safeParse used by the
  // `isImpulseSession` type guard.
  phase: tacticPhaseSchema.optional().catch(undefined),
  // Fit metadata denormalised alongside phase, because the pair of options the
  // impulse moment offers is chosen from this pool and has to be able to tell
  // two tactics apart WITHOUT refetching each one mid-turn. `modality` is the
  // axis that carries the choice ("a movement one, or a reflection one"); the
  // rest are the ladder selectTacticPair falls back through.
  modality: tacticModalitySchema.optional().catch(undefined),
  effort: z.enum(["low", "medium", "high"]).optional().catch(undefined),
  worksAnywhere: z.boolean().optional(),
  // A session-ending tactic (turn the phone off) is only ever the alternative,
  // never the default the user has to opt out of.
  completionTrigger: z.enum(["device-restart"]).optional().catch(undefined),
  firstStepText: z.string().optional(),
  tacticRefPath: z.string().optional(),
  /** One-line rendering of the tactic's per-user understanding (note +
   * avoidWhen), denormalised at extraction time for prompt display. */
  forUser: z.string().optional(),
});

export type RecommendedTactic = z.infer<typeof recommendedTacticSchema>;

/**
 * What the impulse moment will deliver when the conversation reaches the point
 * of doing something: the tactic the user already agreed to for this
 * situation, or a choice of two.
 *
 * Note what this is NOT: a decision to present. The conversation still owns
 * WHEN — that judgement is the model's and is read from the transcript after
 * the fact, never inferred from state. This only makes the answer ready.
 */
export const preparedNextSchema = z.object({
  kind: z.enum(["agreement", "choice"]),
  /** One entry for an agreement, exactly two for a choice. */
  options: z.array(recommendedTacticSchema).min(1).max(2),
  contrastAxis: z
    .enum(["modality", "phase", "effort", "ranking"])
    .optional()
    .catch(undefined),
  /** Set when the offer came from the user's own plan or agreement. */
  planId: z.string().optional(),
  /** The situation the agreement was made for, for the coach's one-liner. */
  agreementSituation: z.string().optional(),
  /** Where the agreement lives, so honouring it can be counted. */
  agreementSource: z.enum(["trigger", "behavior"]).optional(),
  agreementSourceId: z.string().optional(),
  /** What had been offered or completed when this was worked out. A mismatch
   * with the session's current spend is what marks it stale. */
  spentTacticIds: z.array(z.string()).default([]),
  preparedAt: timestampSchema,
});

export type PreparedNext = z.infer<typeof preparedNextSchema>;

/**
 * An ENGINE-MATCHED plan for this session — the backend saying "this is a good
 * plan, guide the user through it". Invisible to the user: its tactics are
 * delivered inline one `suggestTactic` card at a time (see
 * `advanceToNextPlanTactic`), never through the plan sheet and never as a
 * "Plan assigned" card.
 *
 * Deliberately NOT a `plans` log — user-owned plans (source trigger/behavior)
 * are the only plans logs, and they are what the plan sheet renders. Keeping
 * the engine plan as session state is what makes it impossible to render it as
 * a committed plan. The plan is embedded (with its `tacticsByPath`) so readers
 * need no extra fetch, mirroring how plans logs denormalise.
 */
export const suggestedPlanSchema = z.object({
  planId: z.string(),
  plan: planWithIdSchema,
  source: z.enum(["tags", "improvised"]),
  matchedAt: timestampSchema,
});

export type SuggestedPlan = z.infer<typeof suggestedPlanSchema>;

export const impulseSessionSchema = sessionBaseSchema.extend({
  type: z.literal("impulse"),
  behaviorDocs: z.array(documentReferenceSchema),
  debriefAfter: timestampSchema.optional(),
  debriefBefore: timestampSchema.optional(),
  debriefUrgeLogInsertedAt: timestampSchema.nullable().optional(),
  actedOnUrge: z.boolean().nullable().optional(), // true = acted, false = resisted, null/undefined = not answered
  mostHelpfulTacticId: z.string().nullable().optional(),
  debriefNote: z.string().nullable().optional(),
  generatedPlanId: z.string().optional(),
  // Protocol phase the user is currently in. Drives how getGptPayload renders
  // context for tactic/behavior logs so the AI grounds its responses correctly.
  phase: sessionPhaseSchema.optional(),
  hasScheduledCheckIn: z.boolean().optional(),
  // Stamped by setSessionTags when the session's resolved user-owned plan is
  // stale (planIsStale), so every later prompt build frames the plan as an
  // option among many rather than the script.
  planStale: z.boolean().optional(),
  // Which user-owned plan setSessionTags resolved for this session - lets
  // syncPlanEffectiveness record an "offered" outcome even when the plan was
  // never started (fatigue counts ignored offers).
  resolvedPlanId: z.string().optional(),
  recommendedTactics: z.array(recommendedTacticSchema).optional(),
  /**
   * The next offer, worked out AHEAD of being asked for.
   *
   * Resolving what to deliver touches the session's choice logs, its plan, the
   * user's agreements, their library and the catalog — about ten round trips,
   * several of them sequential. Paying that inside a tool call means paying it
   * in the middle of a sentence, which on a call is a silence the user sits
   * through mid-urge.
   *
   * So it is computed whenever the picture changes (the record judge
   * establishing context, an offer being consumed) and read back when asked
   * for. This is a CACHE: `offerNext` still validates it against what the
   * session has since spent and recomputes if it has gone stale, so a wrong
   * prepared offer can only cost latency, never correctness.
   */
  preparedNext: preparedNextSchema.optional(),
  suggestedPlan: suggestedPlanSchema.optional(),
  /**
   * Set at debrief resolution when this session qualifies for the
   * protect_next_window arc — resisted-path containment (resisted outcome,
   * user opted in, daily cap not spent; see
   * maybeMarkProtectNextWindowEligible). Acted-on urges take the other
   * containment path (contain_lapse) and never set this. Stamped on the
   * session rather than read live from userData so tool availability and the
   * post-debrief prompt stay synchronous, deterministic per session, and
   * byte-identical for everyone the feature is off for.
   */
  protectNextWindowEligible: z.boolean().optional(),
  /**
   * Presentation state of the user-owned plan the engine matched for this
   * session (the plans log the plan sheet renders).
   *
   * - "pending": the plan is resolved and its plans log exists, but the
   *   conversation has not presented it yet — the client keeps the sheet
   *   collapsed with a subtle indication. Written by setSessionTags when a
   *   user-owned match lands via the conversational thread, so the model can
   *   spend a beat or two understanding the moment before pointing at the
   *   plan (exploration is part of the intervention, not a delay before it).
   * - "presented": the plan has been surfaced — by the model's explicit
   *   presentation act (offerRecommendedTactic) or by the user expanding the
   *   sheet themselves. The client shows the sheet expanded.
   * - absent: legacy sessions and non-conversational paths (the client's own
   *   tag bar): the sheet behaves as it always has (shown on plans log).
   *
   * Presentation is a UI fact set by the act itself — never inferred from
   * the transcript (see the protect_next_window post-mortem for why).
   */
  planPresentation: z.enum(["pending", "presented"]).optional(),
  /**
   * Set by the client when the impulse button starts a FRESH session instead
   * of reopening this one, because the user never engaged with it (opened it
   * and backed out — see impulseSessionWasEngaged in impulse-native). The
   * newer session owns the moment from here: taskProcessDebriefUrge skips a
   * superseded session, so an abandoned open doesn't produce a second "did
   * you act on it?" prompt beside the live one.
   */
  supersededBySessionId: z.string().optional(),
});

export type ImpulseSession = z.infer<typeof impulseSessionSchema>;
