"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultStepSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.defaultStepSchema = base_1.baseStepSchema.extend({
    mode: zod_1.z.literal("default").optional(),
    text: zod_1.z.string().min(1),
    durationSeconds: zod_1.z.number().int().positive().optional(),
});
