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
    recommendedTactics: zod_1.z.array(exports.recommendedTacticSchema).optional(),
    suggestedPlan: exports.suggestedPlanSchema.optional(),
});
