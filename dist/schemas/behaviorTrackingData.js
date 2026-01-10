"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.behaviorTrackingDataSchema = void 0;
const zod_1 = require("zod");
exports.behaviorTrackingDataSchema = zod_1.z.object({
    behaviorId: zod_1.z.string(),
    behaviorName: zod_1.z.string(),
    behaviorTrackingUnit: zod_1.z.string().optional(),
    trackingType: zod_1.z.enum(["counter", "timer"]),
    value: zod_1.z.number(), // Count or time in seconds
    formattedValue: zod_1.z.string(),
});
