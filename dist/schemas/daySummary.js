"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.daySummarySchema = exports.goalComparisonEntrySchema = void 0;
exports.isValidDaySummary = isValidDaySummary;
const zod_1 = require("zod");
const objectOf_1 = require("../utils/objectOf");
const timestampSchema_1 = require("../utils/timestampSchema");
const behavior_1 = require("./behavior");
const log_1 = require("./log");
const supportGroupPermissions_1 = require("./supportGroupPermissions");
const outcomeEnum = zod_1.z.enum(["success", "partial", "setback"]);
/** Schema for a single goal comparison entry */
exports.goalComparisonEntrySchema = zod_1.z.object({
    goalLabel: zod_1.z.string(),
    unit: zod_1.z.string(),
    measured: zod_1.z.number(),
    targetValue: zod_1.z.number().optional(),
    status: zod_1.z.enum(["MET", "NOT_MET_FAIL", "UNSPECIFIED_FOR_DAY", "NO_GOAL"]),
});
exports.daySummarySchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    // dateString: z.string(),
    userId: zod_1.z.string(),
    impulseThreadOutcomesById: (0, objectOf_1.objectOf)(outcomeEnum),
    outcome: outcomeEnum.optional(),
    behaviorDataTotalByBehaviorId: (0, objectOf_1.objectOf)(log_1.behaviorTrackingDataSchema),
    behaviorsById: (0, objectOf_1.objectOf)(behavior_1.behaviorSchema).optional(),
    tacticsUsed: zod_1.z.array(zod_1.z.any()).default([]),
    summaryText: zod_1.z.string().default(""),
    supportGroupPermissionsById: (0, objectOf_1.optionalObjectOf)(supportGroupPermissions_1.supportGroupPermissionsSchema),
    sharedWithUserIds: zod_1.z.array(zod_1.z.string()),
    // Per-behavior goal comparison for the day
    goalComparisonByBehaviorId: zod_1.z
        .record(zod_1.z.string(), exports.goalComparisonEntrySchema)
        .optional(),
    // When all recap requirements are met (recap question answered + experiment questions if applicable)
    recapRequirementsMetAt: timestampSchema_1.timestampSchema.nullable(),
    // When the user explicitly marks the recap as complete (clicks "Finish Recap" or closes sheet)
    recapMarkedAsCompletedAt: timestampSchema_1.timestampSchema.optional(),
    // When the user confirms totals and starts the recap flow
    recapStartedAt: timestampSchema_1.timestampSchema.optional(),
    createdAt: timestampSchema_1.timestampSchema.optional(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
});
function isValidDaySummary(value) {
    return exports.daySummarySchema.safeParse(value).success;
}
