"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionStepBaseSchema = questionStepBaseSchema;
const zod_1 = require("zod");
const timestampSchema_1 = require("../../../../utils/timestampSchema");
const base_1 = require("../base");
function questionStepBaseSchema(mode) {
    return base_1.baseStepSchema.extend({
        mode: zod_1.z.literal(mode),
        // Flatten question properties directly into the step schema
        id: zod_1.z.string().optional(),
        createdAt: timestampSchema_1.timestampSchema.optional(),
        updatedAt: timestampSchema_1.timestampSchema.optional(),
        text: zod_1.z.string().min(1), // The actual question content
    });
}
