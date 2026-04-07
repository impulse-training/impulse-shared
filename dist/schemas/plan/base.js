"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.planIndicationSchema = exports.planTagIndicationSchema = void 0;
exports.planBaseSchema = planBaseSchema;
const zod_1 = require("zod");
const documentReferenceSchema_1 = require("../../utils/documentReferenceSchema");
const timestampSchema_1 = require("../../utils/timestampSchema");
exports.planTagIndicationSchema = zod_1.z.object({
    // Tag group name (e.g. "emotion") matched by label so shared plans can work
    // across users with different Firestore tag-group IDs.
    tagGroupName: zod_1.z.string(),
    optionLabels: zod_1.z.array(zod_1.z.string()).min(1),
    weight: zod_1.z.number(),
});
exports.planIndicationSchema = zod_1.z.object({
    tags: zod_1.z.array(exports.planTagIndicationSchema).optional(),
    behaviorTemplateNames: zod_1.z.array(zod_1.z.string().min(1)).optional(),
});
function planBaseSchema(type) {
    return zod_1.z.object({
        id: zod_1.z.string().optional(),
        name: zod_1.z.string(),
        description: zod_1.z.string().optional(),
        type: zod_1.z.literal(type),
        ordinal: zod_1.z.number().optional(),
        isTemplate: zod_1.z.boolean().optional(),
        summary: zod_1.z.string().optional(),
        tactics: zod_1.z.array(documentReferenceSchema_1.documentReferenceSchema),
        // Pre-fetched tactics data for efficient rendering (loosely typed for now)
        tacticsByPath: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).optional(),
        questions: zod_1.z.array(documentReferenceSchema_1.documentReferenceSchema).optional().default([]),
        // Weighted tag affinities for plan matching
        // tagGroupId → { optionId → weight (0-1) }
        // e.g. { "emotionGroupId": { "anxious": 0.9, "stressed": 0.7 }, "activityGroupId": { "waiting": 0.6 } }
        tags: zod_1.z
            .record(zod_1.z.string(), zod_1.z.record(zod_1.z.string(), zod_1.z.number()))
            .optional(),
        // Cross-user affinities for shared plans. These use human-readable labels
        // rather than user-specific Firestore IDs.
        indications: exports.planIndicationSchema.optional(),
        isGenerated: zod_1.z.boolean().optional(),
        generationSource: zod_1.z.enum(["impulse_debrief"]).optional(),
        generationSignature: zod_1.z.string().optional(),
        generatedFromTacticIds: zod_1.z.array(zod_1.z.string()).optional(),
        generatedFromSessionCount: zod_1.z.number().int().nonnegative().optional(),
        // Cross-user effectiveness counters (incremented atomically on shared plan docs)
        numberOfUses: zod_1.z.number().int().nonnegative().optional(),
        numberOfSuccesses: zod_1.z.number().int().nonnegative().optional(),
        numberOfSetbacks: zod_1.z.number().int().nonnegative().optional(),
        lastUsedAt: timestampSchema_1.timestampSchema.optional(),
        createdAt: timestampSchema_1.timestampSchema.optional(),
        updatedAt: timestampSchema_1.timestampSchema.optional(),
        deletedAt: timestampSchema_1.timestampSchema.optional(),
    });
}
