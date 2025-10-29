"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.affirmationStepSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.affirmationStepSchema = base_1.baseStepSchema.extend({
    mode: zod_1.z.literal("affirmation"),
    // Use base text as a title/label for the step
    text: zod_1.z.string().min(1).default("Repeat aloud"),
    affirmationText: zod_1.z.string().min(1),
    repeatCount: zod_1.z.number().int().min(1).max(5).default(3),
});
