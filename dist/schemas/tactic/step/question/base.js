"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionStepBaseSchema = questionStepBaseSchema;
const zod_1 = __importDefault(require("zod"));
const timestampSchema_1 = require("../../../../utils/timestampSchema");
const base_1 = require("../base");
function questionStepBaseSchema(mode) {
    return base_1.baseStepSchema.extend({
        mode: zod_1.default.literal(mode),
        // Flatten question properties directly into the step schema
        id: zod_1.default.string().optional(),
        createdAt: timestampSchema_1.timestampSchema.optional(),
        updatedAt: timestampSchema_1.timestampSchema.optional(),
        text: zod_1.default.string().min(1), // The actual question content
    });
}
