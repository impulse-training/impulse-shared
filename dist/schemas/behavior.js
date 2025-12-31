"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBehavior = exports.behaviorSchema = exports.behaviorTemplateSchema = exports.trackingTypes = void 0;
const zod_1 = require("zod");
const documentReferenceSchema_1 = require("../utils/documentReferenceSchema");
const timestampSchema_1 = require("../utils/timestampSchema");
const goal_1 = require("./goal");
const behaviorTrackingData_1 = require("./behaviorTrackingData");
const behaviorTemplate_1 = require("./behaviorTemplate");
const behaviorTopic_1 = require("./behaviorTopic");
// Re-export for backward compatibility
var behaviorTemplate_2 = require("./behaviorTemplate");
Object.defineProperty(exports, "trackingTypes", { enumerable: true, get: function () { return behaviorTemplate_2.trackingTypes; } });
var behaviorTemplate_3 = require("./behaviorTemplate");
Object.defineProperty(exports, "behaviorTemplateSchema", { enumerable: true, get: function () { return behaviorTemplate_3.behaviorTemplateSchema; } });
// These are stored at the user-level, as in, users/$userId/behaviors/$behaviorId
exports.behaviorSchema = behaviorTemplate_1.behaviorTemplateBase
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
    // Reference to the behavior topic (e.g., "substances", "digital-screen-use")
    // Used for matching users to support groups with similar focus areas
    behaviorTopicId: behaviorTopic_1.behaviorTopicIdSchema.optional(),
    // Questions to ask during impulse tracking
    impulseQuestions: zod_1.z.array(documentReferenceSchema_1.documentReferenceSchema).optional(),
    // Questions to ask during debrief (success/setback)
    debriefQuestions: zod_1.z
        .object({
        success: zod_1.z.array(documentReferenceSchema_1.documentReferenceSchema).optional(),
        setback: zod_1.z.array(documentReferenceSchema_1.documentReferenceSchema).optional(),
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
