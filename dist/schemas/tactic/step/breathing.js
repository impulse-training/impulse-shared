"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.breathingStepSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.breathingStepSchema = base_1.baseStepSchema.extend({
    mode: zod_1.z.literal("breathing"),
    breathingPattern: zod_1.z.object({
        inhale: zod_1.z.number().int().positive(),
        hold: zod_1.z.number().int().nonnegative().optional(),
        exhale: zod_1.z.number().int().positive(),
    }),
    cycles: zod_1.z.number().int().positive().optional(),
});
