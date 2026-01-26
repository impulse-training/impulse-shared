"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.behaviorTrackingDataSchema = void 0;
const zod_1 = require("zod");
exports.behaviorTrackingDataSchema = zod_1.z.object({
    behaviorId: zod_1.z.string().optional(),
    behaviorName: zod_1.z.string().optional(),
    behaviorTrackingUnit: zod_1.z.string().optional(),
    trackingType: zod_1.z.enum(["counter", "timer"]).optional(),
    value: zod_1.z.number().optional(), // Count or time in seconds
    formattedValue: zod_1.z.string().optional(),
});
