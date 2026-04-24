"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userPlanEffectivenessSchema = exports.planEffectivenessSchema = exports.planEffectivenessSessionOutcomeSchema = void 0;
const zod_1 = require("zod");
const documentReferenceSchema_1 = require("../utils/documentReferenceSchema");
/**
 * Represents the outcome data for a single session where a plan was used.
 */
exports.planEffectivenessSessionOutcomeSchema = zod_1.z.object({
    behaviorDocs: zod_1.z.array(documentReferenceSchema_1.documentReferenceSchema),
    started: zod_1.z.boolean(),
    completed: zod_1.z.boolean(),
    actedOnUrge: zod_1.z.boolean().nullable().optional(),
});
/**
 * PlanEffectiveness document schema.
 * Collection: users/{userId}/planEffectiveness/{planId}
 *
 * Tracks how effective a plan has been across multiple sessions/impulse moments.
 */
exports.planEffectivenessSchema = zod_1.z.object({
    planId: zod_1.z.string(),
    outcomesBySession: zod_1.z.record(zod_1.z.string(), exports.planEffectivenessSessionOutcomeSchema),
});
/**
 * UserPlanEffectiveness document schema.
 * Document: users/{userId}/userPlanEffectiveness/aggregate
 *
 * Aggregates all planEffectiveness data for a user, keyed by planId.
 * This allows efficient subscription to all plan effectiveness data in one document.
 */
exports.userPlanEffectivenessSchema = zod_1.z.object({
    byPlanId: zod_1.z.record(zod_1.z.string(), exports.planEffectivenessSchema),
});
