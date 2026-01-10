"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.breathingStepSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_1 = require("./base");
exports.breathingStepSchema = base_1.baseStepSchema.extend({
    mode: zod_1.default.literal("breathing"),
    breathingPattern: zod_1.default.object({
        inhale: zod_1.default.number().int().positive(),
        hold: zod_1.default.number().int().nonnegative().optional(),
        exhale: zod_1.default.number().int().positive(),
    }),
    cycles: zod_1.default.number().int().positive().optional(),
});
