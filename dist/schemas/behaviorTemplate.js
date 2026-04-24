"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.behaviorTemplateBase = exports.behaviorTemplateSchema = exports.baselinePeriods = exports.trackingTypes = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../utils/timestampSchema");
exports.trackingTypes = ["counter", "timer", "scale"];
exports.baselinePeriods = ["daily", "weekly"];
// These are foundational attributes, and correspond to documents in a top-level behaviorTemplates
// collection. We then extend that schema to be the full behavior schema.
const behaviorTemplateBase = zod_1.z.object({
    name: zod_1.z.string(),
    trackingType: zod_1.z.enum(exports.trackingTypes),
    trackingUnit: zod_1.z.string().optional(),
    // Controls how the baseline/starting-point question is framed.
    // "weekly" asks "times per week" instead of the default daily metric.
    baselinePeriod: zod_1.z.enum(exports.baselinePeriods).optional(),
    // Display color for this behavior (hex string, e.g. "#C4362C")
    color: zod_1.z.string().optional(),
    // Alternative phrases/synonyms for this behavior name (e.g. ["porn", "adult content"] for
    // "Pornography"). Used to mask hidden behaviors when the AI uses variant wording in chat.
    synonyms: zod_1.z.array(zod_1.z.string()).optional(),
    recapQuestionSequence: zod_1.z.array(zod_1.z.string()).optional(),
    createdAt: timestampSchema_1.timestampSchema.optional(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
});
exports.behaviorTemplateBase = behaviorTemplateBase;
exports.behaviorTemplateSchema = behaviorTemplateBase.superRefine((val, ctx) => {
    if (val.trackingType === "counter" && !val.trackingUnit) {
        ctx.addIssue({
            code: zod_1.z.ZodIssueCode.custom,
            message: "Tracking unit is required when tracking type is 'counter'",
            path: ["trackingUnit"],
        });
    }
});
