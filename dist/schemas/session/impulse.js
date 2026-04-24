"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.impulseSessionSchema = void 0;
const zod_1 = require("zod");
const documentReferenceSchema_1 = require("../../utils/documentReferenceSchema");
const timestampSchema_1 = require("../../utils/timestampSchema");
const base_1 = require("./base");
const phase_1 = require("./phase");
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
});
