"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.breathingLogSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_1 = require("./base");
exports.breathingLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.default.literal("breathing"),
    isDisplayable: zod_1.default.literal(true),
    data: zod_1.default.object({
        inhaleSeconds: zod_1.default.number().positive(),
        holdSeconds: zod_1.default.number().nonnegative(),
        exhaleSeconds: zod_1.default.number().positive(),
        cycles: zod_1.default.number().positive(),
        completedCycles: zod_1.default.number().nonnegative(),
        totalDurationSeconds: zod_1.default.number().positive(),
    }),
});
