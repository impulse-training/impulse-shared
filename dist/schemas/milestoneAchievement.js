"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.milestoneProgressSchema = exports.milestoneAchievementSchema = exports.milestoneRungSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../utils/timestampSchema");
exports.milestoneRungSchema = zod_1.z.object({
    days: zod_1.z.number().int().positive(),
    label: zod_1.z.string(),
    isCustom: zod_1.z.boolean().optional(),
});
/**
 * Stored at users/{userId}/behaviors/{behaviorId}/milestoneAchievements/{achievementId}
 *
 * Append-only: once earned, an achievement is permanent — it persists through relapses.
 */
exports.milestoneAchievementSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    rungDays: zod_1.z.number().int().positive(),
    rungLabel: zod_1.z.string(),
    achievedAt: timestampSchema_1.timestampSchema,
    streakLengthAtAchievement: zod_1.z.number().int(),
    reflectionSessionId: zod_1.z.string().optional(),
    reflectionSummary: zod_1.z.string().optional(),
});
exports.milestoneProgressSchema = zod_1.z.object({
    lastAchievedRung: exports.milestoneRungSchema.nullable(),
    nextRung: exports.milestoneRungSchema.nullable(),
    currentStreakDays: zod_1.z.number().int(),
});
