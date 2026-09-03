"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.impulseSessionSchema = exports.suggestedPlanSchema = exports.recommendedTacticSchema = void 0;
const zod_1 = require("zod");
const documentReferenceSchema_1 = require("../../utils/documentReferenceSchema");
const timestampSchema_1 = require("../../utils/timestampSchema");
const plan_1 = require("../plan");
const tactic_1 = require("../tactic/tactic");
const base_1 = require("./base");
const phase_1 = require("./phase");
exports.recommendedTacticSchema = zod_1.z.object({
    tacticId: zod_1.z.string(),
    title: zod_1.z.string(),
    description: zod_1.z.string().optional(),
    // Denormalised copy of the tactic's phase. `.catch(undefined)` keeps a stray
    // legacy value from failing the whole-session safeParse used by the
    // `isImpulseSession` type guard.
    phase: tactic_1.tacticPhaseSchema.optional().catch(undefined),
    firstStepText: zod_1.z.string().optional(),
    tacticRefPath: zod_1.z.string().optional(),
    /** One-line rendering of the tactic's per-user understanding (note +
     * avoidWhen), denormalised at extraction time for prompt display. */
    forUser: zod_1.z.string().optional(),
});
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
exports.suggestedPlanSchema = zod_1.z.object({
    planId: zod_1.z.string(),
    plan: plan_1.planWithIdSchema,
    source: zod_1.z.enum(["tags", "improvised"]),
    matchedAt: timestampSchema_1.timestampSchema,
});
exports.impulseSessionSchema = base_1.sessionBaseSchema.extend({
    type: zod_1.z.literal("impulse"),
    behaviorDocs: zod_1.z.array(documentReferenceSchema_1.documentReferenceSchema),
    debriefAfter: timestampSchema_1.timestampSchema.optional(),
    debriefBefore: timestampSchema_1.timestampSchema.optional(),
    debriefUrgeLogInsertedAt: timestampSchema_1.timestampSchema.nullable().optional(),
    actedOnUrge: zod_1.z.boolean().nullable().optional(), // true = acted, false = resisted, null/undefined = not answered
    mostHelpfulTacticId: zod_1.z.string().nullable().optional(),
    debriefNote: zod_1.z.string().nullable().optional(),
    generatedPlanId: zod_1.z.string().optional(),
    // Protocol phase the user is currently in. Drives how getGptPayload renders
    // context for tactic/behavior logs so the AI grounds its responses correctly.
    phase: phase_1.sessionPhaseSchema.optional(),
    hasScheduledCheckIn: zod_1.z.boolean().optional(),
    // Stamped by setSessionTags when the session's resolved user-owned plan is
    // stale (planIsStale), so every later prompt build frames the plan as an
    // option among many rather than the script.
    planStale: zod_1.z.boolean().optional(),
    // Which user-owned plan setSessionTags resolved for this session - lets
    // syncPlanEffectiveness record an "offered" outcome even when the plan was
    // never started (fatigue counts ignored offers).
    resolvedPlanId: zod_1.z.string().optional(),
    recommendedTactics: zod_1.z.array(exports.recommendedTacticSchema).optional(),
    suggestedPlan: exports.suggestedPlanSchema.optional(),
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
    protectNextWindowEligible: zod_1.z.boolean().optional(),
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
    planPresentation: zod_1.z.enum(["pending", "presented"]).optional(),
    /**
     * Set by the client when the impulse button starts a FRESH session instead
     * of reopening this one, because the user never engaged with it (opened it
     * and backed out — see impulseSessionWasEngaged in impulse-native). The
     * newer session owns the moment from here: taskProcessDebriefUrge skips a
     * superseded session, so an abandoned open doesn't produce a second "did
     * you act on it?" prompt beside the live one.
     */
    supersededBySessionId: zod_1.z.string().optional(),
});
