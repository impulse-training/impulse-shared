"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedometerStepSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.pedometerStepSchema = base_1.baseStepSchema.extend({
    mode: zod_1.z.literal("pedometer"),
    targetSteps: zod_1.z.number().int().positive(),
});
