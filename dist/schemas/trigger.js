"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTrigger = exports.triggerSchema = exports.triggerKindSchema = exports.timeBandSchema = exports.locationTypeSchema = exports.socialContextSchema = exports.triggerKinds = exports.timeBands = exports.locationTypes = exports.socialContexts = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../utils/timestampSchema");
// Supporting enums
exports.socialContexts = [
    "alone",
    "with_partner",
    "with_friends",
    "public",
    "work",
];
exports.locationTypes = [
    "home",
    "bedroom",
    "workplace",
    "commute",
    "outdoors",
    "gym",
    "other",
];
exports.timeBands = [
    "late_night",
    "morning",
    "afternoon",
    "evening",
];
exports.triggerKinds = ["situation"];
// Zod schemas for enums
exports.socialContextSchema = zod_1.z.enum(exports.socialContexts);
exports.locationTypeSchema = zod_1.z.enum(exports.locationTypes);
exports.timeBandSchema = zod_1.z.enum(exports.timeBands);
exports.triggerKindSchema = zod_1.z.enum(exports.triggerKinds);
// Usage statistics schema
const usageSchema = zod_1.z.object({
    totalMoments: zod_1.z.number().optional(),
    lastUsedAt: timestampSchema_1.timestampSchema.optional().nullable(),
    "30dCount": zod_1.z.number().optional(),
});
// Context schema
const contextSchema = zod_1.z.object({
    social: exports.socialContextSchema.optional(),
    locationType: exports.locationTypeSchema.optional(),
    timeBand: exports.timeBandSchema.optional(),
    tags: zod_1.z.array(zod_1.z.string()).optional(),
});
// Facets schema
const facetsSchema = zod_1.z.object({
    situation: zod_1.z.string().optional(),
    emotion: zod_1.z.string().optional(),
    physio: zod_1.z.string().optional(),
    cognitive: zod_1.z.string().optional(),
});
// Main trigger schema
exports.triggerSchema = zod_1.z.object({
    id: zod_1.z.string(),
    uid: zod_1.z.string(),
    title: zod_1.z.string(),
    kind: exports.triggerKindSchema,
    facets: facetsSchema,
    context: contextSchema.optional(),
    createdAt: timestampSchema_1.timestampSchema,
    updatedAt: timestampSchema_1.timestampSchema,
    // Quick denorm for routing
    defaultPlanId: zod_1.z.string().optional(),
    activeExperimentId: zod_1.z.string().optional().nullable(),
    usage: usageSchema,
});
// Type guard function
const isTrigger = (value) => exports.triggerSchema.safeParse(value).success;
exports.isTrigger = isTrigger;
