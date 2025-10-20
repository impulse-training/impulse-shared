"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.breathingLogSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.breathingLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("breathing"),
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        inhaleSeconds: zod_1.z.number().positive(),
        holdSeconds: zod_1.z.number().nonnegative(),
        exhaleSeconds: zod_1.z.number().positive(),
        cycles: zod_1.z.number().positive(),
        completedCycles: zod_1.z.number().nonnegative(),
        totalDurationSeconds: zod_1.z.number().positive(),
    }),
});
