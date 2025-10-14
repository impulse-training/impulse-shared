"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBehavior = exports.behaviorSchema = exports.behaviorTemplateSchema = exports.trackingTypes = void 0;
const zod_1 = require("zod");
const constants_1 = require("../constants");
const documentReferenceSchema_1 = require("../utils/documentReferenceSchema");
const timestampSchema_1 = require("../utils/timestampSchema");
const goal_1 = require("./goal");
const behaviorTrackingData_1 = require("./behaviorTrackingData");
exports.trackingTypes = ["counter", "timer"];
// These are foundational attributes, and correspond to documents in a top-level behaviorTemplates
// collection. We then extend that schema to be the full behavior schema.
const behaviorTemplateBase = zod_1.z.object({
    name: zod_1.z.string(),
    category: constants_1.categorySchema,
    hasQuestions: zod_1.z.boolean().optional(),
    trackingType: zod_1.z.enum(exports.trackingTypes),
    trackingUnit: zod_1.z.string().optional(),
    createdAt: timestampSchema_1.timestampSchema.optional(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
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
exports.behaviorSchema = behaviorTemplateBase
    .extend({
    id: zod_1.z.string().optional(),
    description: zod_1.z.string(),
    ordinal: zod_1.z.number().default(0),
    benefits: zod_1.z.array(zod_1.z.string()),
    drawbacks: zod_1.z.array(zod_1.z.string()),
    goal: goal_1.goalSchema.optional(),
    lastTrackedAt: timestampSchema_1.timestampSchema.optional(),
    tactics: zod_1.z.array(documentReferenceSchema_1.documentReferenceSchema).optional(),
    initialUsage: behaviorTrackingData_1.behaviorTrackingDataSchema.optional(),
    hidden: zod_1.z.boolean().optional().default(false),
    impulseQuestions: zod_1.z.array(documentReferenceSchema_1.documentReferenceSchema).optional(),
    debriefQuestions: zod_1.z
        .object({
        success: zod_1.z.array(documentReferenceSchema_1.documentReferenceSchema),
        setback: zod_1.z.array(documentReferenceSchema_1.documentReferenceSchema),
    })
        .optional(),
})
    .superRefine((val, ctx) => {
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
