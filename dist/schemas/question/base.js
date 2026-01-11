"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionBaseSchema = questionBaseSchema;
const zod_1 = require("zod");
const constants_1 = require("../../constants");
const timestampSchema_1 = require("../../utils/timestampSchema");
function questionBaseSchema(type) {
    return zod_1.z.object({
        id: zod_1.z.string().optional(),
        createdAt: timestampSchema_1.timestampSchema.optional(),
        updatedAt: timestampSchema_1.timestampSchema.optional(),
        text: zod_1.z.string().optional(),
        textAfterResponse: zod_1.z.string().optional(),
        metricId: zod_1.z.string().optional(),
        lastAskedAt: timestampSchema_1.timestampSchema.optional(),
        lastAnsweredAt: timestampSchema_1.timestampSchema.optional(),
        numberOfAnswers: zod_1.z.number().optional(),
        isTemplate: zod_1.z.boolean().optional().default(false),
        isPinned: zod_1.z.boolean().optional(),
        responseType: zod_1.z.literal(type),
        scope: constants_1.questionScopeSchema,
    });
}
