"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monthSummarySchema = exports.monthSummaryDayEntrySchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../utils/timestampSchema");
const dotStatusSchema = zod_1.z.enum(["full", "pastel"]);
exports.monthSummaryDayEntrySchema = zod_1.z.object({
    /** Whether dayTotalsConfirmedAt is non-null (day recap is confirmed) */
    confirmed: zod_1.z.boolean(),
    /** Per-behavior dot intensity: "full" (goal not met / acted on urge) or "pastel" (within goal / resisted) */
    dots: zod_1.z.record(zod_1.z.string(), dotStatusSchema),
});
exports.monthSummarySchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    userId: zod_1.z.string(),
    /** Month in "yyyy-MM" format */
    month: zod_1.z.string(),
    /** Per-day entries keyed by 2-digit day string ("01" through "31") */
    days: zod_1.z.record(zod_1.z.string(), exports.monthSummaryDayEntrySchema),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
});
