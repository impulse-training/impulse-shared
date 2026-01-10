"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.daySummarySchema = exports.goalComparisonEntrySchema = void 0;
exports.isValidDaySummary = isValidDaySummary;
const zod_1 = __importDefault(require("zod"));
const objectOf_1 = require("../utils/objectOf");
const outcomes_1 = require("../utils/outcomes");
const timestampSchema_1 = require("../utils/timestampSchema");
const behavior_1 = require("./behavior");
const log_1 = require("./log");
const supportGroupPermissions_1 = require("./supportGroupPermissions");
const supportGroupSummary_1 = require("./utils/supportGroupSummary");
const outcomeEnum = outcomes_1.outcomeSchema;
/** Schema for a single goal comparison entry */
exports.goalComparisonEntrySchema = zod_1.default.object({
    goalLabel: zod_1.default.string(),
    unit: zod_1.default.string(),
    measured: zod_1.default.number(),
    targetValue: zod_1.default.number().optional(),
    status: zod_1.default.enum(["MET", "NOT_MET_FAIL", "UNSPECIFIED_FOR_DAY", "NO_GOAL"]),
});
exports.daySummarySchema = zod_1.default.object({
    id: zod_1.default.string().optional(),
    // dateString: z.string(),
    userId: zod_1.default.string(),
    impulseThreadOutcomesById: (0, objectOf_1.objectOf)(outcomeEnum),
    outcome: outcomeEnum.optional(),
    behaviorDataTotalByBehaviorId: (0, objectOf_1.objectOf)(log_1.behaviorTrackingDataSchema),
    behaviorsById: (0, objectOf_1.objectOf)(behavior_1.behaviorSchema).optional(),
    tacticsUsed: zod_1.default.array(zod_1.default.any()).default([]),
    summaryText: zod_1.default.string().nullable(),
    supportGroupSummariesById: (0, objectOf_1.objectOf)(supportGroupSummary_1.supportGroupSummarySchema),
    supportGroupPermissionsById: (0, objectOf_1.optionalObjectOf)(supportGroupPermissions_1.supportGroupPermissionsSchema),
    sharedWithUserIds: zod_1.default.array(zod_1.default.string()),
    // Per-behavior goal comparison for the day
    goalComparisonByBehaviorId: zod_1.default
        .record(zod_1.default.string(), exports.goalComparisonEntrySchema)
        .optional(),
    // When all recap requirements are met (recap question answered + experiment questions if applicable)
    recapRequirementsMetAt: timestampSchema_1.timestampSchema.nullable(),
    // When the user confirms totals and starts the recap flow
    recapStartedAt: timestampSchema_1.timestampSchema.optional(),
    recapCutoffTime: timestampSchema_1.timestampSchema.optional(),
    // Tracks which support groups have been notified about this day's recap
    supportGroupNotificationSentAtById: zod_1.default
        .record(zod_1.default.string(), timestampSchema_1.timestampSchema)
        .optional(),
    createdAt: timestampSchema_1.timestampSchema.optional(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
});
function isValidDaySummary(value) {
    return exports.daySummarySchema.safeParse(value).success;
}
