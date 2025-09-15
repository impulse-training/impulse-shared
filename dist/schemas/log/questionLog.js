"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionLogSchema = void 0;
const zod_1 = require("zod");
const question_1 = require("../question");
const base_1 = require("./base");
const responseSchema = zod_1.z.object({
    responseType: zod_1.z.enum(["text", "shortText", "emotion", "slider1To10", "recap"]),
    value: zod_1.z.union([zod_1.z.any(), zod_1.z.array(zod_1.z.any())]), // Support both single values and arrays
    formattedValue: zod_1.z.string(),
    color: zod_1.z.string().optional(),
});
exports.questionLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("question"),
    // Question logs are always displayed in the UI
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        questionId: zod_1.z.string().optional(),
        question: question_1.questionSchema,
        response: responseSchema.optional(),
    }),
});
