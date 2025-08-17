"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionLogSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
const responseSchema = zod_1.z.object({
    responseType: zod_1.z.enum(["text", "slider1To10", "recap"]),
    value: zod_1.z.any(),
    formattedValue: zod_1.z.string(),
    color: zod_1.z.string().optional(),
});
exports.questionLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("question"),
    // Question logs are always displayed in the UI
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        questionId: zod_1.z.string().optional(),
        // TODO: tighten this once ../question is migrated to Zod
        question: zod_1.z.any(),
        response: responseSchema.optional(),
    }),
});
