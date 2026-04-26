"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.behaviorTrackingDataSchema = void 0;
const zod_1 = require("zod");
exports.behaviorTrackingDataSchema = zod_1.z.object({
    behaviorId: zod_1.z.string().optional(),
    behaviorName: zod_1.z.string().optional(),
    behaviorTrackingUnit: zod_1.z.string().optional(),
    trackingType: zod_1.z.enum(["counter", "timer", "scale"]).optional(),
    // Raw behaviour logs: seconds for timer, count for counter, level for scale.
    // daySummary.behaviorDataTotalByBehaviorId: MINUTES for timer (canonical).
    value: zod_1.z.number().optional(),
    formattedValue: zod_1.z.string().optional(),
    // Period for the baseline value (e.g. "3 times per week" vs "30min per day")
    period: zod_1.z.enum(["daily", "weekly"]).optional(),
});
