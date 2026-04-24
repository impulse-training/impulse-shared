"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.behaviorPatternsCacheSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../utils/timestampSchema");
const tagFrequencyRowSchema = zod_1.z.object({
    tag_group_name: zod_1.z.string(),
    option_label: zod_1.z.string(),
    session_count: zod_1.z.number(),
    pct_of_sessions: zod_1.z.number(),
});
const outcomeByTagRowSchema = zod_1.z.object({
    tag_group_name: zod_1.z.string(),
    option_label: zod_1.z.string(),
    total_sessions: zod_1.z.number(),
    acted_sessions: zod_1.z.number(),
    resisted_sessions: zod_1.z.number(),
    win_rate: zod_1.z.number(),
    struggle_rate: zod_1.z.number(),
});
const tagCombinationRowSchema = zod_1.z.object({
    tag_combination: zod_1.z.string(),
    session_count: zod_1.z.number(),
    win_rate: zod_1.z.number(),
});
const tagDrilldownRowSchema = zod_1.z.object({
    tag_group_id: zod_1.z.string(),
    tag_group_name: zod_1.z.string(),
    option_id: zod_1.z.string(),
    option_label: zod_1.z.string(),
    session_count: zod_1.z.number(),
    win_rate: zod_1.z.number(),
    cross_tags: zod_1.z.string(),
});
/**
 * Cached behavior pattern analytics data.
 * Collection: users/{userId}/behaviorPatternsCache/{behaviorId}
 *
 * The frontend subscribes to this document for instant rendering and bumps
 * `requestedAt` on mount. A backend trigger compares `requestedAt` vs
 * `fetchedAt` and refreshes from BigQuery when the cache is stale.
 */
exports.behaviorPatternsCacheSchema = zod_1.z.object({
    tagFrequency: zod_1.z.array(tagFrequencyRowSchema),
    struggles: zod_1.z.array(outcomeByTagRowSchema),
    strengths: zod_1.z.array(outcomeByTagRowSchema),
    combinations: zod_1.z.array(tagCombinationRowSchema),
    drilldown: zod_1.z.array(tagDrilldownRowSchema),
    totalSessions: zod_1.z.number(),
    /** Set by the frontend each time the screen is viewed */
    requestedAt: timestampSchema_1.timestampSchema,
    /** Set by the backend after a successful BigQuery refresh */
    fetchedAt: timestampSchema_1.timestampSchema.optional(),
    /** Set by the backend if the last refresh attempt failed; cleared on success */
    lastError: zod_1.z
        .object({ message: zod_1.z.string(), occurredAt: timestampSchema_1.timestampSchema })
        .nullable()
        .optional(),
});
