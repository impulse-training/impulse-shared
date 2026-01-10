"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tacticLogSchema = exports.tacticResponseSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const tactic_1 = require("../tactic");
const base_1 = require("./base");
/** Response schema for tactic question steps - follows the same pattern as questionsLog */
exports.tacticResponseSchema = zod_1.default.object({
    responseType: zod_1.default.enum(["text", "slider1To10"]),
    value: zod_1.default.union([zod_1.default.string(), zod_1.default.number()]),
    formattedValue: zod_1.default.string(),
});
// Tactic Activity Log Schema
exports.tacticLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.default.literal("tactic"),
    isDisplayable: zod_1.default.boolean(),
    data: zod_1.default.object({
        tactic: tactic_1.tacticSchema,
        // If this tactic activity originated from displaying a plan, include the planId
        planId: zod_1.default.string().optional(),
        // total number of steps in the tactic at the time of logging
        stepCount: zod_1.default.number().int().nonnegative().optional(),
        // 0-based indexes of completed steps (progressive)
        completedStepIndexes: zod_1.default.array(zod_1.default.number().int().nonnegative()).optional(),
        // whether the tactic is fully completed (all steps done)
        completed: zod_1.default.boolean().optional(),
        // Optional response for question-type tactic steps
        response: exports.tacticResponseSchema.optional(),
    }),
});
