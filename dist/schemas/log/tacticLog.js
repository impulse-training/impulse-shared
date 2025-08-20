"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tacticLogSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
// Tactic Activity Log Schema
exports.tacticLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("tactic_completed"),
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        tactic: zod_1.z.any(),
        // total number of steps in the tactic at the time of logging
        stepCount: zod_1.z.number().int().nonnegative().optional(),
        // ids of steps that have been completed so far (progressive)
        completedStepIds: zod_1.z.array(zod_1.z.string()).optional(),
        // whether the tactic is fully completed (all steps done)
        completed: zod_1.z.boolean().optional(),
    }),
});
