"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.affirmationStepSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_1 = require("./base");
exports.affirmationStepSchema = base_1.baseStepSchema.extend({
    mode: zod_1.default.literal("affirmation"),
    // Use base text as a title/label for the step
    text: zod_1.default.string().min(1).default("Repeat aloud"),
    affirmationText: zod_1.default.string().min(1),
    repeatCount: zod_1.default.number().int().min(1).max(5).default(3),
});
