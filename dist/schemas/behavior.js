"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBehavior = exports.behaviorSchema = exports.behaviorTemplateSchema = exports.categorySchema = exports.trackingTypes = void 0;
const zod_1 = require("zod");
const constants_1 = require("../constants");
const utils_1 = require("../utils");
exports.trackingTypes = ["counter", "timer"];
// Use the category keys from our constants
const categoryKeys = Object.keys(constants_1.BEHAVIOR_CATEGORIES);
exports.categorySchema = zod_1.z.custom((val) => categoryKeys.includes(val));
// We're using simple string arrays for benefits and drawbacks
const goalSchema = zod_1.z.object({
    type: zod_1.z.enum(["greaterThan", "lessThanOrEqualTo"]),
    target: zod_1.z.number(),
});
// These are foundational attributes, and correspond to documents in a top-level behaviorTemplates
// collection. We then extend that schema to be the full behavior schema.
const behaviorTemplateBase = zod_1.z.object({
    name: zod_1.z.string(),
    category: exports.categorySchema,
    hasQuestions: zod_1.z.boolean().optional(),
    trackingType: zod_1.z.enum(exports.trackingTypes),
    trackingUnit: zod_1.z.string().optional(),
    createdAt: utils_1.timestampSchema.optional(),
    updatedAt: utils_1.timestampSchema.optional(),
});
exports.behaviorTemplateSchema = behaviorTemplateBase.superRefine((val, ctx) => {
    if (val.trackingType === "counter" && !val.trackingUnit) {
        ctx.addIssue({
            code: zod_1.z.ZodIssueCode.custom,
            message: "Tracking unit is required when tracking type is 'counter'",
            path: ["trackingUnit"],
        });
    }
});
// These are stored at the user-level, as in, users/$userId/behaviors/$behaviorId
exports.behaviorSchema = behaviorTemplateBase.extend({
    id: zod_1.z.string().optional(),
    description: zod_1.z.string(),
    ordinal: zod_1.z.number().default(0),
    benefits: zod_1.z.array(zod_1.z.string()),
    drawbacks: zod_1.z.array(zod_1.z.string()),
    goal: goalSchema.optional(),
    lastTrackedAt: utils_1.timestampSchema.optional(),
}).superRefine((val, ctx) => {
    if (val.trackingType === "counter" && !val.trackingUnit) {
        ctx.addIssue({
            code: zod_1.z.ZodIssueCode.custom,
            message: "Tracking unit is required when tracking type is 'counter'",
            path: ["trackingUnit"],
        });
    }
});
const isBehavior = (value) => exports.behaviorSchema.safeParse(value).success;
exports.isBehavior = isBehavior;
