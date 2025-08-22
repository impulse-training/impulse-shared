"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tacticLogSchema = void 0;
const zod_1 = require("zod");
const tactic_1 = require("../tactic");
const base_1 = require("./base");
// Tactic Activity Log Schema
exports.tacticLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("tactic"),
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        tactic: tactic_1.tacticSchema,
        // total number of steps in the tactic at the time of logging
        stepCount: zod_1.z.number().int().nonnegative().optional(),
        // 0-based indexes of completed steps (progressive)
        completedStepIndexes: zod_1.z.array(zod_1.z.number().int().nonnegative()).optional(),
        // whether the tactic is fully completed (all steps done)
        completed: zod_1.z.boolean().optional(),
    }),
});
