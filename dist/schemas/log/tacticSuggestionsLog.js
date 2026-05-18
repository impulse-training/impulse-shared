"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tacticSuggestionsLogSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
const timestampSchema_1 = require("../../utils/timestampSchema");
const tacticSuggestionItemSchema = zod_1.z.object({
    theme: zod_1.z.string().min(1),
    guidance: zod_1.z.string().optional(),
    tacticId: zod_1.z.string().optional(),
    tactic: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).optional(),
    selectedAt: timestampSchema_1.timestampSchema.optional(),
});
exports.tacticSuggestionsLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("tactic_suggestions"),
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        taskId: zod_1.z.string().min(1),
        suggestions: zod_1.z.array(tacticSuggestionItemSchema).min(1),
    }),
});
