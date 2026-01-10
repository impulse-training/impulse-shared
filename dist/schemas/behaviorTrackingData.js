"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.behaviorTrackingDataSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.behaviorTrackingDataSchema = zod_1.default.object({
    behaviorId: zod_1.default.string(),
    behaviorName: zod_1.default.string(),
    behaviorTrackingUnit: zod_1.default.string().optional(),
    trackingType: zod_1.default.enum(["counter", "timer"]),
    value: zod_1.default.number(), // Count or time in seconds
    formattedValue: zod_1.default.string(),
});
